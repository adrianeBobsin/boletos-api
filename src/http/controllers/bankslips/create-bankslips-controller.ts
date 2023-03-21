import { Request, Response } from 'express'
import { BankslipsRepository } from '../../../repositories/bankslips-repository'
import { InMemoryBankslipsRepository } from '../../../repositories/in-memory/in-memory-bankslips-repository'
import { CreateBankslipsUseCase } from '../../../use-cases/create-bankslips'

class CreateBankslipsController {
  constructor(private bankslipsRepository: BankslipsRepository | InMemoryBankslipsRepository) {}

  async handle(request: Request, response: Response) {
    const { data } = request.body

    const createBankslipsUseCase = new CreateBankslipsUseCase(this.bankslipsRepository)

    const bankslips = await createBankslipsUseCase.execute(data)

    return response.json(bankslips)
  }
}

export { CreateBankslipsController }
