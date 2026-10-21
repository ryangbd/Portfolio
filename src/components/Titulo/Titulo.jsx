import './Titulo.css'

export default function Titulo({ children, texto }) {
  return (
    <header className="titulo">
      <h2>{children}</h2>
      {texto && <p>{texto}</p>}
    </header>
  )
}
