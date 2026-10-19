# 🚀 Portfólio Profissional — Armando Moreira

> Portfólio desenvolvido para a disciplina **DIAW (Desenvolvimento e Integração de Aplicações Web)** — Engenharia de Software, PUC Minas.

🔗 **[Acesse o site em produção →](https://seu-portfolio.vercel.app)**

---

## 📸 Preview

![Preview do Portfólio](https://via.placeholder.com/900x500/6366f1/ffffff?text=Portfolio+Preview)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura semântica da página |
| Tailwind CSS (CDN) | Estilização utilitária e responsividade |
| JavaScript (ES6+) | Interatividade, renderização dinâmica e lógica |
| EmailJS | Envio de e-mails diretamente do front-end |
| Google Fonts (Inter) | Tipografia |
| Vercel | Hospedagem e deploy contínuo |

---

## 📦 Dependências e Bibliotecas

Todas as dependências são carregadas via CDN — **não há necessidade de instalação de pacotes**.

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
├── index.html          # Arquivo principal (HTML + CSS inline + JS)
├── package.json        # Metadados do projeto (opcional, para Vite)
├── vite.config.js      # Configuração do Vite (opcional)
├── tailwind.config.js  # Configuração do Tailwind (opcional)
├── postcss.config.js   # Configuração do PostCSS (opcional)
└── README.md           # Documentação do projeto
```

> O projeto é **100% single-file** (`index.html`), sem necessidade de build step. Basta abrir o arquivo no navegador ou fazer deploy direto na Vercel/GitHub Pages.

---

## ⚙️ Instalação e Execução Local

### Opção 1 — Abrir diretamente (mais simples)

```bash
# Clone o repositório
git clone https://github.com/ArmandoLC13/portfolio-diaw.git

# Acesse a pasta
cd portfolio-diaw

# Abra o arquivo no navegador
# Windows:
start index.html
# macOS:
open index.html
# Linux:
xdg-open index.html
```

### Opção 2 — Servidor local com Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione **"Open with Live Server"**

### Opção 3 — Servidor local com Python

```bash
# Python 3
python -m http.server 3000

# Acesse: http://localhost:3000
```

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

## 🌐 Deploy na Vercel

### Via GitHub (recomendado)

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em **"New Project"** → importe o repositório
4. Clique em **"Deploy"** — sem configuração adicional necessária

### Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## ✅ Seções do Portfólio

- **Hero** — Apresentação com nome, cargo e CTAs
- **Sobre Mim** — Descrição em Português 🇧🇷 e Inglês 🇺🇸
- **Projetos** — Timeline cronológica com tecnologias e links para GitHub
- **Experiências** — Histórico acadêmico e profissional
- **Contato** — Links sociais + formulário funcional com validação

---

## 📋 Funcionalidades

- [x] Design responsivo (mobile-first)
- [x] Alternância de idioma PT/EN
- [x] Navbar fixa com scroll suave
- [x] Timeline de projetos
- [x] Formulário com validação e envio via EmailJS
- [x] Links sociais (GitHub, LinkedIn, WhatsApp, E-mail)
- [x] Menu mobile (hamburger)
- [x] Zero dependências de build

---

## 👨‍💻 Autor

**Armando Moreira**
Engenharia de Software — PUC Minas
[GitHub](https://github.com/Armando-Schoenstatt) · [LinkedIn](https://www.linkedin.com/in/armando-schoenstatt/)

---

Site hospedado: https://armando-schoenstatt.github.io/PortifolioDiaw/#about

*Disciplina: DIAW — Desenvolvimento e Integração de Aplicações Web · 2025*
