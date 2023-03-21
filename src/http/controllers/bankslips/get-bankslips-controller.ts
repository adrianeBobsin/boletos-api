import { Request, Response } from 'express'
import { BankslipsRepository } from '../../../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../../../repositories/in-memory/in-memory-bankslips-repository'
import { GetBankslipsUseCase } from '../../../use-cases/get-bankslips'

class GetBankslipsController {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async handle(request: Request, response: Response) {
    const getBankslipsUseCase = new GetBankslipsUseCase(this.bankslipsRepository)

    const bankslips = await getBankslipsUseCase.execute()

    return response.json(bankslips)
  }
}

export { GetBankslipsController }
