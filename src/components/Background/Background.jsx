import './Background.css'
// components/Background.jsx
function Background({ children }) {
  return (
    <div className="fundo">
      {children}
    </div>
  )
}

export default Background