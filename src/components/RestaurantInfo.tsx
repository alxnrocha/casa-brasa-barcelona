import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import almondCitrusTart from '../assets/images/menu/almond-citrus-tart.jpg'
import octopusPotatoes from '../assets/images/menu/octopus-potatoes.jpg'
import roastedVegetables from '../assets/images/menu/roasted-vegetables.jpg'

const galleryImages = [
  {
    src: roastedVegetables,
    alt: 'Plato mediterráneo preparado con verduras de temporada',
    width: 900,
    height: 601,
  },
  {
    src: octopusPotatoes,
    alt: 'Pulpo a la brasa servido con patatas y hierbas',
    width: 900,
    height: 600,
  },
  {
    src: almondCitrusTart,
    alt: 'Postre artesanal de almendra y cítricos',
    width: 900,
    height: 1350,
  },
] as const

const contactDetails = [
  {
    icon: MapPin,
    label: 'Dirección',
    content: (
      <>
        Carrer de la Marina 128,
        <br />
        08013 Barcelona
      </>
    ),
  },
  {
    icon: Clock3,
    label: 'Horario',
    content: (
      <>
        Lunes – Domingo
        <br />
        12:30 – 23:30
      </>
    ),
  },
  {
    icon: Mail,
    label: 'Correo',
    content: (
      <a
        className="rounded-sm underline decoration-wine/25 underline-offset-4 transition-colors hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
        href="mailto:reservas-demo@casabrasa.es"
      >
        reservas-demo@casabrasa.es
      </a>
    ),
  },
  {
    icon: Phone,
    label: 'Teléfono',
    content: (
      <a
        className="rounded-sm underline decoration-wine/25 underline-offset-4 transition-colors hover:text-wine focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-wine"
        href="tel:+34000000000"
      >
        +34 000 000 000
      </a>
    ),
  },
] as const

export function RestaurantInfo() {
  return (
    <section
      className="bg-cream px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
      aria-label="Sobre Casa Brasa e información práctica"
    >
      <div className="mx-auto grid max-w-[80rem] gap-6 lg:grid-cols-[0.96fr_1.04fr]">
        <article
          id="sobre"
          className="scroll-mt-24 rounded-[1.75rem] border border-charcoal/12 bg-[#fffaf2] p-6 shadow-[0_18px_46px_rgba(83,58,39,0.08)] sm:p-8"
          aria-labelledby="about-title"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-wine">
            Nuestra cocina
          </p>
          <h2
            id="about-title"
            className="mt-4 font-display text-[clamp(2.5rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.035em]"
          >
            Sobre Casa Brasa
          </h2>
          <div className="mt-5 max-w-2xl space-y-3 text-sm leading-6 text-charcoal/68 sm:text-base sm:leading-7">
            <p>
              Cocina mediterránea contemporánea con alma barcelonesa. Partimos
              de producto local y de temporada para crear platos sencillos,
              honestos y llenos de sabor.
            </p>
            <p>
              La brasa ocupa el centro de nuestra propuesta, acompañada por una
              selección cuidada de vinos y momentos pensados para compartir.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {galleryImages.map((image) => (
              <div
                className="aspect-[4/3] overflow-hidden rounded-xl bg-charcoal/8"
                key={image.alt}
              >
                <img
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </article>

        <article
          id="informacion"
          className="scroll-mt-24 rounded-[1.75rem] border border-charcoal/12 bg-[#fffaf2] p-6 shadow-[0_18px_46px_rgba(83,58,39,0.08)] sm:p-8"
          aria-labelledby="information-title"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-wine">
            Visítanos
          </p>
          <h2
            id="information-title"
            className="mt-4 font-display text-[clamp(2.5rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.035em]"
          >
            Información
          </h2>

          <div className="mt-7 grid gap-8 md:grid-cols-[0.82fr_1.18fr]">
            <ul id="contacto" className="scroll-mt-24 space-y-5">
              {contactDetails.map(({ icon: Icon, label, content }) => (
                <li className="flex gap-3.5" key={label}>
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-wine/8 text-wine">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-charcoal/45">
                      {label}
                    </p>
                    <div className="mt-1 text-sm leading-5 text-charcoal/72">
                      {content}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="relative min-h-64 overflow-hidden rounded-[1.35rem] border border-charcoal/10 bg-[#eee7db]"
              role="img"
              aria-label="Mapa ilustrativo de la ubicación ficticia de Casa Brasa en Barcelona"
            >
              <div
                className="absolute inset-0 opacity-75"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'linear-gradient(28deg, transparent 44%, rgba(255,255,255,0.95) 45% 51%, transparent 52%), linear-gradient(102deg, transparent 42%, rgba(255,255,255,0.9) 43% 48%, transparent 49%), linear-gradient(158deg, transparent 47%, rgba(255,255,255,0.75) 48% 53%, transparent 54%)',
                  backgroundSize: '7rem 6rem, 8rem 7rem, 9rem 8rem',
                }}
              />
              <div
                className="absolute inset-x-0 top-[42%] h-8 -rotate-6 bg-white/70"
                aria-hidden="true"
              />
              <div
                className="absolute left-[58%] top-0 h-full w-8 rotate-12 bg-white/75"
                aria-hidden="true"
              />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-wine text-white shadow-[0_12px_28px_rgba(114,47,55,0.28)]">
                  <MapPin aria-hidden="true" size={27} strokeWidth={1.8} />
                </span>
                <span className="mt-2 rounded-full bg-[#fffaf2]/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-wine shadow-sm backdrop-blur">
                  Casa Brasa
                </span>
              </div>
            </div>
          </div>

          <p className="mt-6 rounded-full border border-charcoal/8 bg-cream/55 px-4 py-2 text-center text-xs text-charcoal/52">
            Datos de contacto ficticios para demostración.
          </p>
        </article>
      </div>
    </section>
  )
}
