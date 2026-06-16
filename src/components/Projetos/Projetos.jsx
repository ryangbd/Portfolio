import './Projetos.css'
import useReveal from "../../hooks/useReveal"

export default function Projetos(){
    const ref = useReveal()
    return (
        <section id="projetos" className="projetos reveal" ref={ref}>
            <div className="card">

            </div>
        </section>
    )
}