import { prisma } from '../lib/prisma'

interface IBankslips {
  due_date: string
  total_in_cents: string
  customer: string
}

export class BankslipsRepository {
  async create({ due_date, total_in_cents, customer }: IBankslips) {
    const bankslips = await prisma.bankslips.create({
      data: {
        due_date,
        total_in_cents,
        customer,
        status: 'PENDING',
        payment_date: ''
      }
    })

    return bankslips
  }

  async getMany() {
    const bankslips = await prisma.bankslips.findMany()

    return bankslips
  }

  async getById(id: string) {
    const bankslips = await prisma.bankslips.findUnique({
      where: {
        id
      }
    })

    return bankslips
  }

  async paymentBankslips(id: string, payment_date: string) {
    const bankslips = await prisma.bankslips.update({
      where: {
        id
      },
      data: {
        payment_date,
        status: 'PAID'
      }
    })

    return bankslips
  }

  async cancelBankslips(id: string) {
    await prisma.bankslips.delete({
      where: {
        id
      }
    })
  }
}
