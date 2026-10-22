import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ReactBitsSection from './components/ReactBits/index.jsx'
import ContributorStatsSection from './components/ContributorStats/index.jsx'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('pt')
  const toggleLang = () => setLang(l => l === 'pt' ? 'en' : 'pt')

  return (
    <div className="text-gray-100 font-sans antialiased">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <ReactBitsSection lang={lang} />
      <ContributorStatsSection lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
      <Footer />
    </div>
  )
}
