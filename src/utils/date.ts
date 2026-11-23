/**
 * Utilitários para formatação de datas em português brasileiro (pt-BR)
 */

export function formatarData(data: Date | string): string {
  const d = typeof data === 'string' ? new Date(data) : data;
  if (isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function formatarDataCurta(data: Date | string): string {
  const d = typeof data === 'string' ? new Date(data) : data;
  if (isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(d);
}
