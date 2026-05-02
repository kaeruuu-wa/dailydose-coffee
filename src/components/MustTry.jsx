import { motion } from 'framer-motion'
import mustTryImg from '../assets/images/must-try-menu.jpg'
import { menuData } from '../data/menuData'

// Gather all Must Try items from the full menu, with category + size info attached
const mustTryItems = menuData
  .flatMap(cat =>
    cat.items.map(item => ({
      ...item,
      categoryName: cat.category,
      hasSizes: cat.hasSizes,
    }))
  )
  .filter(item => item.badge === 'Must Try')

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.4, 0, 0.2, 1] },
  }),
}

export default function MustTry() {
  return (
    <section className="bg-surface dark:bg-zinc-900 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[58%_1fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: image ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:h-[480px] bg-border dark:bg-zinc-800">
              <img
                src={mustTryImg}
                alt="DailyDose Coffee must-try drinks"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-primary/8 pointer-events-none" />
            </div>

            {/* Decorative pill — item count */}
            <div className="absolute top-4 left-4
                            bg-background/90 dark:bg-zinc-900/90 backdrop-blur-sm
                            border border-border dark:border-zinc-700
                            rounded-full px-3.5 py-1.5">
              <p className="font-sans text-[0.65rem] font-medium text-primary dark:text-white tracking-wide">
                {mustTryItems.length} Drinks You Can't Miss
              </p>
            </div>
          </motion.div>

          {/* ── Right: featured list ── */}
          <div className="order-1 lg:order-2">

            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-sans text-[0.66rem] tracking-[0.24em] uppercase text-highlight mb-3"
            >
              Must Try
            </motion.p>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-serif font-bold text-primary dark:text-white leading-[1.08] mb-2"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)' }}
            >
              Can't leave<br />without these.
            </motion.h2>

            <motion.p
              custom={0.18}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-sans text-sm text-secondary dark:text-zinc-400 leading-relaxed mb-10"
            >
              Our crew's personal favorites — the drinks we make with extra love.
            </motion.p>

            {/* Item rows */}
            <div className="space-y-0 divide-y divide-border dark:divide-zinc-800">
              {mustTryItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={0.22 + i * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="flex items-center justify-between py-5"
                >
                  <div>
                    <h4 className="font-serif text-[1.05rem] font-semibold text-primary dark:text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[0.68rem] tracking-wide uppercase text-secondary dark:text-zinc-500 mt-0.5">
                      {item.categoryName}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="font-sans text-sm font-semibold text-highlight">
                      {item.hasSizes
                        ? `₱${item.price.sm} – ₱${item.price.lg}`
                        : `₱${item.price}`}
                    </p>
                    {item.hasSizes && (
                      <p className="font-sans text-[0.6rem] text-secondary dark:text-zinc-500 mt-0.5">16 oz / 22 oz</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA to menu */}
            <motion.div
              custom={0.22 + mustTryItems.length * 0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-8"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2
                           border border-border dark:border-zinc-700
                           text-primary dark:text-white
                           font-sans text-sm font-medium px-6 py-3 rounded-full
                           hover:border-primary dark:hover:border-zinc-400
                           transition-all duration-200"
              >
                See Full Menu
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
