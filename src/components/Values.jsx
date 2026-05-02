import { motion } from 'framer-motion'

// Clean line SVG icons — matches editorial minimalism
const RoastIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
)

const LocalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const LoveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const VALUES = [
  {
    Icon: RoastIcon,
    label: 'Freshly Roasted',
    // PLACEHOLDER: Update with your actual sourcing/roasting process
    description: 'Beans selected for peak flavor, roasted and brewed fresh for every cup we serve.',
  },
  {
    Icon: LocalIcon,
    label: 'Local & Proud',
    // PLACEHOLDER: Update to highlight your local roots or community ties
    description: 'Born in Santo Domingo, made for the neighborhood — one cup at a time.',
  },
  {
    Icon: LoveIcon,
    label: 'Made with Love',
    // PLACEHOLDER: Update to reflect your shop's personality and team spirit
    description: 'Every drink is crafted with intention, warmth, and a genuine love for good coffee.',
  },
]

export default function Values() {
  return (
    <section className="bg-background dark:bg-zinc-900 border-y border-border dark:border-zinc-800 py-14 md:py-16" aria-label="Our values">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3
                        divide-y md:divide-y-0 md:divide-x divide-border dark:divide-zinc-800">
          {VALUES.map(({ Icon, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col items-center md:items-start text-center md:text-left
                         px-4 md:px-10 py-10 md:py-6
                         first:md:pl-0 last:md:pr-0"
            >
              {/* Icon in highlight color */}
              <span className="text-highlight mb-4" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="font-serif text-[1.05rem] font-semibold text-primary dark:text-white mb-2">
                {label}
              </h3>
              <p className="font-sans text-sm text-secondary dark:text-zinc-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
