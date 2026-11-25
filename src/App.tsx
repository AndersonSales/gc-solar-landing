import Header from './components/Header'
import Sobre from './components/sections/Sobre'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Sobre />
      </main>
    </div>
  )
}