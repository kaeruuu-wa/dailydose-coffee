import { motion } from 'framer-motion'
import backgroundImg from '../assets/images/nav-background.png'

const BULBS = [
  { x: '5%',  cord: 42, delay: '0s',    dur: '4.2s' },
  { x: '14%', cord: 56, delay: '0.65s', dur: '4.8s' },
  { x: '24%', cord: 38, delay: '1.1s',  dur: '4.0s' },
  { x: '34%', cord: 50, delay: '0.35s', dur: '4.6s' },
  { x: '44%', cord: 45, delay: '0.9s',  dur: '3.8s' },
  { x: '54%', cord: 60, delay: '0.2s',  dur: '4.4s' },
  { x: '64%', cord: 40, delay: '1.3s',  dur: '4.1s' },
  { x: '74%', cord: 52, delay: '0.75s', dur: '4.9s' },
  { x: '84%', cord: 44, delay: '1.05s', dur: '4.3s' },
  { x: '93%', cord: 58, delay: '0.5s',  dur: '4.7s' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* ── Hanging lights — dark mode only ── */}
      <div
        className="absolute top-16 inset-x-0 hidden dark:block pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          style={{ height: 80, display: 'block' }}
        >
          {/* Horizontal string */}
          <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(255,201,74,0.2)" strokeWidth="1" />
          {/* Bulbs */}
          {BULBS.map(({ x, cord, delay, dur }, i) => (
            <g
              key={i}
              style={{
                transformBox: 'fill-box',
                transformOrigin: '50% 0%',
                animation: `bulb-sway ${dur} ease-in-out ${delay} infinite`,
              }}
            >
              <line
                x1={x} y1="1" x2={x} y2={1 + cord}
                stroke="rgba(255,201,74,0.28)"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={1 + cord + 5}
                r="5"
                fill="#FFC94A"
                style={{
                  filter: 'drop-shadow(0 0 4px rgba(255,201,74,0.85)) drop-shadow(0 0 10px rgba(255,201,74,0.38))',
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── Full-bleed background image with dark overlay ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={backgroundImg}
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Light mode overlay; dark mode gets a heavier overlay */}
        <div className="absolute inset-0 bg-primary/72 dark:bg-black/85" />
        {/* Subtle warm vignette at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent dark:from-black/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 w-full py-16 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >

          {/* Location label */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-[0.66rem] tracking-[0.26em] uppercase
                       text-white/55 mb-7 flex items-center gap-2"
          >
            <svg className="w-3 h-3 text-highlight flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Poblacion, Santo Domingo, Ilocos Sur
          </motion.p>

          {/* Headline — tagline swaps with dark mode */}
          <motion.h1
            variants={fadeUp}
            className="font-serif font-bold text-white leading-[1.03]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            <span className="dark:hidden">Your Morning</span>
            <span className="hidden dark:inline">Your Evening</span>
            <br />
            <span className="text-highlight">Prescription.</span>
          </motion.h1>

          {/* Thin rule */}
          <motion.div variants={fadeUp} className="w-12 h-px bg-white/20 my-7" />

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs text-white/60 leading-[1.85] max-w-[360px] mb-10"
          >
            Specialty coffee crafted with care — find your ritual at the heart of Santo Domingo.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-highlight text-white
                         font-sans text-sm font-medium px-6 py-3.5 rounded-full
                         hover:bg-highlight/88 active:scale-95 transition-all duration-200"
            >
              View Menu
              <svg className="w-3.5 h-3.5 opacity-80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/30 text-white
                         font-sans text-sm font-medium px-6 py-3.5 rounded-full
                         hover:border-white/65 transition-all duration-200"
            >
              Our Story
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
