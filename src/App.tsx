import { Header } from './components/Header'
import { Hero } from './components/Hero'

export function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main id="inicio">
        <Hero />
      </main>
    </div>
  )
}
