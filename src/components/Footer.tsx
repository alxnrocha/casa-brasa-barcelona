import { Camera, MessageCircle, Send } from 'lucide-react'
import { BrandLogo } from './BrandLogo'

const footerNavigation = [
  { href: '#carta', label: 'Carta' },
  { href: '#sobre', label: 'Sobre Casa Brasa' },
  { href: '#informacion', label: 'Información' },
  { href: '#contacto', label: 'Contacto' },
] as const

const socialPlatforms = [
  { icon: Camera, label: 'Galería social' },
  { icon: MessageCircle, label: 'Comunidad' },
  { icon: Send, label: 'Novedades' },
] as const

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine px-6 py-14 text-white sm:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute -bottom-16 -right-12 size-72 opacity-[0.09]"
        aria-hidden="true"
      >
        <svg
          className="size-full"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M145 250C143 181 164 105 232 35"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M174 150C203 133 229 131 260 141C238 159 213 168 174 150Z"
            fill="currentColor"
          />
          <path
            d="M154 197C120 183 92 188 65 209C94 220 125 221 154 197Z"
            fill="currentColor"
          />
          <path
            d="M194 104C213 77 237 64 270 62C258 91 235 111 194 104Z"
            fill="currentColor"
          />
          <path
            d="M159 177C190 173 215 184 236 210C203 211 178 201 159 177Z"
            fill="currentColor"
          />
          <path
            d="M170 139C143 120 116 116 84 126C106 149 134 155 170 139Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[80rem]">
        <div className="grid gap-10 border-b border-white/18 pb-10 md:grid-cols-[1.1fr_0.7fr_1fr] md:gap-8">
          <div>
            <a
              href="#inicio"
              className="inline-block rounded-sm bg-cream px-4 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label="Casa Brasa Barcelona, volver al inicio"
            >
              <BrandLogo className="w-36" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/72">
              Sabor mediterráneo, producto local y cocina a la brasa en una
              experiencia digital pensada para descubrir sin prisa.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/48">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="rounded-sm text-sm text-white/78 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/48">
              Proyecto de portfolio
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/78">
              Interfaz desarrollada con React, TypeScript, Vite y Tailwind CSS
              para demostrar componentes, datos tipados e interacción local.
            </p>
            <div
              className="mt-5 flex items-center gap-3"
              aria-label="Canales digitales ilustrativos, no disponibles"
            >
              {socialPlatforms.map(({ icon: Icon, label }) => (
                <span
                  className="flex size-10 items-center justify-center rounded-full border border-white/18 bg-white/6 text-white/68"
                  title={`${label}, canal ilustrativo`}
                  key={label}
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span className="sr-only">
                    {label}, canal ilustrativo sin enlace externo
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs leading-5 text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Casa Brasa Barcelona. Proyecto
            demostrativo.
          </p>
          <p>
            Restaurante, contactos y selección ficticios. No se realizan
            pedidos ni pagos.
          </p>
        </div>
      </div>
    </footer>
  )
}
