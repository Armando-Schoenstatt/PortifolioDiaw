import { useState } from 'react'
import SplashCursor from '../../../ReactBits/src/components/reactbits/SplashCursor/SplashCursor'
import Ribbons from '../../../ReactBits/src/components/reactbits/Ribbons/Ribbons'
import DotGrid from '../../../ReactBits/src/components/reactbits/DotGrid/DotGrid'
import PixelTrail from '../../../ReactBits/src/components/reactbits/PixelTrail/PixelTrail'
import SwarmCursor from '../../../ReactBits/src/components/reactbits/SwarmCursor/SwarmCursor'

const EFFECTS = [
  {
    id: 'fumaca', label: 'Fumaça',
    desc: { pt: 'Simulação de fluido em WebGL: o mouse solta uma fumaça colorida que se espalha e some aos poucos.', en: 'WebGL fluid simulation: the mouse releases colored smoke that spreads and fades away.' },
    render: () => <SplashCursor RAINBOW_MODE={true} />,
  },
  {
    id: 'fitas', label: 'Fitas',
    desc: { pt: 'Três fitas coloridas perseguem o cursor com efeito de mola — atrasam, passam do ponto e voltam.', en: 'Three colored ribbons chase the cursor with a spring effect — they lag, overshoot and bounce back.' },
    render: () => (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Ribbons colors={['#6366f1', '#8b5cf6', '#a78bfa']} thickness={26} length={1.6} spread={16} stiffness={0.45} bounce={0.6} wave={0.3} fade={true} />
      </div>
    ),
  },
  {
    id: 'pontos', label: 'Grade de Pontos',
    desc: { pt: 'Grade de pontos que reage ao cursor: perto do mouse os pontos são empurrados e acendem em roxo.', en: 'Dot grid that reacts to the cursor: near the mouse, dots are pushed and light up in purple.' },
    render: () => (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <DotGrid baseColor='#1f2937' activeColor='#6366f1' dotSize={5} gap={22} proximity={150} strength={1} />
      </div>
    ),
  },
  {
    id: 'pixels', label: 'Rastro de Pixels',
    desc: { pt: 'Por onde o cursor passa, pixels acendem e derretem uns nos outros antes de sumir.', en: 'Wherever the cursor moves, pixels light up and melt into each other before fading.' },
    render: () => (
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <PixelTrail gridSize={48} trailSize={0.08} maxAge={400} color='#6366f1' trailColor='#a78bfa' gooeyFilter={{ strength: 2 }} clickBurst={true} />
      </div>
    ),
  },
  {
    id: 'enxame', label: 'Enxame',
    desc: { pt: 'Centenas de partículas giram em volta do cursor como um cardume. Clique para espalhar o enxame.', en: 'Hundreds of particles swirl around the cursor like a school of fish. Click to scatter the swarm.' },
    render: () => (
      <SwarmCursor count={600} size={2.6} color='#6366f1' accentColor='#a78bfa' spread={100} swirl={0.6} tail={0.6} style={{ position: 'absolute', inset: 0 }} />
    ),
  },
]

export default function ReactBitsSection({ lang }) {
  const [active, setActive] = useState('fumaca')
  const effect = EFFECTS.find(e => e.id === active)

  return (
    <section id="reactbits" className="py-24 px-6" style={{ background: 'rgba(17,24,39,0.4)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">React Bits</h2>
          <p className="text-gray-400 text-sm">
            {lang === 'pt' ? 'Efeitos WebGL que seguem o mouse — escolha um e interaja' : 'WebGL mouse-following effects — pick one and interact'}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        {/* Picker */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {EFFECTS.map(e => (
            <button
              key={e.id}
              onClick={() => setActive(e.id)}
              className={`cat-btn ${active === e.id ? 'active' : ''}`}
            >
              {e.label}
            </button>
          ))}
        </div>

        {/* Preview area */}
        <div className="card overflow-hidden" style={{ height: 'clamp(300px, 50vw, 480px)', position: 'relative' }}>
          {effect.render()}
          {/* Description overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(transparent, rgba(3,7,18,0.85))' }}>
            <p className="text-gray-300 text-sm">{effect.desc[lang]}</p>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-3">
          {lang === 'pt' ? 'Mova o mouse dentro da área acima para ver o efeito' : 'Move your mouse inside the area above to see the effect'}
        </p>
      </div>
    </section>
  )
}
