import { Clock3, MapPin, Utensils } from 'lucide-react'
import { Header } from './components/Header'

const projectDetails = [
  {
    icon: MapPin,
    label: 'Barcelona',
    description: 'Cocina mediterránea contemporánea',
  },
  {
    icon: Clock3,
    label: 'Carta digital',
    description: 'Pensada para consultar desde el móvil',
  },
  {
    icon: Utensils,
    label: 'Próximamente',
    description: 'Categorías, búsqueda y filtros combinados',
  },
]

export function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main id="inicio">
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-wine">
              Casa Brasa Barcelona
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-[-0.04em] text-charcoal sm:text-6xl lg:text-7xl">
              Una carta mediterránea diseñada para descubrir sin prisa.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-charcoal/70 sm:text-lg">
              La base técnica del proyecto ya está preparada con React,
              TypeScript, Vite y Tailwind CSS. La experiencia completa de la
              carta se construirá en las próximas etapas.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-charcoal/10 bg-white/55 p-6 shadow-[0_24px_80px_rgba(44,35,30,0.08)] backdrop-blur sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-olive">
              Fundación del proyecto
            </p>
            <ul className="mt-7 space-y-6">
              {projectDetails.map(({ icon: Icon, label, description }) => (
                <li className="flex gap-4" key={label}>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-terracotta/12 text-terracotta">
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold text-charcoal">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-charcoal/65">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
          </div>

          <footer className="border-t border-charcoal/15 py-6 text-sm text-charcoal/55">
            Proyecto ficticio de portfolio. No representa un restaurante real.
          </footer>
        </section>
      </main>
    </div>
  )
}
