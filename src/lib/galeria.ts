import type { ImageMetadata } from 'astro';

// Every photo dropped into src/assets/galeria/<espaco>/<pasta>/ is picked up automatically,
// sorted by file name (prefix files with 01-, 02-… to control the order).
const arquivos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/galeria/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export type Foto = { src: ImageMetadata; alt: string; nome: string };

export function fotosDe(caminho: string, altBase: string): Foto[] {
  const prefixo = `/src/assets/galeria/${caminho}/`;
  return Object.entries(arquivos)
    .filter(([p]) => p.startsWith(prefixo))
    .sort(([a], [b]) => a.localeCompare(b, 'pt-BR', { numeric: true }))
    .map(([p, mod], i) => ({ src: mod.default, alt: `${altBase}, foto ${i + 1}`, nome: p.slice(prefixo.length) }));
}
