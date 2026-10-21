import { FaGithub } from 'react-icons/fa'
import './CardProjeto.css'

export default function CardProjeto({
  nome,
  descricao,
  tecnologias,
  repositorio,
  destaque = false,
}) {
  return (
    <article className={`card-projeto${destaque ? ' card-projeto--destaque' : ''}`}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <ul className="card-projeto-tags">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
      <a
        className="card-projeto-link"
        href={repositorio}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        Ver no GitHub
      </a>
    </article>
  )
}
