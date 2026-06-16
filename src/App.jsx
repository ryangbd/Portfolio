import React from "react"
import Navbar from './components/Navbar/Navbar.jsx'
import Background from "./components/Background/Background.jsx"
import Apresentacao from"./components/Apresentacao/Apresentacao.jsx"
import SobreMim from "./components/SobreMim/SobreMim.jsx"
import Barrinha from "./components/Barrinha/Barrinha.jsx"
import Skills from "./components/Skills/Skills.jsx"
import Projetos from "./components/Projetos/Projetos.jsx"
import './App.css'

function App(){
  return(
    <Background>
    <Navbar />
    <Apresentacao/>
    <Barrinha/>
    <SobreMim />
    <Barrinha />
    <Skills />
    <Projetos/>
    </Background>
  )
}
export default App