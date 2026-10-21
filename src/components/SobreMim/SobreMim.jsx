import './SobreMim.css'
import Secao from '../Secao/Secao.jsx'
import Titulo from '../Titulo/Titulo.jsx'

const focos = [
  { titulo: 'Frontend', descricao: 'Interfaces modernas e responsivas.' },
  { titulo: 'Full Stack', descricao: 'Em crescimento contínuo.' },
  { titulo: 'UI Design', descricao: 'Cuidado visual e usabilidade.' },
]

const fatos = [
  { rotulo: 'Formação', valor: 'Análise e Desenvolvimento de Sistemas' },
  { rotulo: 'Experiência', valor: 'Estagiário na Secretaria da Saúde' },
  { rotulo: 'Foco', valor: 'Desenvolvimento de Software' },
  { rotulo: 'Objetivo', valor: 'Estágio em tecnologia' },
]

export default function SobreMim() {
  return (
    <Secao id="sobre">
      <Titulo>Sobre mim</Titulo>
      <div className="sobre-conteudo">
        <ul className="sobre-focos">
          {focos.map(({ titulo, descricao }) => (
            <li key={titulo}>
              <strong>{titulo}</strong>
              <span>{descricao}</span>
            </li>
          ))}
        </ul>

        <div className="sobre-detalhes">
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona
            Leste, com formação técnica pela ETEC Professor Camargo Aranha.
            Tenho experiência prática com Java, JavaScript, Python, HTML, CSS e
            MySQL. Atualmente estagio na Secretaria Municipal da Saúde, onde
            lido com sistemas, dados e processos administrativos. Busco minha
            primeira oportunidade em desenvolvimento para evoluir em minha
            carreira profissional.
          </p>
          <dl className="sobre-fatos">
            {fatos.map(({ rotulo, valor }) => (
              <div key={rotulo}>
                <dt>{rotulo}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Secao>
  )
}
