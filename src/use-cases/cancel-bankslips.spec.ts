import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { CancelBankslipsUseCase } from './cancel-bankslips'

let bankslipsRepository: InMemoryBankslipsRepository
let sut: CancelBankslipsUseCase

describe('Cancel Bankslips Use Case', () => {
  beforeEach(() => {
    bankslipsRepository = new InMemoryBankslipsRepository()
    sut = new CancelBankslipsUseCase(bankslipsRepository)
  })

  it('should to cancel one bankslips', async () => {
    const { bankslips } = await sut.execute('1')

    expect(bankslips).toBeNull()
  })
})
