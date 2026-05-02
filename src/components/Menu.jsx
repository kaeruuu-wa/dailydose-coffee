import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuData, addOns } from '../data/menuData'

// ── Badge ──────────────────────────────────────────────────────
function Badge({ type }) {
  if (!type) return null
  const isBest = type === 'Best Seller'
  return (
    <span
      className={`inline-block font-sans text-[0.56rem] font-semibold tracking-wide
                  uppercase px-2 py-[3px] rounded-full leading-none whitespace-nowrap ${
        isBest ? 'bg-highlight text-white' : 'bg-primary text-white dark:bg-zinc-600'
      }`}
    >
      {isBest ? '★ ' : ''}{type}
    </span>
  )
}

// ── Menu Card ─────────────────────────────────────────────────
function MenuCard({ item, hasSizes, size }) {
  const price = hasSizes ? item.price[size] : item.price

  return (
    <motion.article
      whileHover={{ borderColor: '#C8A97E' }}
      transition={{ duration: 0.18 }}
      className="bg-background dark:bg-zinc-800 border border-border dark:border-zinc-700
                 rounded-xl p-4 md:p-5 cursor-default"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h4 className="font-serif text-[0.98rem] font-semibold text-primary dark:text-white leading-tight">
              {item.name}
            </h4>
            <Badge type={item.badge} />
          </div>
          {item.description && (
            <p className="font-sans text-xs text-secondary dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
        <span className="font-sans text-sm font-semibold text-primary dark:text-white flex-shrink-0 mt-0.5">
          ₱{price}
        </span>
      </div>
    </motion.article>
  )
}

// ── Size Toggle ───────────────────────────────────────────────
function SizeToggle({ size, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.22 }}
      className="flex justify-center mt-5"
    >
      <div className="inline-flex items-center bg-background dark:bg-zinc-800
                      border border-border dark:border-zinc-700 rounded-full p-1 gap-1">
        {[
          { key: 'sm', label: '16 oz' },
          { key: 'lg', label: '22 oz' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`px-5 py-1.5 rounded-full font-sans text-xs font-medium transition-all duration-200 ${
              size === key
                ? 'bg-primary dark:bg-zinc-600 text-white shadow-sm'
                : 'text-secondary dark:text-zinc-400 hover:text-primary dark:hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

// ── Static size label (for Hot Coffee: "12 oz") ───────────────
function SizeLabel({ label }) {
  return (
    <div className="flex justify-center mt-5">
      <span className="font-sans text-xs text-secondary dark:text-zinc-400
                       border border-border dark:border-zinc-600
                       rounded-full px-4 py-1.5">
        {label}
      </span>
    </div>
  )
}

// ── Add-ons strip ─────────────────────────────────────────────
function AddOnsStrip() {
  return (
    <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4
                    border border-border dark:border-zinc-700 rounded-xl p-4 md:p-5
                    bg-background dark:bg-zinc-800">
      <p className="font-sans text-xs font-semibold text-primary dark:text-white uppercase tracking-widest
                    flex-shrink-0">
        Add Ons
      </p>
      <div className="flex flex-wrap gap-2">
        {addOns.map(({ label, price }) => (
          <span
            key={label}
            className="font-sans text-xs text-secondary dark:text-zinc-400
                       border border-border dark:border-zinc-600
                       rounded-full px-3 py-1 flex items-center gap-1.5"
          >
            {label}
            <span className="text-highlight font-medium">{price}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────
export default function Menu() {
  const [active, setActive] = useState(menuData[0].category)
  const [size,   setSize]   = useState('sm')

  const activeCategory = menuData.find(c => c.category === active)

  return (
    <section id="menu" className="bg-surface dark:bg-zinc-900 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-[0.66rem] tracking-[0.24em] uppercase text-highlight mb-3">
            What We Serve
          </p>
          <h2 className="font-serif font-bold text-primary dark:text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}>
            Our Menu
          </h2>
        </motion.div>

        {/* ── Category tabs — horizontally scrollable on mobile ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto scrollbar-hide -mx-5 px-5"
        >
          <div className="inline-flex items-center border border-border dark:border-zinc-700 rounded-full p-1 gap-1
                          bg-background dark:bg-zinc-800 min-w-max mx-auto block">
            {menuData.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActive(cat.category)}
                className={`px-3.5 md:px-5 py-2 rounded-full font-sans text-[0.78rem] md:text-[0.82rem]
                            font-medium transition-all duration-200 whitespace-nowrap ${
                  active === cat.category
                    ? 'bg-primary dark:bg-zinc-600 text-white shadow-sm'
                    : 'text-secondary dark:text-zinc-400 hover:text-primary dark:hover:text-white'
                }`}
              >
                <span className="mr-1">{cat.emoji}</span>
                {cat.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Size toggle / size label ── */}
        <AnimatePresence mode="wait">
          {activeCategory.hasSizes ? (
            <SizeToggle key="toggle" size={size} onChange={setSize} />
          ) : activeCategory.sizeLabel ? (
            <SizeLabel key="label" label={activeCategory.sizeLabel} />
          ) : (
            <div key="none" className="mt-5" />
          )}
        </AnimatePresence>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.045, ease: [0.4, 0, 0.2, 1] }}
              >
                <MenuCard
                  item={item}
                  hasSizes={activeCategory.hasSizes}
                  size={size}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Add-ons strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AddOnsStrip />
        </motion.div>

        {/* ── Menu note ── */}
        <p className="text-center font-sans text-xs text-secondary dark:text-zinc-500 italic mt-6">
          Prices may vary. Message us on Facebook for bulk orders or inquiries.
        </p>

      </div>
    </section>
  )
}
