import { FiDownload } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import pfp from '../../assets/pfp.webp'
import './Apresentacao.css'
import Secao from '../Secao/Secao.jsx'
import Botao from '../Botao/Botao.jsx'
import { links } from '../../data/links.js'

export default function Apresentacao() {
  return (
    <Secao id="inicio" className="apresent">
      <div className="apresent-conteudo">
        <div className="apresent-texto">
          <h1>Olá, me chamo Ryan</h1>
          <p>Desenvolvedor Web | React, JavaScript, Python, SQL</p>
          <div className="apresent-botoes">
            <Botao href={links.cv} download variante="primario" icone={<FiDownload />}>
              Baixar CV
            </Botao>
            <Botao href={links.github} externo icone={<FaGithub />}>
              GitHub
            </Botao>
            <Botao href={links.linkedin} externo icone={<FaLinkedin />}>
              LinkedIn
            </Botao>
          </div>
        </div>
        <div className="apresent-foto">
          <img src={pfp} alt="Foto de Ryan" width="320" height="320" />
        </div>
      </div>
    </Secao>
  )
}
