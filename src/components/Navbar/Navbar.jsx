import './Navbar.css'
import useReveal from "../../hooks/useReveal"

export default function Navbar() {
    const ref = useReveal()
    return (
      <nav ref={ref} className="reveal">
        <button>
          <a href="#sobre">Sobre Mim</a>
        </button>
        <button>
          <a href="#skills">Skills</a>
        </button>
        <button>
          <a href="#projetos">Projetos</a>
        </button>
        <button>
          <a href="#contato">Contato</a>
        </button>
      </nav>
    );
}