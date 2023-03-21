import { BankslipsRepository } from '../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'

export class CancelBankslipsUseCase {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async execute(id: string) {
    const bankslips = await this.bankslipsRepository.cancelBankslips(id)

    return {
      bankslips
    }
  }
}
