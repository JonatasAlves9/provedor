const menu = [
  {
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    text: 'Organizações',
    link: '/organizacoes',
  },
  {
    text: 'Pessoas',
    link: '/pessoas',
  },
  {
    text: 'Seleção de Estágio',
    link: '/selecao-de-estagio',
  },
  {
    text: 'Cadastros',
    subMenu: [
      {
        text: 'Cursos',
        link: '/cursos',
      },
      {
        text: 'Tarefas',
        link: '/tarefas',
      },
      {
        text: 'Locais de Estágio',
        link: '/locais-de-estagio',
      },
      {
        text: 'Critérios de Avaliação',
        link: '/criterios-de-avaliacao',
      },
    ],
  },
];
export default menu;
