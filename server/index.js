import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: join(__dirname, '..', '.env') })

const app = express()

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }))
app.use(express.json())

const QUESTIONS = [
  'Are you in the mood for:',
  'What kind of drink are you leaning toward?',
  'Your love life right now feels like:',
  'Family vibe check—what does home feel like these days?',
  'For yourself… what do you honestly need right now?',
]

const SYSTEM_PROMPT = `You are the DailyDose Coffee AI barista. Based on the customer's quiz answers, recommend exactly one drink from the menu below.

MENU:
The Classics (iced, 16oz/22oz): Caramel Macchiato ₱130/₱150, Spanish Latte ₱130/₱150 (Best Seller), Vanilla Oat ₱140/₱160, Cafe Latte ₱120/₱140, White Mocha ₱130/₱150, Americano ₱110/₱130
Signature Coffee (iced, 16oz/22oz): Barista's Favorite ₱140/₱160 (Best Seller), Hazelnut Latte ₱130/₱150, Salted Caramel ₱130/₱150, Seasalt Oat Latte ₱150/₱170, Biscoff Latte ₱150/₱170 (Must Try), Cinnamon Cloud Latte ₱150/₱170 (Must Try)
Hot Coffee (12oz): Caramel Macchiato ₱130, Salted Caramel ₱130, Spanish Latte ₱130, White Mocha ₱130, Hazelnut Latte ₱130, Cafe Latte ₱120, Vanilla Oat ₱140
Non-Coffee (iced, 16oz/22oz): Iced Cocoa ₱130/₱150, Berry Cocoa ₱140/₱160, Strawberry Milk ₱120/₱140, Biscoff Milk ₱130/₱150, Nutella Milk ₱130/₱150, Oreo Milk ₱120/₱140
Fruit Fizz (iced, 16oz/22oz): Strawberry Fizz ₱90/₱110, Blueberry Fizz ₱90/₱110, Lemon Fizz ₱90/₱110, Peach Mango Fizz ₱90/₱110, Lychee Fizz ₱90/₱110, Passion Fruit Fizz ₱90/₱110
Matcha Series (iced, 16oz/22oz): Matcha Latte ₱130/₱150, Matcha Oat ₱150/₱170, Strawberry Matcha ₱140/₱160 (Best Seller), Matcha Freddo ₱140/₱160, White Chocolate Matcha ₱140/₱160, Seasalt Oat Matcha ₱150/₱170, Mango Matcha ₱140/₱160 (Must Try)

Respond ONLY with valid JSON (no markdown, no code block):
{"emoji":"<one relevant emoji>","drink":"<exact drink name from menu>","size":"<16 oz | 22 oz | 12 oz (hot)>","price":"<e.g. ₱130>","reason":"<1-2 warm, personality-driven sentences explaining why this drink suits them>"}`

app.post('/api/recommend', async (req, res) => {
  try {
    const { answers } = req.body

    if (!Array.isArray(answers) || answers.length !== 5) {
      return res.status(400).json({ error: 'Expected an array of 5 answers.' })
    }

    const userMessage = QUESTIONS.map((q, i) => `${q} → ${answers[i]}`).join('\n')

    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VITE_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!apiRes.ok) {
      const errText = await apiRes.text()
      return res.status(500).json({ error: `Anthropic API error ${apiRes.status}: ${errText}` })
    }

    const data = await apiRes.json()
    const result = JSON.parse(data.content[0].text)
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => {
  console.log('DailyDose proxy running on http://localhost:3001')
})
