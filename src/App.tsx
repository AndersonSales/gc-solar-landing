import Header from './components/Header'
import Sobre from './components/sections/Sobre'
import SimuleSeuProjeto from './components/sections/SimuleSeuProjeto'
import Servicos from './components/sections/Servicos'
import Depoimentos from './components/sections/Depoimentos'
import Contato from './components/sections/Contato'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Sobre />
        <SimuleSeuProjeto />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
    </div>
  )
}