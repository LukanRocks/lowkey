// Everything specific to each space: copy, specs, prices and fees.
// To change a price, edit it here; cards, buttons and WhatsApp messages update with it.

export type Plano = {
  id: 'express' | 'pro' | 'expert';
  nome: string;
  horas: number;
  descricao: string;
  /** Price when paid at booking time. */
  preco: number;
  /** Price when paid on the day of use. Omit when there is a single price. */
  precoNoDia?: number;
  destaque?: boolean;
};

export type GrupoTaxas = { titulo: string; itens: { nome: string; descricao: string }[] };

export type Espaco = {
  slug: 'galpao' | 'casarao';
  nome: string;
  titulo: string;
  resumo: string;
  chips: string[];
  estado: { titulo: string; texto: string };
  sobre: string[];
  destaques: string[];
  medidas?: { label: string; valor: string }[];
  ambientes?: { andar: string; itens: string[] }[];
  saberAntes: string[];
  observacao: string;
  comodidades: string[];
  planos: Plano[];
  taxas: GrupoTaxas[];
  regras: string[];
  /** Folder names inside src/assets/galeria/<slug>/, in display order. */
  galeria: { pasta: string; label: string }[];
  cta: { visita?: boolean };
};

const horarioEstendido: GrupoTaxas = {
  titulo: 'Horário estendido',
  itens: [
    { nome: 'Hora extra', descricao: 'Tempo usado antes ou depois do período reservado.' },
    { nome: 'Entrega ou retirada', descricao: 'Para entregar ou retirar materiais fora do horário reservado.' },
    { nome: 'Armazenamento', descricao: 'Quando materiais ficam no espaço depois da reserva.' },
    { nome: 'Pernoite', descricao: 'Para cuidar dos equipamentos que ficam no espaço durante a noite.' },
  ],
};

const usoEspecialBase = [
  {
    nome: 'Objetos pesados',
    descricao: 'Uso de carros, motos e objetos pesados, para cobrir danos ao fundo infinito.',
  },
  {
    nome: 'Energia de alto consumo',
    descricao: 'Iluminação de tungstênio, HMI ou outros equipamentos de alto consumo ligados à rede.',
  },
  { nome: 'Manutenção', descricao: 'Quando é preciso recuperar algo do patrimônio oferecido.' },
];

export const galpao: Espaco = {
  slug: 'galpao',
  nome: 'Estúdio Galpão',
  titulo: 'Estúdio Galpão',
  resumo:
    '150 m² de vão livre com fundo infinito, chroma-key e iluminação inteligente, pronto para foto, vídeo e transmissões ao vivo.',
  chips: [
    '150 m² de vão livre',
    'Até 50 pessoas',
    'Fundo infinito 60 m²',
    'Chroma-key',
    'Ar-condicionado',
    'Equipamentos inclusos',
    'Self check-in',
  ],
  estado: {
    titulo: 'Pronto para produzir',
    texto: 'Espaço totalmente preparado para foto, vídeo e lives, com iluminação inteligente controlada pela Alexa.',
  },
  sobre: [
    'Com 150 m² de vão livre, o Estúdio Galpão tem isolamento acústico e quadro de luz trifásico: infraestrutura profissional para produções de todos os tamanhos.',
    'O espaço tem fundo infinito branco, ar-condicionado, grid estrutural para montagens, guincho para içamento de carga e um painel cenográfico de MDF pintado de verde para chroma-key.',
    'A área de apoio de 80 m² completa a estrutura com cozinha, camarim, banheiros e equipamentos.',
  ],
  destaques: [
    'Fundo infinito branco com 60 m² de piso, limpo entre cada produção',
    'Iluminação fixa de LED colorida com controle por voz (Amazon Alexa)',
    'Projetor HDMI com Fire TV para YouTube ou espelhamento',
    'Painel de MDF verde para chroma-key, liberado para pinturas',
    'Guincho para içamento de carga até 100 kg',
    'Carga e descarga dentro do galpão, com 4 vagas ao lado',
    'Wi-Fi Vivo Fibra 500 Mbps de download e 250 Mbps de upload',
  ],
  medidas: [
    { label: 'Largura', valor: '10 m' },
    { label: 'Comprimento', valor: '15 m' },
    { label: 'Altura', valor: '6 m' },
    { label: 'Área de apoio', valor: '80 m²' },
  ],
  saberAntes: [
    'Inclua montagem, captação, desmontagem e organização no período da reserva. Assim você evita taxas extras.',
    'O fundo infinito é branco. Mudanças de cor precisam ser combinadas no atendimento.',
    'Pinturas no painel de MDF não têm custo de repintura quando avisadas com antecedência.',
  ],
  observacao: 'Efeitos pirotécnicos ou com líquidos precisam de autorização prévia.',
  comodidades: [
    'Cozinha com geladeira, air fryer, fogão de indução e chaleira',
    'Pratos, talheres, panelas e copos',
    'Camarim com araras, cabides, trocador e espelhos',
    'Poltronas e televisão',
    'Impressora',
    'Banheiros com sabonete, papel higiênico e papel toalha',
    'Materiais de limpeza e protetores de pé',
  ],
  planos: [
    { id: 'express', nome: 'Express', horas: 2, descricao: 'O período mínimo para reservar o estúdio.', preco: 400 },
    {
      id: 'pro',
      nome: 'Pro',
      horas: 4,
      descricao: 'O período mais pedido pelos nossos clientes.',
      preco: 540,
      precoNoDia: 600,
      destaque: true,
    },
    {
      id: 'expert',
      nome: 'Expert',
      horas: 6,
      descricao: 'Meio dia para produzir com calma, de dia ou à noite.',
      preco: 850,
      precoNoDia: 990,
    },
  ],
  taxas: [
    horarioEstendido,
    {
      titulo: 'Limpeza e organização',
      itens: [
        {
          nome: 'Organização',
          descricao: 'Quando o espaço é devolvido com equipamentos e móveis fora do lugar, louça suja etc.',
        },
        { nome: 'Limpeza simples', descricao: 'Quando o estúdio ou o fundo infinito voltam com sujeira moderada.' },
        { nome: 'Limpeza pesada', descricao: 'Quando há sujeira intensa ou manchas nas curvas e paredes.' },
        { nome: 'Resíduos de produção', descricao: 'Quando ficam materiais para descarte no estúdio.' },
      ],
    },
    {
      titulo: 'Uso especial',
      itens: [
        ...usoEspecialBase.slice(0, 1),
        { nome: 'Pintura', descricao: 'Quando o estúdio é pintado; o valor depende da área a recuperar.' },
        { nome: 'Andaime', descricao: 'O uso é gratuito. A taxa só vale se ele não for desmontado e guardado.' },
        ...usoEspecialBase.slice(1),
      ],
    },
  ],
  regras: [
    'Operadores e equipe técnica de foto e vídeo não estão inclusos no valor da locação.',
    'Acompanhamento técnico presencial não está incluso na reserva.',
    'Entregas e retiradas fora do período reservado podem ser contratadas como adicional.',
  ],
  galeria: [
    { pasta: 'fundo-infinito', label: 'Fundo infinito' },
    { pasta: 'chroma-key', label: 'Chroma-key' },
    { pasta: 'galpao', label: 'Galpão' },
    { pasta: 'camarim', label: 'Camarim' },
    { pasta: 'cozinha', label: 'Cozinha' },
  ],
  cta: {},
};

export const casarao: Espaco = {
  slug: 'casarao',
  nome: 'Casarão Antigo',
  titulo: 'Casarão Antigo',
  resumo:
    'Um casarão de época com dois andares, lareiras, madeira, vitrais e banheira antiga. Ambientes vazios para você montar o cenário da sua produção.',
  chips: [
    '2 andares',
    'Até 35 pessoas',
    'Lareiras e madeira',
    'Vitrais coloridos',
    'Luz natural',
    'Equipamentos inclusos',
    'Self check-in',
  ],
  estado: {
    titulo: 'Pronto para o seu cenário',
    texto: 'O imóvel está vazio e sem preparação. É ideal para montar cenários com pintura, móveis e objetos.',
  },
  sobre: [
    'O Casarão é um imóvel amplo, com vários ambientes para compor o cenário da sua produção.',
    'Tem salão iluminado naturalmente com lareira e detalhes em madeira, estúdio fotográfico com fundo infinito e luz natural, banheiro com azulejo e banheira de época, e escada de madeira com vitrais coloridos.',
  ],
  destaques: [
    'Salão com lareira e detalhes em madeira',
    'Estúdio fotográfico com fundo infinito e luz natural',
    'Banheiro de época com banheira',
    'Escada de madeira com vitrais coloridos',
    'Jardim de inverno em vidro',
    'Pintura e intervenções no imóvel sem custo extra de manutenção',
    'Carga e descarga ao lado da porta',
  ],
  ambientes: [
    {
      andar: 'Térreo',
      itens: [
        'Hall de entrada com escada',
        'Sala com detalhes em madeira e lareira',
        'Três salas conjugadas em madeira com lareira',
        'Seis pequenas salas',
        'Jardim de inverno em vidro',
      ],
    },
    {
      andar: '1º andar',
      itens: [
        'Hall com escada de acesso aos cômodos',
        'Antessala e sala com janela de três faces',
        'Banheiro antigo em tons de marrom',
        'Banheiro azul com banheira',
        'Dois quartos com sacada',
        'Quarto com forro em ângulo',
      ],
    },
  ],
  saberAntes: [
    'O Casarão não tem cozinha. Os dois banheiros ficam no segundo andar.',
    'Não há Wi-Fi nem outra conexão com internet no imóvel.',
    'A limpeza não está inclusa: escolha a que a sua produção precisa ao reservar.',
    'Inclua descarga, montagem, captação, desmontagem e organização no período da reserva.',
  ],
  observacao:
    'Efeitos pirotécnicos ou com líquidos não são permitidos dentro do Casarão. Na área externa, precisam de autorização.',
  comodidades: ['Araras e cabides', 'Trocador e espelho', 'Poltronas', 'Sabonete, papel higiênico e papel toalha'],
  planos: [
    { id: 'express', nome: 'Express', horas: 2, descricao: 'O período mínimo para reservar o Casarão.', preco: 180 },
    {
      id: 'pro',
      nome: 'Pro',
      horas: 4,
      descricao: 'O período mais pedido pelos nossos clientes.',
      preco: 365,
      precoNoDia: 400,
      destaque: true,
    },
    {
      id: 'expert',
      nome: 'Expert',
      horas: 6,
      descricao: 'Meio dia para produzir com calma, de dia ou à noite.',
      preco: 540,
      precoNoDia: 600,
    },
  ],
  taxas: [
    {
      titulo: 'Limpeza',
      itens: [
        {
          nome: 'Limpeza interna simples',
          descricao: 'Remoção de poeira, varrição, limpeza de superfícies e organização básica.',
        },
        {
          nome: 'Limpeza interna profunda',
          descricao: 'Remoção de sujeira acumulada e higienização de pisos, paredes e superfícies.',
        },
        { nome: 'Limpeza externa', descricao: 'Paredes e janelas externas do imóvel (telhado não incluso).' },
        {
          nome: 'Resíduos de produção',
          descricao: 'Quando ficam materiais para descarte: madeira, adesivos, tinta, efeitos especiais etc.',
        },
      ],
    },
    horarioEstendido,
    { titulo: 'Uso especial', itens: usoEspecialBase },
  ],
  regras: [
    'Operadores e equipe técnica de foto e vídeo não estão inclusos no valor da locação.',
    'Acompanhamento técnico presencial não está incluso na reserva.',
    'Entregas e retiradas fora do período reservado podem ser contratadas como adicional.',
  ],
  galeria: [
    { pasta: 'terreo', label: 'Térreo' },
    { pasta: 'primeiro-andar', label: '1º andar' },
    { pasta: 'externo', label: 'Área externa' },
  ],
  cta: { visita: true },
};

export const espacos = [galpao, casarao];

export const precoMinimo = (e: Espaco) => Math.min(...e.planos.map((p) => p.preco));
