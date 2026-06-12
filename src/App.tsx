import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'

export function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main id="inicio">
        <Hero />
        <MenuSection />
      </main>
    </div>
  )
}
