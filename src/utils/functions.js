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

export function formatCustomDate(dateStr) {
  const [dayAndTime, monthYear] = dateStr.split("/");

  // Extrai o dia da parte antes do 'T'
  const day = dayAndTime.split("T")[0];

  // Constrói a data formatada
  const formattedDate = `${day}/${monthYear}`;

  return formattedDate;
}
