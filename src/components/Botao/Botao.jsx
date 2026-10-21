import './Botao.css'

export default function Botao({
  href,
  icone,
  variante = 'contorno',
  externo = false,
  download = false,
  children,
}) {
  return (
    <a
      className={`botao botao--${variante}`}
      href={href}
      {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
      {...(download && { download: true })}
    >
      <span>{children}</span>
      {icone}
    </a>
  )
}
