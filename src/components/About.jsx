import { motion } from 'framer-motion'
import aboutImg from '../assets/images/background.jpg'

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

const STATS = [
  { num: '50+', label: 'Menu Items' },
  { num: '2025', label: 'Year Founded' },
  { num: '1',    label: 'Neighborhood We Love' },
]

export default function About() {
  return (
    <section id="about" className="bg-background dark:bg-zinc-950 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: exterior photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Wide exterior shot — landscape crop */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[420px] lg:h-full lg:min-h-[500px] bg-surface dark:bg-zinc-800">
              <img
                src={aboutImg}
                alt="DailyDose Coffee — night exterior shot"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              {/* Warm dark tint to give it depth */}
              <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-3 lg:bottom-6 lg:right-6
                            bg-background dark:bg-zinc-900 border border-border dark:border-zinc-700 rounded-xl px-4 py-3.5
                            shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <p className="font-serif text-sm font-semibold text-primary dark:text-white leading-none">Est. 2025</p>
              <p className="font-sans text-[0.58rem] tracking-[0.22em] uppercase text-secondary dark:text-zinc-400 mt-1">
                Santo Domingo, IS
              </p>
            </div>
          </motion.div>

          {/* ── Right: story + stats ── */}
          <div className="order-1 lg:order-2">

            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-sans text-[0.66rem] tracking-[0.24em] uppercase text-highlight mb-3"
            >
              Our Story
            </motion.p>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-serif font-bold text-primary dark:text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              A cup with<br />a story.
            </motion.h2>

            {/* TODO: Replace with your actual origin story */}
            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-sans text-sm text-secondary dark:text-zinc-400 leading-[1.95] mb-4"
            >
              DailyDose Coffee was born from a simple belief: that a great cup of coffee can shape
              the start of anyone's day. Nestled in the heart of Poblacion, we set out to create a
              space where quality and warmth go hand in hand — a place that feels like home from
              the very first sip.
            </motion.p>

            {/* TODO: Replace with your shop's mission or team story */}
            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-sans text-sm text-secondary dark:text-zinc-400 leading-[1.95] mb-10"
            >
              From morning coffee rituals to late-night study sessions, we're here for every moment
              that matters. DailyDose isn't just a coffee shop — it's your daily prescription.
            </motion.p>

            {/* Stat counters */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-3 gap-3 pt-8 border-t border-border dark:border-zinc-800"
            >
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <p className="font-serif text-[2.2rem] font-bold text-highlight leading-none">
                    {num}
                  </p>
                  <p className="font-sans text-[0.62rem] text-secondary dark:text-zinc-400 uppercase tracking-wider mt-2 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
