import React from "react"
import Navbar from './components/Navbar.jsx'
import Background from "./components/Background.jsx"
import Apresentacao from"./components/Apresentacao.jsx"
import SobreMim from "./components/SobreMim.jsx"
import './App.css'
function App(){
  return(
    <Background>
      <Navbar />
    <Apresentacao/>
    </Background>
  )
}
export default App