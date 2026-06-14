import './Skills.css'
import { DiJavascript1, DiMysql, DiReact, DiPython, DiHtml5, DiCss3, DiJava, DiGithubBadge, DiPhotoshop, DiVisualstudio } from 'react-icons/di'

function Skills(){
    const categoria = [
        {
            titulo: "FRONT-END",
            itens: [
                { icon: <DiReact />, nome: "React" },
                { icon: <DiJavascript1 />, nome: "JavaScript" },
                { icon: <DiHtml5 />, nome: "HTML5" },
                { icon: <DiCss3 />, nome: "CSS3" },
            ]
        },
        {
            titulo: "BACK-END",
            itens: [
                { icon: <DiPython />, nome: "Python" },
                { icon: <DiJava />, nome: "Java" },
            ]
        },
        {
            titulo: "FERRAMENTAS",
            itens: [
                {icon: <DiGithubBadge/>, nome: "GIT/Github"},
                {icon: <DiPhotoshop/>, nome: "Photoshop"},
                {icon: <DiVisualstudio/>, nome: "VsCode"},
            ]
        },
        {
            titulo: "DATABASES",
            itens: [
                { icon: <DiMysql />, nome: "MySQL" },
            ]
        },
    ]
    return (
        <section id="skills" className="skills">
            <span>COMPETÊNCIAS</span>
            <span className="title">MINHAS HABILIDADES</span>
            <div className="card-section">
                {categoria.map((card) =>
                    <div className="card" key={card.titulo}>
                        <strong>{card.titulo}</strong>
                        <div className="card-itens">
                            {card.itens.map((item) => (
                                <div className="item" key={item.nome}>
                                    {item.icon}
                                    <span>{item.nome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Skills