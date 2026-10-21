import Navbar from './components/Navbar/Navbar.jsx'
import Background from './components/Background/Background.jsx'
import Apresentacao from './components/Apresentacao/Apresentacao.jsx'
import SobreMim from './components/SobreMim/SobreMim.jsx'
import Barrinha from './components/Barrinha/Barrinha.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projetos from './components/Projetos/Projetos.jsx'
import Contato from './components/Contato/Contato.jsx'
import Rodape from './components/Rodape/Rodape.jsx'
import './App.css'

function App() {
  return (
    <Background>
      <Navbar />
      <main>
        <Apresentacao />
        <Barrinha />
        <SobreMim />
        <Barrinha />
        <Skills />
        <Barrinha />
        <Projetos />
        <Barrinha />
        <Contato />
      </main>
      <Rodape />
    </Background>
  )
}

export default App
