import { Request, Response } from 'express'
import { BankslipsRepository } from '../../../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../../../repositories/in-memory/in-memory-bankslips-repository'
import { PaymentBankslipsUseCase } from '../../../use-cases/payment-bankslips'

class PaymentBankslipsController {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { payment_date } = request.body

    const paymentBankslipsUseCase = new PaymentBankslipsUseCase(this.bankslipsRepository)

    const bankslip = await paymentBankslipsUseCase.execute(id.toString(), payment_date)

    return response.json(bankslip)
  }
}

export { PaymentBankslipsController }
