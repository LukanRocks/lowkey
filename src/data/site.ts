// Contact details and links shared by every page.
export const site = {
  name: 'Low Key Estúdios',
  since: 2019,
  whatsappNumber: '5541992768015',
  whatsappDisplay: '(41) 99276-8015',
  whatsappGroup: 'https://chat.whatsapp.com/G2qu18bfPia0uyum3LRmpi',
  instagram: 'https://instagram.com/lowkeyestudios',
  instagramHandle: '@lowkeyestudios',
  facebook: 'https://www.facebook.com/estudioslowkey',
  address: {
    street: 'R. Sen. Xavier da Silva, 147',
    district: 'São Francisco',
    city: 'Curitiba',
    state: 'PR',
    postalCode: '82590-300',
    lat: -25.4204908,
    lng: -49.2729568,
  },
  mapsUrl:
    'https://www.google.com/maps/place/Low+Key+Est%C3%BAdios/@-25.4204908,-49.2729568,17z/data=!4m6!3m5!1s0x94dce5fdcc79ee79:0x703bca3d2c58de41!8m2!3d-25.4204908!4d-49.2729568',
} as const;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/galpao', label: 'Estúdio Galpão' },
  { href: '/casarao', label: 'Casarão Antigo' },
  { href: '/grupo-de-whatsapp', label: 'Grupo de descontos' },
  { href: '/politica-de-cancelamento', label: 'Política de cancelamento' },
] as const;
