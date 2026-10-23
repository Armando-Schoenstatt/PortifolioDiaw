# 🚀 Portfólio Profissional — Armando Moreira

> Portfólio desenvolvido para a disciplina **DIAW (Desenvolvimento e Integração de Aplicações Web)** — Engenharia de Software, PUC Minas.

As integrações estão disponíveis no código local; estas alterações ainda não foram publicadas.

---

## 📸 Preview

![Preview do Portfólio](https://via.placeholder.com/900x500/6366f1/ffffff?text=Portfolio+Preview)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura semântica da página |
| Tailwind CSS (CDN) | Estilização utilitária e responsividade |
| React + Vite | Aplicações interativas integradas ao portfólio |
| JavaScript (ES6+) | Interatividade, renderização dinâmica e lógica |
| EmailJS | Envio de e-mails diretamente do front-end |
| Google Fonts (Inter) | Tipografia |

---

## 📦 Dependências e Bibliotecas

O HTML da página fica em `index.html`; estilos e interações estão em `src/styles.css` e `src/main.js`. Os projetos interativos ficam incorporados diretamente nas seções do portfólio: o globo de habilidades aparece após **Sobre Mim**, Futebol após **Projetos** e Colaboradores GitHub em uma seção própria. A seção de currículo exibe `CurriculoArmandoSchoenstatt.pdf` por padrão, permite baixá-lo e também selecionar outro PDF local para visualização sem enviá-lo ao servidor. O efeito de cursor ReactBits continua global e sem botão. O código do WakaTime permanece no repositório, mas não aparece na interface. O site usa Tailwind CSS via CDN.

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

<!-- Google Fonts: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

---

## 📁 Estrutura de Diretórios

```
PortifolioDiaw/
├── index.html             # Portfólio e acesso às ferramentas
├── src/
│   ├── main.jsx           # Entrada React da página
│   ├── components/        # Globo de habilidades, painéis integrados e currículo
│   ├── main.js            # Conteúdo e interações do portfólio
│   └── styles.css         # Estilos específicos do site
├── apps/
│   ├── ReactBits/         # Efeito de cursor Fumaça, sem controles
│   ├── ContributorStats/  # Análise de colaboradores do GitHub
│   ├── WakaTimeAPI/       # Código preservado, desativado na interface
│   └── ESPN_API/          # Painel de futebol
├── api/                   # Funções de API para credenciais server-side
├── package.json           # Instalação e build do conjunto
└── README.md
```

Os componentes reaproveitados mantêm seus avisos de licença nas respectivas pastas; o aviso do SkillsGlobe está junto do componente em `src/components/SkillsShowcase/`.

---

## ⚙️ Instalação e execução local

Requer **Node.js 22.12 ou mais recente**. Para usar os projetos interativos, execute o site pelo Vite (abrir `index.html` diretamente ou usar Live Server não basta):

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite. O globo de habilidades fica abaixo de **Sobre Mim**; o painel compacto de Futebol, abaixo de **Projetos**; e Colaboradores GitHub carrega automaticamente as contribuições do repositório `Armando-Schoenstatt/PortifolioDiaw`, com um link para o perfil completo. O currículo permite selecionar um PDF local para pré-visualização.

As consultas da ESPN passam por `/api/espn` no mesmo servidor e só encaminham os endpoints usados pelo painel. Isso evita bloqueios de CORS e não exige chave da ESPN.

Para gerar os arquivos de produção do portfólio e das quatro aplicações:

```bash
npm run build
```

Os segredos ficam no servidor, nunca no JavaScript do navegador. Se precisar de análise de todas as branches do GitHub, copie `.env.example` para `.env.local` e adicione a credencial localmente. Para publicar mais tarde, configure a variável como segredo do provedor de hospedagem. Não envie tokens ou segredos pelo GitHub.

### ContributorStats

Sem `GITHUB_TOKEN`, a análise de repositórios públicos continua disponível no modo compatível com a API anônima do GitHub. Para análise de todas as branches ou acesso a repositórios privados, configure `GITHUB_TOKEN`. Se usar um token com acesso a repositórios privados, limite `GITHUB_ALLOWED_OWNERS` aos proprietários de repositório que podem ser analisados.

### ReactBits

O efeito Fumaça (`SplashCursor`) fica fixo no portfólio inteiro, sem seletor nem botão extra. Sua cor cinza-gelo complementa a paleta monocromática.

---

## 📧 Configuração do EmailJS (Formulário de Contato)

Para ativar o envio de e-mails pelo formulário:

1. Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com/)
2. Crie um **Email Service** (Gmail, Outlook, etc.)
3. Crie um **Email Template** com as variáveis: `{{name}}`, `{{email}}`, `{{message}}`
4. Copie suas credenciais e substitua no `index.html`:

```javascript
const EMAILJS_SERVICE  = 'YOUR_SERVICE_ID';   // ex: 'service_abc123'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID';  // ex: 'template_xyz789'
const EMAILJS_KEY      = 'YOUR_PUBLIC_KEY';   // ex: 'user_XXXXXXXXXXXXXXX'
```

---

## 🌐 Publicação na Vercel

O repositório inclui `vercel.json` para publicar o portfólio e as aplicações como serviços Vercel. O serviço `armando-moreira` recebe o tráfego público na raiz (`/`), incluindo a função `api/espn.js`, que atende `/api/espn`. Os serviços das aplicações ficam internos. O próprio build do portfólio gera os arquivos usados pelas aplicações incorporadas, inclusive o painel ESPN carregado pelo iframe. O painel acessa a ESPN por `/api/espn`; não há chamadas server-to-server nem bindings entre serviços.

Antes do primeiro deploy, configure `GITHUB_TOKEN` e `GITHUB_ALLOWED_OWNERS`, se necessário, em **Environment Variables** na hospedagem. Não inclua segredos em arquivos commitados nem no bundle público.

```bash
npm run build
```

O build gera o portfólio e os quatro aplicativos em `dist/`.

---

## ✅ Seções do Portfólio

- **Hero** — Apresentação com nome, cargo e CTAs
- **Sobre Mim** — Descrição em Português 🇧🇷 e Inglês 🇺🇸
- **Habilidades** — Globo 3D interativo, com filtro por categoria e visualização em lista
- **Projetos** — Timeline e painel de futebol ao vivo integrado
- **Currículo em PDF** — Pré-visualização de arquivo escolhido localmente
- **Colaboradores GitHub** — Painel interativo integrado à página
- **Experiências** — Histórico acadêmico e profissional
- **Contato** — Links sociais + formulário funcional com validação

### Ferramentas incluídas

- **ReactBits** — efeito Fumaça aplicado globalmente, sem seletor ou botão.
- **ContributorStats** — ranking de colaboradores e métricas de repositórios do GitHub.
- **ESPN Sports Dashboard** — partidas, placares e classificação do futebol.
- **Skills Globe** — componente interativo adaptado do projeto [SkillsGlobe](https://github.com/joaopauloaramuni/desenvolvimento-e-integracao-de-aplicacoes-web/tree/main/PROJETOS/React/SkillsGlobe), licenciado sob MIT; o aviso original está em `src/components/SkillsShowcase/LICENSE.upstream`.

O código reaproveitado mantém os avisos de licença MIT do projeto original; os componentes ReactBits também preservam a licença MIT + Commons Clause em `apps/ReactBits/src/components/reactbits/LICENSE-react-bits.md`.

---

## 📋 Funcionalidades

- [x] Design responsivo (mobile-first)
- [x] Alternância de idioma PT/EN
- [x] Navbar fixa com scroll suave
- [x] Timeline de projetos
- [x] Formulário com validação e envio via EmailJS
- [x] Links sociais (GitHub, LinkedIn, WhatsApp, E-mail)
- [x] Menu mobile (hamburger)
- [x] Três aplicações interativas embutidas

---

## 👨‍💻 Autor

**Armando Moreira**
Engenharia de Software — PUC Minas
[GitHub](https://github.com/Armando-Schoenstatt) · [LinkedIn](https://www.linkedin.com/in/armando-schoenstatt/)

---

Site hospedado: https://armando-schoenstatt.github.io/PortifolioDiaw/#about

*Disciplina: DIAW — Desenvolvimento e Integração de Aplicações Web · 2025*
