import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'
import { CreateBankslipsUseCase } from './create-bankslips'
import { describe, expect, it, beforeEach } from '@jest/globals'

let bankslipsRepository: InMemoryBankslipsRepository
let sut: CreateBankslipsUseCase

describe('Create Bankslips Use Case', () => {
  beforeEach(() => {
    bankslipsRepository = new InMemoryBankslipsRepository()
    sut = new CreateBankslipsUseCase(bankslipsRepository)
  })

  it('should to create one bankslips', async () => {
    const { bankslips } = await sut.execute({
      due_date: '2018-05-10',
      total_in_cents: '99000',
      customer: 'Ford Prefect Company'
    })

    expect(bankslips.id).toEqual(expect.any(String))
  })
})
