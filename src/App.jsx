import { useState } from 'react'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Values           from './components/Values'
import MustTry          from './components/MustTry'
import About            from './components/About'
import Menu             from './components/Menu'
import Visit            from './components/Visit'
import Footer           from './components/Footer'
import DrinkRecommender from './components/DrinkRecommender'

export default function App() {
  const [recommenderOpen, setRecommenderOpen] = useState(false)

  return (
    <>
      <Navbar onOpenRecommender={() => setRecommenderOpen(true)} />
      <main>
        <Hero />
        <Values />
        <MustTry />
        <About />
        <Menu />
        <Visit />
      </main>
      <Footer />
      <DrinkRecommender
        isOpen={recommenderOpen}
        onClose={() => setRecommenderOpen(false)}
      />
    </>
  )
}
