import { useState, useEffect } from 'react'

const links = [
  { href: '#about',              pt: 'Sobre',           en: 'About' },
  { href: '#skills',             pt: 'Habilidades',     en: 'Skills' },
  { href: '#projects',           pt: 'Projetos',        en: 'Projects' },
  { href: '#reactbits',          pt: 'React Bits',      en: 'React Bits' },
  { href: '#contributor-stats',  pt: 'Contributor',     en: 'Contributor' },
  { href: '#experience',         pt: 'Experiências',    en: 'Experience' },
  { href: '#contact',            pt: 'Contato',         en: 'Contact' },
]

export default function Navbar({ lang, toggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white">AM<span className="text-primary">.</span></a>

        <button className="md:hidden text-gray-400 hover:text-white p-1" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">{l[lang]}</a>
            </li>
          ))}
          <li>
            <button onClick={toggleLang} className="border border-primary/60 text-primary hover:bg-primary hover:text-white px-3 py-1 rounded-lg text-xs font-bold transition-all">
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
          </li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 px-6 py-4" style={{ background: 'rgba(3,7,18,0.97)' }}>
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-300">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary transition-colors" onClick={() => setOpen(false)}>{l[lang]}</a>
              </li>
            ))}
            <li>
              <button onClick={() => { toggleLang(); setOpen(false) }} className="border border-primary/60 text-primary px-3 py-1 rounded-lg text-xs font-bold w-fit">
                {lang === 'pt' ? 'EN' : 'PT'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
