const tags = ['React', 'Node.js', 'Java', 'Python', 'SQL', 'Git', 'Spring Boot', 'TypeScript']

export default function About({ lang }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇧🇷</span>
              <h3 className="text-lg font-bold text-white">Português</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Olá! Sou <strong className="text-white">Armando Moreira</strong>, estudante de{' '}
              <strong className="text-primary">Engenharia de Software</strong> na PUC Minas. Tenho paixão por criar soluções tecnológicas que impactam positivamente a vida das pessoas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Atuo como desenvolvedor full stack com foco em desenvolvimento web moderno. Meus interesses incluem arquitetura de software, desenvolvimento de APIs RESTful, interfaces de usuário acessíveis e boas práticas de engenharia de software.
            </p>
            <div className="flex flex-wrap gap-2">{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🇺🇸</span>
              <h3 className="text-lg font-bold text-white">English</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hi! I'm <strong className="text-white">Armando Moreira</strong>, a{' '}
              <strong className="text-primary">Software Engineering</strong> student at PUC Minas. I'm passionate about building technology solutions that positively impact people's lives.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I work as a full stack developer focused on modern web development. My interests include software architecture, RESTful API development, accessible user interfaces, and software engineering best practices.
            </p>
            <div className="flex flex-wrap gap-2">{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
