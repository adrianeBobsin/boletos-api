import { BankslipsRepository } from '../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'

interface IBankslipsRequest {
  due_date: string
  total_in_cents: string
  customer: string
}

export class CreateBankslipsUseCase {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async execute(data: IBankslipsRequest) {
    const bankslips = await this.bankslipsRepository.create(data)

    return {
      bankslips
    }
  }
}
