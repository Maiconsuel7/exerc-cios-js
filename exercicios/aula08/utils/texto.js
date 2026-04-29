// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  const texto = nome.toLowerCase();
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
