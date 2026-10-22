const t = {
  pt: { greeting: 'Olá, eu sou', sub: 'Estudante de Engenharia de Software · Desenvolvedor Full Stack', cta1: 'Ver Projetos', cta2: 'Entrar em Contato' },
  en: { greeting: "Hi, I'm",    sub: 'Software Engineering Student · Full Stack Developer',           cta1: 'View Projects', cta2: 'Get in Touch' },
}

export default function Hero({ lang }) {
  const tx = t[lang]
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-bg absolute inset-0 pointer-events-none" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="w-28 h-28 rounded-full border-4 border-primary mx-auto mb-6 bg-primary/20 flex items-center justify-center text-4xl font-extrabold text-primary shadow-xl shadow-primary/20">
          AM
        </div>
        <p className="text-primary font-semibold text-sm mb-3 tracking-[0.2em] uppercase">{tx.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">Armando Moreira</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10 font-light">{tx.sub}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            {tx.cta1}
          </a>
          <a href="#contact" className="border border-gray-700 hover:border-primary text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300">
            {tx.cta2}
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 hover:text-primary transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </a>
    </section>
  )
}
