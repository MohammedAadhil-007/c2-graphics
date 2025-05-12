export function formatMoney(amount: number) {
  amount = amount * 0.01
  return amount.toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
  })
}

export function formatDate(dateofreservation: string) {
  const date = new Date(dateofreservation)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
  return formattedDate
}
