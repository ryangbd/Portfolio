import { links } from './links.js'

export const projetos = [
  {
    nome: 'Forno da Vila',
    descricao:
      'Site de uma padaria com cardápio, comanda lateral que atualiza conforme os itens são adicionados e página de encomendas com formulário.',
    tecnologias: ['React', 'JavaScript', 'CSS'],
    repositorio: `${links.github}?tab=repositories`,
  },
  {
    nome: 'Roteirização',
    descricao:
      'Sistema em Java que encontra rotas em grafos com busca em profundidade (DFS), backtracking e listas de adjacência.',
    tecnologias: ['Java', 'Grafos'],
    repositorio: `${links.github}?tab=repositories`,
  },
  {
    nome: 'VittalyPet',
    descricao:
      'Rede social voltada ao cuidado com pets, desenvolvida como projeto de conclusão do curso técnico.',
    tecnologias: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repositorio: `${links.github}?tab=repositories`,
  },
]
