export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-zinc-950 border-t border-white/[0.08] dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row
                      items-center justify-between gap-1.5">
        <p className="font-sans text-[0.72rem] text-white/30 text-center sm:text-left">
          © {year} DailyDose Coffee · Poblacion, Santo Domingo, Ilocos Sur, Philippines
        </p>
        {/* Secondary tagline */}
        <p className="font-serif text-[0.78rem] italic text-white/20 text-center sm:text-right">
          Your Evening Prescription.
        </p>
      </div>
    </footer>
  )
}
