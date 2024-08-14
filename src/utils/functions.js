// FUNÇÕES ÚTEIS

export function formatCurrency(value, locale = "pt-BR", currency = "BRL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

export function formatCustomDate(isoString) {
  // Cria um novo objeto Date a partir da string ISO
  const date = new Date(isoString);

  // Extrai o dia, mês e ano
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses são de 0 a 11
  const year = date.getFullYear();

  // Retorna a data no formato DD/MM/YYYY
  return `${day}/${month}/${year}`;
}
