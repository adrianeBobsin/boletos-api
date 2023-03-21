import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { SearchBankslipsUseCase } from './search-bankslips'

let bankslipsRepository: InMemoryBankslipsRepository
let sut: SearchBankslipsUseCase

describe('Get by id one Bankslips Use Case', () => {
  beforeEach(() => {
    bankslipsRepository = new InMemoryBankslipsRepository()
    sut = new SearchBankslipsUseCase(bankslipsRepository)
  })

  it('should to list one bankslips', async () => {
    const { bankslips } = await sut.execute('1')

    expect(bankslips?.id).toEqual('1')
  })
})
