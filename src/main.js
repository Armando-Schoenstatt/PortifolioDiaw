// ─── DATA ───────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    year: '2026',
    name: 'API Clima BH',
    description: {
      pt: 'API REST desenvolvida com Spring Boot que consome dados meteorológicos em tempo real para Belo Horizonte, com endpoints para temperatura, umidade e previsão.',
      en: 'REST API built with Spring Boot that consumes real-time weather data for Belo Horizonte, with endpoints for temperature, humidity and forecast.'
    },
    techs: ['Java', 'Spring Boot', 'REST API', 'Maven'],
    github: 'https://github.com/Armando-Schoenstatt/API-Clima-BH',
    image: null,
  },
  {
    year: '2026',
    name: 'Marvel Rivals Fan Page',
    description: {
      pt: 'Site fan page do jogo Marvel Rivals com design responsivo, animações CSS e galeria de personagens interativa, desenvolvido como trabalho da disciplina DIW.',
      en: 'Fan page website for the game Marvel Rivals with responsive design, CSS animations and interactive character gallery, developed as a DIW course project.'
    },
    techs: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Armando-Schoenstatt/Marvel-Rivals',
    image: null,
  },
  {
    year: '2026',
    name: 'StudyLink',
    description: {
      pt: 'Plataforma web colaborativa para estudantes compartilharem materiais de estudo, com sistema de autenticação, upload de arquivos e busca por disciplina.',
      en: 'Collaborative web platform for students to share study materials, featuring authentication, file upload and subject-based search.'
    },
    techs: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427100-study-link',
    image: null,
  },
  {
    year: '2026',
    name: 'Casa Recepções Impacto',
    description: {
      pt: 'Site institucional para empresa de recepções e eventos, com design responsivo, galeria de fotos e seção de contato. Desenvolvido com HTML, CSS e JavaScript puro.',
      en: 'Institutional website for an events and receptions company, featuring responsive design, photo gallery and contact section. Built with vanilla HTML, CSS and JavaScript.'
    },
    techs: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Armando-Schoenstatt/casa-recepcoes-impacto',
    image: null,
  },
  {
    year: '2026',
    name: 'Projeto API REST + JWT',
    description: {
      pt: 'API REST completa com autenticação via JWT, autorização com Spring Security, persistência com JPA/MySQL e documentação automática via Swagger (OpenAPI).',
      en: 'Full REST API with JWT authentication, Spring Security authorization, JPA/MySQL persistence and automatic Swagger (OpenAPI) documentation.'
    },
    techs: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger'],
    github: 'https://github.com/Armando-Schoenstatt/ProjetoApiRest',
    image: null,
  },
  {
    year: '2026',
    name: 'Sistema de Login PUC',
    description: {
      pt: 'Aplicação web de autenticação desenvolvida como atividade acadêmica na PUC Minas, com tela de login, cadastro e controle de sessão usando Java no back-end.',
      en: 'Web authentication application developed as an academic activity at PUC Minas, featuring login, registration and session control with Java on the back-end.'
    },
    techs: ['Java', 'HTML', 'CSS'],
    github: 'https://github.com/Armando-Schoenstatt/LoginPucAtv02',
    image: null,
  },
  {
    year: '2026',
    name: 'Portfólio DIAW',
    description: {
      pt: 'Este portfólio profissional desenvolvido para a disciplina DIAW da PUC Minas, com design responsivo, suporte a dois idiomas e formulário de contato integrado.',
      en: 'This professional portfolio developed for the DIAW course at PUC Minas, featuring responsive design, bilingual support and integrated contact form.'
    },
    techs: ['HTML', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    github: 'https://github.com/Armando-Schoenstatt/PortifolioDiaw',
    image: null,
  },
];

const EXPERIENCES = [
  {
    company: 'PUC Minas',
    role: { pt: 'Estudante de Engenharia de Software', en: 'Software Engineering Student' },
    period: '2023 – Presente',
    description: {
      pt: 'Cursando Engenharia de Software com foco em desenvolvimento web, algoritmos, estruturas de dados, banco de dados e engenharia de requisitos.',
      en: 'Studying Software Engineering with focus on web development, algorithms, data structures, databases and requirements engineering.'
    },
    icon: '🎓',
  },
  {
    company: 'Projetos Acadêmicos – TIAW / DIW / DIAW',
    role: { pt: 'Desenvolvedor Full Stack (Projetos em Grupo)', en: 'Full Stack Developer (Group Projects)' },
    period: '2024 – 2025',
    description: {
      pt: 'Participação em projetos interdisciplinares de desenvolvimento web, atuando no front-end e back-end, com metodologias ágeis (Scrum) e versionamento com Git/GitHub.',
      en: 'Participation in interdisciplinary web development projects, working on front-end and back-end, using agile methodologies (Scrum) and version control with Git/GitHub.'
    },
    icon: '💻',
  },
  {
    company: 'Open Source / Comunidade',
    role: { pt: 'Contribuidor e Estudante Independente', en: 'Contributor & Independent Learner' },
    period: '2024 – Presente',
    description: {
      pt: 'Estudo contínuo de tecnologias modernas, contribuições em repositórios open source e participação em eventos técnicos e hackathons.',
      en: 'Continuous study of modern technologies, contributions to open source repositories and participation in technical events and hackathons.'
    },
    icon: '🌐',
  },
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Armando-Schoenstatt',
    color: '#d1d5db',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/armando-schoenstatt/',
    color: '#d1d5db',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    label: 'E-mail',
    href: 'mailto:armandoschoenstatt@gmail.com',
    color: '#d1d5db',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5531971831645',
    color: '#d1d5db',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
  },
];

// ─── LANGUAGE ────────────────────────────────────────────────────────────────
let lang = 'pt';

function setLang(l) {
  lang = l;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  document.getElementById('lang-btn').textContent = lang === 'pt' ? 'EN' : 'PT';
  const mb = document.getElementById('lang-btn-m');
  if (mb) mb.textContent = lang === 'pt' ? 'EN' : 'PT';
  window.dispatchEvent(new CustomEvent('portfolio-language', { detail: { lang } }));
  renderTimeline();
  renderExperience();
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('nav-scrolled', window.scrollY > 20);
});

document.getElementById('menu-btn').addEventListener('click', () => {
  const m = document.getElementById('mobile-menu');
  const open = document.getElementById('icon-open');
  const close = document.getElementById('icon-close');
  m.classList.toggle('hidden');
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
});

function closeMobile() {
  document.getElementById('mobile-menu').classList.add('hidden');
  document.getElementById('icon-open').classList.remove('hidden');
  document.getElementById('icon-close').classList.add('hidden');
}

document.querySelectorAll('#mobile-menu a[href^="#"]').forEach((link) => {
  link.addEventListener('click', closeMobile);
});

document.getElementById('lang-btn').addEventListener('click', () => setLang(lang === 'pt' ? 'en' : 'pt'));
document.getElementById('lang-btn-m').addEventListener('click', () => setLang(lang === 'pt' ? 'en' : 'pt'));

// ─── TIMELINE ────────────────────────────────────────────────────────────────
function renderTimeline() {
  const container = document.getElementById('timeline');
  container.innerHTML = PROJECTS.map((p, i) => {
    const isRight = i % 2 === 0;
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="w-full h-40 object-cover rounded-xl mb-4" />`
      : `<div class="w-full h-32 rounded-xl mb-4 flex items-center justify-center text-4xl" style="background:rgba(209,213,219,0.08);border:1px dashed rgba(209,213,219,0.2)">🖥️</div>`;
    return `
    <div class="relative flex items-start gap-6 md:gap-0 timeline-item">
      <!-- dot -->
      <div class="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-gray-950 -translate-x-1.5 mt-6 z-10 shadow-md shadow-primary/40"></div>
      <!-- year badge (desktop) -->
      <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 bg-primary/10 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full">${p.year}</div>
      <!-- spacer -->
      <div class="hidden md:block w-1/2 ${isRight ? '' : 'order-last'}"></div>
      <!-- card -->
      <div class="ml-12 md:ml-0 md:w-1/2 ${isRight ? 'md:pl-10' : 'md:pr-10'}">
        <div class="card p-6">
          ${imgHtml}
          <div class="flex items-center gap-2 mb-1">
            <span class="md:hidden text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">${p.year}</span>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${p.name}</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">${p.description[lang]}</p>
          <div class="flex flex-wrap gap-1.5 mb-4">${p.techs.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <a href="${p.github}" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 text-sm text-primary hover:text-white border border-primary/30 hover:border-primary hover:bg-primary/10 px-4 py-2 rounded-lg transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            ${lang === 'pt' ? 'Ver Repositório' : 'View Repository'}
          </a>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function renderExperience() {
  document.getElementById('experience-list').innerHTML = EXPERIENCES.map(e => `
    <div class="card p-6 flex gap-5">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style="background:rgba(209,213,219,0.1)">${e.icon}</div>
      <div class="flex-1 min-w-0">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 class="text-base font-bold text-white">${e.role[lang]}</h3>
            <p class="text-primary text-sm font-medium">${e.company}</p>
          </div>
          <span class="text-xs text-gray-500 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full whitespace-nowrap">${e.period}</span>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed mt-2">${e.description[lang]}</p>
      </div>
    </div>
  `).join('');
}

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────
function renderSocials() {
  document.getElementById('social-links').innerHTML = SOCIALS.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener" class="social-link">
      <div class="social-icon" style="color:${s.color}">${s.svg}</div>
      <span class="font-medium text-sm">${s.label}</span>
      <svg class="w-4 h-4 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </a>
  `).join('');
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const message = document.getElementById('f-message').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;
  const show = (id, v) => document.getElementById(id).classList.toggle('hidden', !v);

  show('err-name',    !name);                  if (!name)                 valid = false;
  show('err-email',   !emailRe.test(email));   if (!emailRe.test(email))  valid = false;
  show('err-message', !message);               if (!message)              valid = false;

  if (!valid) return;

  show('form-success', true);
  e.target.reset();
});

// ─── INIT ────────────────────────────────────────────────────────────────────
renderTimeline();
renderExperience();
renderSocials();
