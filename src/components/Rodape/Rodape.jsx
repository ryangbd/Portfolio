import './Rodape.css'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <span>© {new Date().getFullYear()} Ryan</span>
        <span>Feito com React e Vite</span>
      </div>
    </footer>
  )
}
