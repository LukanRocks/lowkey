import { site } from '../data/site';

/** WhatsApp link that opens the chat with a message already typed. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const brl = (value: number) => value.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
