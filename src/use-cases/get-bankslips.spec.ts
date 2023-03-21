import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { GetBankslipsUseCase } from './get-bankslips'

let bankslipsRepository: InMemoryBankslipsRepository
let sut: GetBankslipsUseCase

describe('Get all Bankslips Use Case', () => {
  beforeEach(() => {
    bankslipsRepository = new InMemoryBankslipsRepository()
    sut = new GetBankslipsUseCase(bankslipsRepository)
  })

  it('should to list all bankslips', async () => {
    const { bankslips } = await sut.execute()

    expect(bankslips).toHaveLength(2)
  })
})
