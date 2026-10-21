import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contato.css'
import Secao from '../Secao/Secao.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import Botao from '../Botao/Botao.jsx'
import { links } from '../../data/links.js'

export default function Contato() {
  return (
    <Secao id="contato">
      <Titulo texto="Estou buscando minha primeira oportunidade em desenvolvimento. Se quiser conversar, é só chamar.">
        Contato
      </Titulo>
      <div className="contato-botoes">
        <Botao href={links.linkedin} externo variante="primario" icone={<FaLinkedin />}>
          Chamar no LinkedIn
        </Botao>
        <Botao href={links.github} externo icone={<FaGithub />}>
          GitHub
        </Botao>
        <Botao href={links.cv} download icone={<FiDownload />}>
          Baixar CV
        </Botao>
      </div>
    </Secao>
  )
}
