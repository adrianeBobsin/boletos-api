import { BankslipsRepository } from '../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'

export class SearchBankslipsUseCase {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async execute(id: string) {
    const bankslips = await this.bankslipsRepository.getById(id)

    return {
      bankslips
    }
  }
}
