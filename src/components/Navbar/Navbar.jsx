import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { id: 'sobre', nome: 'Sobre mim' },
  { id: 'skills', nome: 'Skills' },
  { id: 'projetos', nome: 'Projetos' },
  { id: 'contato', nome: 'Contato' },
]

const secoes = ['inicio', ...links.map(({ id }) => id)]

export default function Navbar() {
  const [ativa, setAtiva] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtiva(entrada.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    secoes.forEach((id) => {
      const secao = document.getElementById(id)
      if (secao) observer.observe(secao)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar" aria-label="Principal">
      <ul className="container">
        {links.map(({ id, nome }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={ativa === id ? 'ativo' : undefined}
              aria-current={ativa === id ? 'true' : undefined}
            >
              {nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
