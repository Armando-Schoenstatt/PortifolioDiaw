import skillsHome from '../../SkillsGlobe/imgs/Home.png'
import skillsFiltro from '../../SkillsGlobe/imgs/Filtro.png'
import skillsLista from '../../SkillsGlobe/imgs/Lista.png'
import skillsMobile from '../../SkillsGlobe/imgs/Mobile.png'
import reactBitsFundo from '../../ReactBits/imgs/Fundo.png'
import reactBitsCodigo from '../../ReactBits/imgs/Codigo.png'
import reactBitsFumaca from '../../ReactBits/imgs/Fumaca.png'
import reactBitsFitas from '../../ReactBits/imgs/Fitas.png'
import reactBitsEnxame from '../../ReactBits/imgs/Enxame.png'
import reactBitsPontos from '../../ReactBits/imgs/Pontos.png'
import reactBitsPixels from '../../ReactBits/imgs/Pixels.png'
import contributorHome from '../../ContributorStats/imgs/Home.png'
import contributorProd from '../../ContributorStats/imgs/Produtividade.png'
import contributorBranches from '../../ContributorStats/imgs/Branches.png'
import contributorLog from '../../ContributorStats/imgs/Log.png'
import contributorTipos from '../../ContributorStats/imgs/TiposDeArquivo.png'

export const PROFESSOR_PROJECTS = [
  {
    name: 'SkillsGlobe',
    description: {
      pt: 'Globo 3D interativo de habilidades feito com React + Canvas 2D puro (sem Three.js). Ícones distribuídos com espiral de Fibonacci, perspectiva, inércia no arrasto e filtro por categoria.',
      en: 'Interactive 3D skills globe built with React + pure Canvas 2D (no Three.js). Icons distributed via Fibonacci spiral, perspective projection, drag inertia and category filter.',
    },
    techs: ['React', 'Vite', 'Canvas 2D', 'react-icons'],
    github: 'https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web',
    images: [skillsHome, skillsFiltro, skillsLista, skillsMobile],
  },
  {
    name: 'ReactBits — Efeitos de Mouse',
    description: {
      pt: 'Showcase de 5 efeitos WebGL que seguem o mouse (Fumaça, Fitas, Grade de Pontos, Rastro de Pixels, Enxame) usando componentes do React Bits.',
      en: 'Showcase of 5 WebGL mouse-following effects (Smoke, Ribbons, Dot Grid, Pixel Trail, Swarm) using React Bits components.',
    },
    techs: ['React', 'Vite', 'WebGL', 'React Bits'],
    github: 'https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web',
    images: [reactBitsFundo, reactBitsFumaca, reactBitsFitas, reactBitsEnxame, reactBitsPontos, reactBitsPixels, reactBitsCodigo],
  },
  {
    name: 'ContributorStats',
    description: {
      pt: 'Ferramenta React que analisa repositórios GitHub e gera ranking de colaboradores por commits, linhas inseridas/deletadas e impacto líquido. Inclui aba de produtividade para avaliação de grupos.',
      en: 'React tool that analyzes GitHub repositories and generates contributor rankings by commits, inserted/deleted lines and net impact. Includes a productivity tab for group evaluation.',
    },
    techs: ['React', 'Vite', 'GitHub API', 'GraphQL'],
    github: 'https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web',
    images: [contributorHome, contributorProd, contributorBranches, contributorLog, contributorTipos],
  },
]

export const PROJECTS = [
  {
    year: '2026', name: 'API Clima BH',
    description: {
      pt: 'API REST desenvolvida com Spring Boot que consome dados meteorológicos em tempo real para Belo Horizonte, com endpoints para temperatura, umidade e previsão.',
      en: 'REST API built with Spring Boot that consumes real-time weather data for Belo Horizonte, with endpoints for temperature, humidity and forecast.',
    },
    techs: ['Java', 'Spring Boot', 'REST API', 'Maven'],
    github: 'https://github.com/Armando-Schoenstatt/API-Clima-BH',
    images: [],
  },
  {
    year: '2026', name: 'Marvel Rivals Fan Page',
    description: {
      pt: 'Site fan page do jogo Marvel Rivals com design responsivo, animações CSS e galeria de personagens interativa, desenvolvido como trabalho da disciplina DIW.',
      en: 'Fan page website for the game Marvel Rivals with responsive design, CSS animations and interactive character gallery, developed as a DIW course project.',
    },
    techs: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Armando-Schoenstatt/Marvel-Rivals',
    images: [],
  },
  {
    year: '2026', name: 'StudyLink',
    description: {
      pt: 'Plataforma web colaborativa para estudantes compartilharem materiais de estudo, com sistema de autenticação, upload de arquivos e busca por disciplina.',
      en: 'Collaborative web platform for students to share study materials, featuring authentication, file upload and subject-based search.',
    },
    techs: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427100-study-link',
    images: [],
  },
  {
    year: '2026', name: 'Casa Recepções Impacto',
    description: {
      pt: 'Site institucional para empresa de recepções e eventos, com design responsivo, galeria de fotos e seção de contato. Desenvolvido com HTML, CSS e JavaScript puro.',
      en: 'Institutional website for an events and receptions company, featuring responsive design, photo gallery and contact section. Built with vanilla HTML, CSS and JavaScript.',
    },
    techs: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Armando-Schoenstatt/casa-recepcoes-impacto',
    images: [],
  },
  {
    year: '2026', name: 'Projeto API REST + JWT',
    description: {
      pt: 'API REST completa com autenticação via JWT, autorização com Spring Security, persistência com JPA/MySQL e documentação automática via Swagger (OpenAPI).',
      en: 'Full REST API with JWT authentication, Spring Security authorization, JPA/MySQL persistence and automatic Swagger (OpenAPI) documentation.',
    },
    techs: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger'],
    github: 'https://github.com/Armando-Schoenstatt/ProjetoApiRest',
    images: [],
  },
  {
    year: '2026', name: 'Sistema de Login PUC',
    description: {
      pt: 'Aplicação web de autenticação desenvolvida como atividade acadêmica na PUC Minas, com tela de login, cadastro e controle de sessão usando Java no back-end.',
      en: 'Web authentication application developed as an academic activity at PUC Minas, featuring login, registration and session control with Java on the back-end.',
    },
    techs: ['Java', 'HTML', 'CSS'],
    github: 'https://github.com/Armando-Schoenstatt/LoginPucAtv02',
    images: [],
  },
  {
    year: '2026', name: 'Portfólio DIAW',
    description: {
      pt: 'Este portfólio profissional desenvolvido para a disciplina DIAW da PUC Minas, com design responsivo, suporte a dois idiomas e formulário de contato integrado.',
      en: 'This professional portfolio developed for the DIAW course at PUC Minas, featuring responsive design, bilingual support and integrated contact form.',
    },
    techs: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Armando-Schoenstatt/PortifolioDiaw',
    images: [],
  },
]

export const EXPERIENCES = [
  {
    company: 'PUC Minas',
    role: { pt: 'Estudante de Engenharia de Software', en: 'Software Engineering Student' },
    period: '2023 – Presente',
    description: {
      pt: 'Cursando Engenharia de Software com foco em desenvolvimento web, algoritmos, estruturas de dados, banco de dados e engenharia de requisitos.',
      en: 'Studying Software Engineering with focus on web development, algorithms, data structures, databases and requirements engineering.',
    },
    icon: '🎓',
  },
  {
    company: 'Projetos Acadêmicos – TIAW / DIW / DIAW',
    role: { pt: 'Desenvolvedor Full Stack (Projetos em Grupo)', en: 'Full Stack Developer (Group Projects)' },
    period: '2024 – 2025',
    description: {
      pt: 'Participação em projetos interdisciplinares de desenvolvimento web, atuando no front-end e back-end, com metodologias ágeis (Scrum) e versionamento com Git/GitHub.',
      en: 'Participation in interdisciplinary web development projects, working on front-end and back-end, using agile methodologies (Scrum) and version control with Git/GitHub.',
    },
    icon: '💻',
  },
  {
    company: 'Open Source / Comunidade',
    role: { pt: 'Contribuidor e Estudante Independente', en: 'Contributor & Independent Learner' },
    period: '2024 – Presente',
    description: {
      pt: 'Estudo contínuo de tecnologias modernas, contribuições em repositórios open source e participação em eventos técnicos e hackathons.',
      en: 'Continuous study of modern technologies, contributions to open source repositories and participation in technical events and hackathons.',
    },
    icon: '🌐',
  },
]

export const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Armando-Schoenstatt',
    color: '#6366f1',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armando-schoenstatt/',
    color: '#0a66c2',
  },
  {
    label: 'E-mail',
    href: 'mailto:armandoschoenstatt@gmail.com',
    color: '#6366f1',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5531971831645',
    color: '#25d366',
  },
]
