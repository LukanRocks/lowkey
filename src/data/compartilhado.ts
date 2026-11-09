// Content that applies to both spaces.

export const equipamentos = [
  {
    grupo: 'Iluminação',
    itens: [
      '1× LED Ulanzi 200Bi',
      '1× LED Godox 150 W',
      '2× LED Godox 100 W',
      '1× LED Mini-Fresnel 50 W',
      '2× LED TL600a 30 W',
      '3× Quartz Mako 300 W',
      '4× Par 56 tungstênio 300 W',
    ],
  },
  {
    grupo: 'Suportes',
    itens: [
      '3× Tripé luva/pino',
      '6× Tripé pino',
      '6× Tripé pequeno',
      '2× C-Stand',
      '3× Girafa média',
      '2× Três tabelas',
      '1× Dolly',
    ],
  },
  {
    grupo: 'Modificadores',
    itens: [
      '1× Octabox 120 cm',
      '1× Octabox 80 cm',
      '1× Softbox 60×40',
      '1× Stripbox 60×20',
      '1× Sombrinha 190 cm',
      '1× Snoot',
    ],
  },
  {
    grupo: 'Estrutura',
    itens: ['Andaime de 5 m', 'Escada de 6 m', 'Sacos de areia', 'Tecidos preto e branco', 'Extensões'],
  },
];

export const comoFunciona = [
  { titulo: 'Escolha o período', texto: '2, 4 ou 6 horas. Inclua montagem e desmontagem no tempo.' },
  { titulo: 'Reserve pelo WhatsApp', texto: 'Confirmamos a data e você paga na reserva com desconto.' },
  { titulo: 'Entre com self check-in', texto: 'O acesso ao condomínio e ao imóvel é liberado para você.' },
];

export const diferenciais = [
  { titulo: 'Self check-in', texto: 'Você entra sozinho no condomínio e no imóvel, sem depender do anfitrião.' },
  { titulo: 'Localização central', texto: 'Centro de Curitiba, perto de shopping, mercados e restaurantes.' },
  { titulo: 'Estacionamento', texto: 'Até 15 carros no condomínio, mais vagas de carga e descarga.' },
  { titulo: 'Monitoramento 24h', texto: 'Ambiente monitorado por câmeras de segurança.' },
];

export const servicosAdicionais = [
  'Check-in e check-out com ajuda da equipe Low Key',
  'Pintura do fundo infinito ou do painel de MDF',
  'Locação do espaço com churrasqueira para catering',
];

export const regrasGerais = [
  'Respeite as vagas e placas do condomínio. Veículos parados de forma irregular podem ser advertidos, multados ou removidos sem aviso.',
  'Ambiente monitorado por câmeras 24h.',
];

export const cancelamento = {
  etapas: [
    { quando: '7 dias ou mais antes', reembolso: '100%', texto: 'Reembolso total ou troca de data sem custo.' },
    {
      quando: 'Entre 6 dias e 48 horas antes',
      reembolso: '50%',
      texto: 'Metade do valor é devolvida em até 5 dias úteis.',
    },
    { quando: 'Entre 48 e 24 horas antes', reembolso: '20%', texto: '20% do valor é devolvido em até 5 dias úteis.' },
    {
      quando: 'Menos de 24 horas antes',
      reembolso: '0%',
      texto: 'Não há reembolso. O mesmo vale para quem não comparecer.',
    },
  ],
  observacoes: [
    'As regras valem tanto para cancelamento quanto para troca de data.',
    'Para cancelar ou mudar a data, fale com o atendimento pelo WhatsApp.',
    'Em casos excepcionais, como manutenção do imóvel, o Low Key Estúdios pode cancelar a reserva com reembolso total ou reagendar sem custo, avisando com até 7 dias de antecedência.',
  ],
};
