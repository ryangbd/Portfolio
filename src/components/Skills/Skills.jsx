import './Skills.css'
import {
  DiJavascript1,
  DiMysql,
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3,
  DiJava,
  DiGithubBadge,
  DiPhotoshop,
  DiVisualstudio,
} from 'react-icons/di'
import Secao from '../Secao/Secao.jsx'
import Titulo from '../Titulo/Titulo.jsx'

const categorias = [
  {
    titulo: 'Front-end',
    itens: [
      { icone: <DiReact />, nome: 'React' },
      { icone: <DiJavascript1 />, nome: 'JavaScript' },
      { icone: <DiHtml5 />, nome: 'HTML5' },
      { icone: <DiCss3 />, nome: 'CSS3' },
    ],
  },
  {
    titulo: 'Back-end',
    itens: [
      { icone: <DiPython />, nome: 'Python' },
      { icone: <DiJava />, nome: 'Java' },
    ],
  },
  {
    titulo: 'Ferramentas',
    itens: [
      { icone: <DiGithubBadge />, nome: 'Git/GitHub' },
      { icone: <DiPhotoshop />, nome: 'Photoshop' },
      { icone: <DiVisualstudio />, nome: 'VS Code' },
    ],
  },
  {
    titulo: 'Databases',
    itens: [{ icone: <DiMysql />, nome: 'MySQL' }],
  },
]

export default function Skills() {
  return (
    <Secao id="skills">
      <Titulo>Habilidades</Titulo>
      <div className="skills-grid">
        {categorias.map(({ titulo, itens }) => (
          <article className="skills-card" key={titulo}>
            <h3>{titulo}</h3>
            <ul className="skills-itens">
              {itens.map(({ icone, nome }) => (
                <li key={nome}>
                  {icone}
                  <span>{nome}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Secao>
  )
}
