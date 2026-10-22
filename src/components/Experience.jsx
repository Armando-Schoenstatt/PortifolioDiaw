import { EXPERIENCES } from '../data/index.js'

export default function Experience({ lang }) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Experiências' : 'Experience'}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="space-y-6">
          {EXPERIENCES.map(e => (
            <div key={e.company} className="card p-6 flex gap-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(99,102,241,0.1)' }}>
                {e.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="text-base font-bold text-white">{e.role[lang]}</h3>
                    <p className="text-primary text-sm font-medium">{e.company}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {e.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{e.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
