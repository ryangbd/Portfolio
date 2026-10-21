import './Projetos.css'
import Secao from '../Secao/Secao.jsx'
import Titulo from '../Titulo/Titulo.jsx'
import CardProjeto from '../CardProjeto/CardProjeto.jsx'
import { projetos } from '../../data/projetos.js'

export default function Projetos() {
  return (
    <Secao id="projetos">
      <Titulo texto="Alguns dos projetos que desenvolvi nos estudos.">Projetos</Titulo>
      <div className="projetos-grid">
        {projetos.map((projeto, i) => (
          <CardProjeto key={projeto.nome} destaque={i === 0} {...projeto} />
        ))}
      </div>
    </Secao>
  )
}
