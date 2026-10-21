import './Secao.css'
import useReveal from '../../hooks/useReveal'

export default function Secao({ id, className = '', children }) {
  const ref = useReveal()
  return (
    <section id={id} ref={ref} className={`secao reveal ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  )
}
