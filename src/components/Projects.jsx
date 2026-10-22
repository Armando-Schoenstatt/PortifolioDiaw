import { useState } from 'react'
import { PROJECTS } from '../data/index.js'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

function ProjectImage({ images, name }) {
  const [idx, setIdx] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-36 rounded-xl mb-4 flex items-center justify-center text-4xl"
        style={{ background: 'rgba(99,102,241,0.08)', border: '1px dashed rgba(99,102,241,0.2)' }}>
        🖥️
      </div>
    )
  }

  return (
    <div className="relative w-full h-36 rounded-xl mb-4 overflow-hidden group">
      <img
        src={images[idx]}
        alt={`${name} screenshot ${idx + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
          >‹</button>
          <button
            onClick={() => setIdx(i => (i + 1) % images.length)}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
          >›</button>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects({ lang }) {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'rgba(17,24,39,0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Projetos' : 'Projects'}
          </h2>
          <p className="text-gray-400 text-sm">
            {lang === 'pt' ? 'Linha do tempo dos meus principais projetos' : 'Timeline of my main projects'}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-px" />
          <div className="space-y-10">
            {PROJECTS.map((p, i) => (
              <div key={p.name} className="relative flex items-start gap-6 md:gap-0">
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-gray-950 -translate-x-1.5 mt-6 z-10 shadow-md shadow-primary/40" />
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {p.year}
                </div>
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? '' : 'order-last'}`} />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="card p-6">
                    <ProjectImage images={p.images} name={p.name} />
                    <span className="md:hidden text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                      {p.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 mt-1">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description[lang]}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.techs.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-all"
                    >
                      <GithubIcon />
                      {lang === 'pt' ? 'Ver Repositório' : 'View Repository'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
