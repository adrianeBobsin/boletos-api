import { Request, Response } from 'express'
import { BankslipsRepository } from '../../../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../../../repositories/in-memory/in-memory-bankslips-repository'
import { CancelBankslipsUseCase } from '../../../use-cases/cancel-bankslips'

class CancelBankslipsController {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params

    const cancelBankslipsUseCase = new CancelBankslipsUseCase(this.bankslipsRepository)

    const bankslips = await cancelBankslipsUseCase.execute(id.toString())

    return response.json(bankslips)
  }
}

export { CancelBankslipsController }
