import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QUESTIONS = [
  {
    q: 'Are you in the mood for:',
    options: [
      'Coffee',
      'Matcha',
      'Non-coffee (chocolate / fruit / milk-based)',
    ],
  },
  {
    q: 'What kind of drink are you leaning toward?',
    options: [
      'Creamy / milky',
      'Light & refreshing',
      'Strong & bold',
    ],
  },
  {
    q: 'Your love life right now feels like:',
    options: [
      'Warm, steady, and comforting',
      'Complicated… but kinda exciting',
      'Nonexistent / I don\'t want to talk about it',
    ],
  },
  {
    q: 'Family vibe check—what does home feel like these days?',
    options: [
      'Peaceful and grounding',
      'Loud, chaotic, but full of life',
      'Distant… I just need a breather',
    ],
  },
  {
    q: 'For yourself… what do you honestly need right now?',
    options: [
      'Comfort',
      'Energy',
      'Something new / a change',
    ],
  },
]

async function getRecommendation(answers) {
  const res = await fetch('http://localhost:3001/api/recommend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `Server error ${res.status}` }))
    throw new Error(err.error || `Server error ${res.status}`)
  }
  return res.json()
}

export default function DrinkRecommender({ isOpen, onClose }) {
  const [step,    setStep]    = useState(0)
  const [answers, setAnswers] = useState(Array(5).fill(null))
  const [view,    setView]    = useState('quiz') // 'quiz' | 'loading' | 'result' | 'error'
  const [result,  setResult]  = useState(null)
  const [error,   setError]   = useState(null)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  // Reset whenever modal opens
  useEffect(() => {
    if (!isOpen) return
    clearTimeout(timerRef.current)
    setStep(0)
    setAnswers(Array(5).fill(null))
    setView('quiz')
    setResult(null)
    setError(null)
  }, [isOpen])

  const reset = () => {
    clearTimeout(timerRef.current)
    setStep(0)
    setAnswers(Array(5).fill(null))
    setView('quiz')
    setResult(null)
    setError(null)
  }

  const pickOption = (option) => {
    setAnswers(prev => {
      const next = prev.slice()
      next[step] = option
      return next
    })
    if (step < 4) {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setStep(s => s + 1), 220)
    }
  }

  const goBack = () => {
    clearTimeout(timerRef.current)
    setStep(s => s - 1)
  }

  const submit = async () => {
    if (!answers[4]) return
    setView('loading')
    try {
      const rec = await getRecommendation(answers)
      setResult(rec)
      setView('result')
    } catch (e) {
      setError(e.message || 'Something went wrong. Please try again.')
      setView('error')
    }
  }

  const currentQ = QUESTIONS[step]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4
                     bg-black/55 backdrop-blur-sm"
          onClick={e => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 18 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-sm
                       bg-white dark:bg-zinc-900
                       border border-border dark:border-zinc-800
                       rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between
                            px-6 pt-5 pb-4
                            border-b border-border dark:border-zinc-800">
              <div>
                <p className="font-sans text-[0.6rem] uppercase tracking-[0.22em] text-highlight mb-0.5">
                  AI Barista
                </p>
                <h3 className="font-serif text-lg font-bold text-primary dark:text-white leading-tight">
                  Find Your Drink
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 flex items-center justify-center rounded-full text-lg
                           text-secondary dark:text-zinc-400
                           hover:text-primary dark:hover:text-white
                           hover:bg-surface dark:hover:bg-zinc-800
                           transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 min-h-[260px] flex flex-col">
              <AnimatePresence mode="wait">

                {/* ── Quiz ── */}
                {view === 'quiz' && (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1"
                  >
                    {/* Progress dots */}
                    <div className="flex items-center gap-1.5 mb-5">
                      {QUESTIONS.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i < step
                              ? 'bg-highlight w-4'
                              : i === step
                              ? 'bg-highlight w-6'
                              : 'bg-border dark:bg-zinc-700 w-3'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="font-sans text-[0.68rem] text-secondary dark:text-zinc-500 mb-1">
                      Question {step + 1} of {QUESTIONS.length}
                    </p>
                    <p className="font-serif text-[1.02rem] font-semibold text-primary dark:text-white leading-snug mb-4">
                      {currentQ.q}
                    </p>

                    <div className="flex flex-col gap-2 flex-1">
                      {currentQ.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => pickOption(opt)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl
                                     font-sans text-sm transition-all duration-150
                                     border ${
                            answers[step] === opt
                              ? 'border-highlight bg-highlight/10 text-primary dark:text-white font-medium'
                              : 'border-border dark:border-zinc-700 text-secondary dark:text-zinc-400 hover:border-highlight/60 hover:text-primary dark:hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {step > 0 ? (
                        <button
                          onClick={goBack}
                          className="font-sans text-xs text-secondary dark:text-zinc-500
                                     hover:text-primary dark:hover:text-white transition-colors"
                        >
                          ← Back
                        </button>
                      ) : <div />}

                      {step === 4 && (
                        <button
                          onClick={submit}
                          disabled={!answers[4]}
                          className="flex items-center gap-1.5
                                     bg-highlight text-white font-sans text-sm font-medium
                                     px-5 py-2.5 rounded-full
                                     hover:bg-highlight/85 active:scale-95
                                     disabled:opacity-40 disabled:cursor-not-allowed
                                     transition-all duration-150"
                        >
                          Recommend my Drink ✨
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ── Loading ── */}
                {view === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center flex-1 gap-4 py-6"
                  >
                    <div className="w-10 h-10 border-2 border-highlight/30 border-t-highlight
                                    rounded-full animate-spin" />
                    <p className="font-serif text-base text-primary dark:text-white">
                      Brewing your recommendation…
                    </p>
                    <p className="font-sans text-xs text-secondary dark:text-zinc-500">
                      Our AI barista is thinking
                    </p>
                  </motion.div>
                )}

                {/* ── Result ── */}
                {view === 'result' && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col flex-1"
                  >
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-3">{result.emoji}</div>
                      <h4 className="font-serif text-xl font-bold text-primary dark:text-white">
                        {result.drink}
                      </h4>
                      <div className="flex items-center justify-center gap-2 mt-1.5">
                        <span className="font-sans text-xs text-secondary dark:text-zinc-400">
                          {result.size}
                        </span>
                        <span className="text-border dark:text-zinc-700">·</span>
                        <span className="font-sans text-sm font-semibold text-highlight">
                          {result.price}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-secondary dark:text-zinc-400
                                  text-center leading-relaxed mb-5 px-1 flex-1">
                      {result.reason}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={reset}
                        className="flex-1 py-2.5 rounded-full
                                   border border-border dark:border-zinc-700
                                   font-sans text-sm text-secondary dark:text-zinc-400
                                   hover:border-primary/50 dark:hover:border-zinc-500
                                   hover:text-primary dark:hover:text-white
                                   transition-colors"
                      >
                        Start Over
                      </button>
                      <a
                        href="#menu"
                        onClick={onClose}
                        className="flex-1 py-2.5 rounded-full text-center
                                   bg-highlight text-white font-sans text-sm font-medium
                                   hover:bg-highlight/85 transition-colors"
                      >
                        Order This →
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* ── Error ── */}
                {view === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center flex-1 gap-4 py-6 text-center"
                  >
                    <div className="text-3xl">😔</div>
                    <p className="font-sans text-sm text-secondary dark:text-zinc-400 max-w-[220px]">
                      {error}
                    </p>
                    <button
                      onClick={reset}
                      className="px-5 py-2 rounded-full bg-highlight text-white
                                 font-sans text-sm font-medium
                                 hover:bg-highlight/85 transition-colors"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
