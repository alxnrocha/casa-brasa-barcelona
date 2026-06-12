import { ArrowRight, Clock3, MapPin, QrCode } from 'lucide-react'
import heroImage from '../assets/images/hero-grilled-octopus.webp'

const heroDetails = [
  {
    icon: MapPin,
    eyebrow: 'Ubicación',
    label: 'Barcelona',
    accent: 'text-terracotta',
    iconBackground: 'bg-terracotta/12',
  },
  {
    icon: Clock3,
    eyebrow: 'Horario',
    label: '12:30–23:30',
    accent: 'text-olive',
    iconBackground: 'bg-olive/12',
  },
  {
    icon: QrCode,
    eyebrow: 'Acceso digital',
    label: 'Consulta desde móvil o QR',
    accent: 'text-wine',
    iconBackground: 'bg-wine/10',
  },
]

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-charcoal/10 bg-cream"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[42rem] max-w-[90rem] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10 flex items-center px-6 py-14 sm:px-10 sm:py-20 lg:px-12 xl:pl-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-wine">
              Cocina mediterránea contemporánea
            </p>

            <h1
              id="hero-title"
              className="font-display text-[clamp(3.1rem,6vw,5.75rem)] leading-[0.96] tracking-[-0.045em] text-charcoal"
            >
              Sabores del Mediterráneo en el corazón de Barcelona.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-charcoal/72 sm:text-lg sm:leading-8">
              Casa Brasa celebra el producto local y de temporada, cocinado a
              la brasa y servido en un ambiente cálido y acogedor.
            </p>

            <a
              href="#carta"
              className="mt-8 inline-flex min-h-13 items-center gap-5 rounded-md bg-wine px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(114,47,55,0.2)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-wine/92 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Explorar la carta
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.8} />
            </a>

            <ul className="mt-10 grid justify-items-start gap-3 md:grid-cols-[0.85fr_0.9fr_1.35fr] lg:w-[42rem]">
              {heroDetails.map(
                ({
                  icon: Icon,
                  eyebrow,
                  label,
                  accent,
                  iconBackground,
                }) => (
                <li
                  className="group relative isolate flex min-h-[4.75rem] w-fit max-w-full items-center gap-3.5 overflow-hidden rounded-2xl border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(255,248,238,0.38))] px-4 shadow-[0_12px_32px_rgba(73,50,37,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_16px_38px_rgba(73,50,37,0.14),inset_0_1px_0_rgba(255,255,255,1)] md:w-full"
                  key={label}
                >
                  <span
                    className="absolute -right-5 -top-8 -z-10 size-20 rounded-full bg-white/55 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    aria-hidden="true"
                  />
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ${iconBackground} ${accent}`}
                  >
                    <Icon
                      aria-hidden="true"
                      size={21}
                      strokeWidth={1.8}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.66rem] font-bold uppercase tracking-[0.16em] text-charcoal/48">
                      {eyebrow}
                    </span>
                    <span className="mt-1.5 block text-[0.9rem] font-semibold leading-[1.2] text-charcoal/82 md:whitespace-nowrap">
                      {label}
                    </span>
                  </span>
                </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden sm:min-h-[30rem] lg:min-h-full">
          <img
            className="absolute inset-0 size-full object-cover object-center"
            src={heroImage}
            alt="Pulpo a la brasa servido sobre una crema suave"
            width="1800"
            height="1200"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,234,219,0.12),rgba(36,31,27,0.08))] lg:bg-[linear-gradient(to_right,#f4eadb_0%,rgba(244,234,219,0.94)_8%,rgba(244,234,219,0.46)_24%,rgba(244,234,219,0)_48%)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
