import { useState } from 'react'
import { PROFESSOR_PROJECTS } from '../data/index.js'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

function Carousel({ images, name }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  return (
    <div className="relative w-full rounded-xl overflow-hidden group" style={{ aspectRatio: '16/9' }}>
      <img
        src={images[idx]}
        alt={`${name} — screenshot ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">
            ‹
          </button>
          <button onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
          <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
            {idx + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}

export default function ProfessorProjects({ lang }) {
  return (
    <section id="professor-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Projetos de Referência' : 'Reference Projects'}
          </h2>
          <p className="text-gray-400 text-sm">
            {lang === 'pt'
              ? 'Projetos desenvolvidos pelo professor como referência para a disciplina DIAW'
              : 'Projects developed by the professor as reference for the DIAW course'}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROFESSOR_PROJECTS.map(p => (
            <div key={p.name} className="card p-5 flex flex-col gap-4">
              <Carousel images={p.images} name={p.name} />
              <div className="flex-1 flex flex-col">
                <h3 className="text-base font-bold text-white mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-1">{p.description[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techs.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-all w-fit"
                >
                  <GithubIcon />
                  {lang === 'pt' ? 'Ver Repositório' : 'View Repository'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
