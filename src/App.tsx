import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { RestaurantInfo } from './components/RestaurantInfo'

export function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main id="inicio">
        <Hero />
        <MenuSection />
        <RestaurantInfo />
      </main>
      <Footer />
    </div>
  )
}
