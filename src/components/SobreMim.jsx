function SobreMim() {
  const cardsEsquerda = [
    { titulo: "Frontend", descricao: "Interfaces modernas e responsivas." },
    { titulo: "Full Stack", descricao: "Em crescimento contínuo." },
    { titulo: "UI Design", descricao: "Cuidado visual e usabilidade." },
  ];

  const cardsDireita = [
    { label: "FORMAÇÃO", valor: "Análise e Desenvolvimento de Sistemas" },
    { label: "EXPERIÊNCIA", valor: "Estagiário na Secretaria da Saúde" },
    { label: "FOCO", valor: "Desenvolvimento de Software" },
    { label: "OBJETIVO", valor: "Estágio em tecnologia" },
  ];

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-esquerda">
        <span className="sobre-label">SOBRE MIM</span>
        {cardsEsquerda.map((card, i) => (
          <div className="card-esquerda" key={i}>
            <strong>{card.titulo}</strong>
            <span>{card.descricao}</span>
          </div>
        ))}
      </div>

      <div className="sobre-direita">
        <p className="sobre-texto">
          Estudante de Análise e Desenvolvimento de Sistemas na FATEC Zona
          Leste, com formação técnica pela ETEC Professor Camargo Aranha.
          Tenho experiência prática com Java, JavaScript, Python, HTML, CSS e
          MySQL. Atualmente
          estagio na Secretaria Municipal da Saúde, onde lido com sistemas,
          dados e processos administrativos. Busco minha primeira oportunidade
          em desenvolvimento para evoluir em minha carreira profissional.
        </p>
        <div className="cards-direita">
          {cardsDireita.map((card, i) => (
            <div className="card-direita" key={i}>
              <span className="card-label">{card.label}</span>
              <span className="card-valor">{card.valor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobreMim;