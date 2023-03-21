import { BankslipsRepository } from '../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'

export class GetBankslipsUseCase {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async execute() {
    const bankslips = await this.bankslipsRepository.getMany()

    return {
      bankslips
    }
  }
}
