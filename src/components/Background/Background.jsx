import './Background.css'
// components/Background.jsx
function Background({ children }) {
  return (
    <div className="gradient-background">
      {children}
    </div>
  )
}

export default Background