import { BankslipsRepository } from '../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'

export class PaymentBankslipsUseCase {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async execute(id: string, payment_date: string) {
    const payment = await this.bankslipsRepository.paymentBankslips(id, payment_date)

    return {
      payment
    }
  }
}
