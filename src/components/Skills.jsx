import { useState } from 'react'
import SkillsGlobe from './SkillsGlobe/index.jsx'
import SKILLS, { CATEGORIES } from '../data/skills.js'

export default function Skills({ lang }) {
  const [active, setActive] = useState('Todos')

  const allLabel = lang === 'pt' ? 'Todos' : 'All'
  const cats = [allLabel, ...CATEGORIES]
  const filtered = active === allLabel ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'rgba(17,24,39,0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Habilidades' : 'Skills'}
          </h2>
          <p className="text-gray-400 text-sm">
            {lang === 'pt' ? 'Arraste o globo para explorar as tecnologias' : 'Drag the globe to explore technologies'}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cats.map(c => (
            <button
              key={c}
              className={`cat-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <SkillsGlobe skills={filtered} />
      </div>
    </section>
  )
}
