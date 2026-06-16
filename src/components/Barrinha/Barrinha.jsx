import './Barrinha.css'
import useReveal from "../../hooks/useReveal"

export default function Barrinha(){
    const ref = useReveal()
    return(
            <div className="barrinha reveal" ref={ref}></div>
    )
}
