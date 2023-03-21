import dayjs from 'dayjs'

var customParseFormat = require('dayjs/plugin/customParseFormat')

dayjs.extend(customParseFormat)

export function getBankslipsFine(due_date: string, payment_date: string, total_in_cents: string) {
  if (due_date === payment_date) {
    return 0
  }

  const dueDate = dayjs(due_date, 'DD-MM-YYYY')
  const paymentDate = dayjs(due_date, 'DD-MM-YYYY')
  const totalInCents = parseInt(total_in_cents)

  const dataDiff = dueDate.diff(paymentDate, 'day')

  if (dataDiff <= 10) {
    return totalInCents * 0.005
  }

  return totalInCents * 0.01
}
