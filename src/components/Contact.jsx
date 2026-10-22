import { useState } from 'react'
import { SOCIALS } from '../data/index.js'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ICONS = { GitHub: FaGithub, LinkedIn: FaLinkedin, 'E-mail': MdEmail, WhatsApp: FaWhatsapp }
const COLORS = { GitHub: '#6366f1', LinkedIn: '#0a66c2', 'E-mail': '#6366f1', WhatsApp: '#25d366' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim())              errs.name    = true
    if (!EMAIL_RE.test(form.email))     errs.email   = true
    if (!form.message.trim())           errs.message = true
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const tx = {
    pt: { social: 'Redes & Links', form: 'Envie uma mensagem', name: 'Nome', email: 'E-mail', msg: 'Mensagem', btn: 'Enviar Mensagem', ok: '✅ Mensagem enviada com sucesso!', req: 'Campo obrigatório', inv: 'E-mail inválido', namePh: 'Seu nome completo', msgPh: 'Sua mensagem...' },
    en: { social: 'Social & Links',  form: 'Send a message',    name: 'Name', email: 'Email',  msg: 'Message',  btn: 'Send Message',    ok: '✅ Message sent successfully!',   req: 'Required field',   inv: 'Invalid email',   namePh: 'Your full name',    msgPh: 'Your message...' },
  }[lang]

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'rgba(17,24,39,0.4)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {lang === 'pt' ? 'Contato' : 'Contact'}
          </h2>
          <p className="text-gray-400 text-sm">{lang === 'pt' ? 'Vamos conversar!' : "Let's talk!"}</p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{tx.social}</h3>
            <div className="space-y-3">
              {SOCIALS.map(s => {
                const Icon = ICONS[s.label]
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-icon" style={{ color: COLORS[s.label] }}>
                      <Icon size={20} />
                    </div>
                    <span className="font-medium text-sm">{s.label}</span>
                    <svg className="w-4 h-4 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{tx.form}</h3>
            <form onSubmit={submit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{tx.name}</label>
                <input
                  type="text" value={form.name} onChange={set('name')} placeholder={tx.namePh}
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{tx.req}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{tx.email}</label>
                <input
                  type="email" value={form.email} onChange={set('email')} placeholder="seu@email.com"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{tx.inv}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{tx.msg}</label>
                <textarea
                  rows={5} value={form.message} onChange={set('message')} placeholder={tx.msgPh}
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{tx.req}</p>}
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 text-sm">
                {tx.btn}
              </button>
              {sent && <p className="text-center text-green-400 text-sm font-medium py-1">{tx.ok}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
