interface IBankslips {
  due_date: string
  total_in_cents: string
  customer: string
}

export class InMemoryBankslipsRepository {
  items: any[] = []

  async create({ due_date, total_in_cents, customer }: IBankslips) {
    const bankslips = {
      id: '1234',
      due_date,
      total_in_cents,
      customer,
      status: 'PENDING',
      payment_date: ''
    }

    this.items.push(bankslips)

    return bankslips
  }

  async getMany() {
    const bankslips = [
      {
        id: '1235',
        due_date: '2018-05-23',
        total_in_cents: '99900',
        customer: 'Ford Prefect Company',
        status: 'PENDING',
        payment_date: ''
      },
      {
        id: '1236',
        due_date: '2018-05-30',
        total_in_cents: '99980',
        customer: 'Ford Prefect Company',
        status: 'PENDING',
        payment_date: ''
      }
    ]

    this.items.push(bankslips)

    return bankslips
  }

  async getById(id: string) {
    const bankslips = {
      id: '1',
      due_date: '2019-05-23',
      total_in_cents: '99910',
      customer: 'Ford Prefect Company',
      status: 'PENDING',
      payment_date: ''
    }

    this.items.push(bankslips)

    return bankslips
  }

  async paymentBankslips(id: string, payment_date: string) {
    const bankslips = {
      id: '1',
      due_date: '2019-05-23',
      total_in_cents: '99910',
      customer: 'Ford Prefect Company',
      status: 'PAID',
      payment_date: payment_date
    }

    return bankslips
  }

  async cancelBankslips(id: string) {
    let bankslips = await this.items.pop()
    bankslips = null

    return bankslips
  }
}
