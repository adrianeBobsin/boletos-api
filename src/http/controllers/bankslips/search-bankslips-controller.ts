import { Request, Response } from 'express'
import { BankslipsRepository } from '../../../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../../../repositories/in-memory/in-memory-bankslips-repository'
import { SearchBankslipsUseCase } from '../../../use-cases/search-bankslips'

class SearchBankslipsController {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const searchBankslipsUseCase = new SearchBankslipsUseCase(this.bankslipsRepository)

    const bankslips = await searchBankslipsUseCase.execute(id.toString())

    return response.json(bankslips)
  }
}

export { SearchBankslipsController }
