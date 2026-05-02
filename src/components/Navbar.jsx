import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Menu',     href: '#menu' },
  { label: 'About',    href: '#about' },
  { label: 'Location', href: '#visit' },
]

const mobileItem = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
}

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
)

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
)

export default function Navbar({ onOpenRecommender }) {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark,     setDark]     = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)
  const toggleDark = () => setDark(v => !v)

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 bg-background dark:bg-zinc-950 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border dark:border-zinc-800'
            : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">

          {/* ── CSS text logo ── */}
          <a
            href="#"
            onClick={close}
            className="flex flex-col items-center leading-none flex-shrink-0"
            aria-label="DailyDose Coffee — Back to top"
          >
            <span className="logo-main">DailyDose.</span>
            <span className="logo-sub">coffee</span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-[0.82rem] font-medium text-secondary dark:text-zinc-400
                           hover:text-primary dark:hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── CTA + dark toggle + hamburger ── */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="w-8 h-8 flex items-center justify-center rounded-full
                         border border-border dark:border-zinc-700
                         text-secondary dark:text-zinc-400
                         hover:text-primary dark:hover:text-white
                         hover:border-primary/40 dark:hover:border-zinc-500
                         transition-colors duration-200"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Recommend me a Drink */}
            <button
              onClick={onOpenRecommender}
              className="hidden md:inline-flex items-center gap-1.5
                         border border-primary/25 dark:border-white/25
                         text-secondary dark:text-zinc-300
                         font-sans text-[0.78rem] font-medium px-4 py-2 rounded-full
                         hover:border-primary/55 dark:hover:border-white/55
                         hover:text-primary dark:hover:text-white
                         transition-all duration-200"
            >
              ✨ Recommend me a Drink
            </button>

            {/* TODO: Replace href="#" with Facebook Messenger or WhatsApp link */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5
                         bg-primary text-white dark:bg-highlight dark:text-white
                         font-sans text-[0.8rem] font-medium px-5 py-2.5 rounded-full
                         hover:bg-accent dark:hover:bg-highlight/80
                         active:scale-95 transition-all duration-200"
            >
              Order Now
            </a>

            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center rounded"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={`absolute block w-[20px] h-[1.5px] bg-primary dark:bg-white rounded-full
                transition-all duration-300 origin-center
                ${open ? 'rotate-45' : '-translate-y-[6px]'}`} />
              <span className={`absolute block w-[20px] h-[1.5px] bg-primary dark:bg-white rounded-full
                transition-all duration-200
                ${open ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`absolute block w-[20px] h-[1.5px] bg-primary dark:bg-white rounded-full
                transition-all duration-300 origin-center
                ${open ? '-rotate-45' : 'translate-y-[6px]'}`} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40
                       bg-background dark:bg-zinc-950
                       flex flex-col items-center justify-center gap-2
                       border-t border-border dark:border-zinc-800"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={close}
                custom={i}
                variants={mobileItem}
                initial="hidden"
                animate="visible"
                className="font-serif text-[2.2rem] font-bold text-primary dark:text-white
                           hover:text-highlight transition-colors duration-150 py-1"
              >
                {label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => { close(); onOpenRecommender() }}
              custom={NAV_LINKS.length}
              variants={mobileItem}
              initial="hidden"
              animate="visible"
              className="mt-4 border border-primary/30 dark:border-white/25
                         text-secondary dark:text-zinc-300 font-sans text-sm font-medium
                         px-8 py-3 rounded-full
                         hover:border-primary/60 dark:hover:border-white/55
                         hover:text-primary dark:hover:text-white
                         transition-colors"
            >
              ✨ Recommend me a Drink
            </motion.button>

            {/* TODO: Replace href="#" with your actual order link */}
            <motion.a
              href="#"
              onClick={close}
              custom={NAV_LINKS.length + 1}
              variants={mobileItem}
              initial="hidden"
              animate="visible"
              className="mt-2 bg-primary dark:bg-highlight text-white font-sans text-sm font-medium
                         px-8 py-3.5 rounded-full hover:bg-accent dark:hover:bg-highlight/80 transition-colors"
            >
              Order Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
