import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

const HOURS = [
  { day: 'Every Day', time: '6:00 PM – 12:00 AM' },
]

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const ArrowRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
)

const QRIcon = () => (
  <svg className="w-9 h-9 text-white/20" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75V16.5zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 18.75h.75v.75h-.75v-.75zM18.75 13.5h.75v.75h-.75v-.75zM18.75 18.75h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75V16.5z" />
  </svg>
)

export default function Visit() {
  return (
    <section id="visit" className="bg-primary dark:bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[0.66rem] tracking-[0.24em] uppercase text-highlight mb-3">
            Come Say Hi
          </p>
          <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)' }}>
            Visit Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-14">

          {/* ── Col 1: Hours · Address · Contact ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-9"
          >
            <div>
              <h4 className="font-serif text-[0.95rem] font-semibold text-white mb-4">Opening Hours</h4>
              <ul className="space-y-2.5 font-sans text-sm">
                {HOURS.map(({ day, time }) => (
                  <li key={day}
                      className="flex justify-between items-center text-white/50
                                 pb-2.5 border-b border-white/10 last:border-0 last:pb-0">
                    <span>{day}</span>
                    <span className="text-white font-medium ml-3 text-right">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-[0.95rem] font-semibold text-white mb-2.5">Address</h4>
              {/* TODO: Replace [Street/Building No.] with your actual address */}
              <address className="font-sans text-sm text-white/55 not-italic leading-[1.9]">
                Brgy. Poblacion<br />
                Santo Domingo, Ilocos Sur<br />
                Philippines 2706
              </address>
            </div>

            <div>
              <h4 className="font-serif text-[0.95rem] font-semibold text-white mb-2.5">Contact</h4>
              {/* TODO: Replace with your actual mobile number */}
              <a href="tel:+639XXXXXXXXX"
                 className="font-sans text-sm text-white/55 hover:text-highlight transition-colors block mb-1.5">
                +63 9XX XXX XXXX
              </a>
              {/* TODO: Replace href="#" with https://m.me/YourFacebookPageName */}
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="font-sans text-sm text-highlight hover:text-highlight/75 transition-colors">
                Message us on Messenger →
              </a>
            </div>
          </motion.div>

          {/* ── Col 2: Social ── */}
          <motion.div
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-3"
          >
            <h4 className="font-serif text-[0.95rem] font-semibold text-white mb-5">Follow Along</h4>

            <a
              href="https://www.facebook.com/share/17TcEEMUFu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/12 rounded-xl
                         px-5 py-4 hover:border-highlight hover:bg-white/[0.04] transition-all duration-200"
              aria-label="DailyDose Coffee on Facebook"
            >
              <FacebookIcon className="w-5 h-5 text-white/55 group-hover:text-highlight flex-shrink-0 transition-colors" />
              <div>
                <p className="font-sans text-sm font-medium text-white">Facebook</p>
                <p className="font-sans text-xs text-white/35 mt-0.5">DailyDose Coffee.</p>
              </div>
              <span className="ml-auto text-white/25 group-hover:text-highlight/55 transition-colors">
                <ArrowRight />
              </span>
            </a>

            <a
              href="https://www.instagram.com/ddose_coffee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/12 rounded-xl
                         px-5 py-4 hover:border-highlight hover:bg-white/[0.04] transition-all duration-200"
              aria-label="DailyDose Coffee on Instagram"
            >
              <InstagramIcon className="w-5 h-5 text-white/55 group-hover:text-highlight flex-shrink-0 transition-colors" />
              <div>
                <p className="font-sans text-sm font-medium text-white">Instagram</p>
                <p className="font-sans text-xs text-white/35 mt-0.5">@ddose_coffee</p>
              </div>
              <span className="ml-auto text-white/25 group-hover:text-highlight/55 transition-colors">
                <ArrowRight />
              </span>
            </a>
          </motion.div>

          {/* ── Col 3: GCash ── */}
          <motion.div
            custom={0.24}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col items-start"
          >
            <h4 className="font-serif text-[0.95rem] font-semibold text-white mb-6">Pay via GCash</h4>

            {/*
              TODO: Add your GCash QR:
                1. GCash app → avatar → "My QR Code" → save/screenshot
                2. Place as src/assets/images/qr-gcash.png
                3. import qrCode from '../assets/images/qr-gcash.png'
                4. Replace the div below with:
                   <img src={qrCode} alt="Scan to pay via GCash"
                        className="w-36 h-36 rounded-xl object-cover" />
            */}
            <div className="w-36 h-36 border-2 border-dashed border-white/18 rounded-xl
                            flex flex-col items-center justify-center gap-2 mb-4"
                 role="img" aria-label="GCash QR code placeholder">
              <QRIcon />
              <p className="font-sans text-[0.58rem] text-white/25 text-center leading-tight">
                GCash QR<br />Code Here
              </p>
            </div>

            {/* TODO: Replace with your GCash account name and number */}
            <p className="font-sans text-sm text-white/55 leading-[1.85]">
              <span className="text-white font-medium">[Your Name]</span><br />
              +63 9XX XXX XXXX
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
