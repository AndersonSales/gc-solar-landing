import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sobre from './components/sections/Sobre'
import Servicos from './components/sections/Servicos'
import Depoimentos from './components/sections/Depoimentos'
import Contato from './components/sections/Contato'
import Simulador from './pages/Simulador'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simular" element={<Simulador />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}