// Christmas promotion at the Casarão Antigo: two ad landing pages.
//   /natal/familia        → families, photographer included
//   /natal/profissionais  → photographers, agencies and brands
// Not linked from the menu and left out of the sitemap.
//
// PLACEHOLDERS: everything marked "a confirmar" is a guess. While `rascunho` is true,
// both pages show a "Rascunho" notice at the top. Set it to false once the details are final.
// A price of `null` shows "Sob consulta" instead of a value.

export const natal = {
  rascunho: true,
  periodo: 'Dezembro', // a confirmar
  vagas: 'Vagas limitadas',

  // Photos: src/assets/galeria/natal/<pasta>/ (the first photo of the first set is the page cover).
  cenarios: [
    {
      pasta: 'sala-da-lareira',
      nome: 'Sala da lareira',
      familia: 'Árvore, presentes e a lareira acesa ao fundo. O clássico retrato de Natal da família.', // a confirmar
      profissional: 'Lareira, madeira e árvore decorada. Luz de janela lateral e espaço para tripés e rebatedores.', // a confirmar
    },
    {
      pasta: 'escada-dos-vitrais',
      nome: 'Escada dos vitrais',
      familia: 'A escada de madeira com guirlandas e os vitrais coloridos iluminados pelo sol.', // a confirmar
      profissional:
        'Escada de madeira com guirlandas e vitrais coloridos. Composições verticais e luz colorida natural.', // a confirmar
    },
    {
      pasta: 'jardim-de-inverno',
      nome: 'Jardim de inverno',
      familia: 'Luz natural, pinheiros e luzinhas. Ideal para fotos com as crianças.', // a confirmar
      profissional: 'Ambiente envidraçado com luz natural difusa, pinheiros e cordões de luz.', // a confirmar
    },
  ],

  familia: {
    pacotes: [
      {
        nome: 'Ensaio essencial',
        detalhe: '30 minutos', // a confirmar
        itens: ['1 cenário à escolha', 'Fotógrafo profissional', 'Até 6 pessoas', '10 fotos editadas'], // a confirmar
        preco: null as number | null,
      },
      {
        nome: 'Ensaio completo',
        detalhe: '1 hora', // a confirmar
        itens: ['Os 3 cenários de Natal', 'Fotógrafo profissional', 'Até 10 pessoas', '30 fotos editadas'], // a confirmar
        preco: null as number | null,
        destaque: true,
      },
    ],
    passos: [
      { titulo: 'Escolha o ensaio', texto: 'Essencial ou completo, com um ou os três cenários.' },
      { titulo: 'Reserve pelo WhatsApp', texto: 'Escolha o dia e o horário. As vagas de dezembro são limitadas.' },
      { titulo: 'Venha fotografar', texto: 'O fotógrafo recebe vocês no Casarão já decorado.' },
      { titulo: 'Receba as fotos', texto: 'As fotos editadas chegam por link para baixar.' }, // a confirmar
    ],
    dicas: [
      'Combinem as cores das roupas: tons de vermelho, verde, branco ou neutros funcionam bem.',
      'Tragam acessórios de Natal, como gorros, laços ou um presente embrulhado.',
      'Cheguem 10 minutos antes para arrumar o cabelo e a roupa com calma.',
    ],
    faq: [
      { p: 'Quantas pessoas podem participar?', r: 'Até 6 pessoas no ensaio essencial e até 10 no completo.' }, // a confirmar
      { p: 'Quando recebo as fotos?', r: 'As fotos editadas são entregues por link em até 7 dias.' }, // a confirmar
      { p: 'Posso trocar a data?', r: 'Sim. A troca segue a nossa política de cancelamento.' },
      { p: 'Onde fica o Casarão?', r: 'No centro de Curitiba, com estacionamento no condomínio.' },
    ],
  },

  profissionais: {
    planos: [
      {
        nome: 'Express',
        horas: 2,
        descricao: 'Para um ensaio ou um vídeo curto em um cenário.',
        preco: null as number | null,
      },
      {
        nome: 'Pro',
        horas: 4,
        descricao: 'Tempo para produzir nos três cenários.',
        preco: null as number | null,
        destaque: true,
      },
      {
        nome: 'Expert',
        horas: 6,
        descricao: 'Meio dia para campanhas e produções maiores.',
        preco: null as number | null,
      },
    ],
    usos: [
      'Campanhas de fim de ano',
      'Lookbooks e catálogos',
      'Ensaios de clientes',
      'Conteúdo para redes',
      'Vídeos e comerciais',
    ],
    vantagens: [
      { titulo: 'Cenário pronto', texto: 'Três ambientes decorados para o Natal. Sem custo nem tempo de cenografia.' },
      { titulo: 'Equipamentos inclusos', texto: 'Iluminação, suportes e modificadores sem custo extra na reserva.' },
      { titulo: 'Self check-in', texto: 'Acesso liberado para você produzir no seu horário, sem anfitrião.' },
      { titulo: 'Até 35 pessoas', texto: 'Espaço para equipe, modelos e clientes, com estacionamento no condomínio.' },
    ],
    passos: [
      { titulo: 'Escolha o período', texto: '2, 4 ou 6 horas. Inclua montagem de luz e desmontagem no tempo.' },
      { titulo: 'Reserve pelo WhatsApp', texto: 'Confirmamos a data. As datas de dezembro são limitadas.' },
      { titulo: 'Produza', texto: 'Entre com self check-in e encontre os cenários prontos.' },
    ],
  },
};
