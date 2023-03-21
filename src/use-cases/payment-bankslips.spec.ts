import { InMemoryBankslipsRepository } from '../repositories/in-memory/in-memory-bankslips-repository'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { PaymentBankslipsUseCase } from './payment-bankslips'

let bankslipsRepository: InMemoryBankslipsRepository
let sut: PaymentBankslipsUseCase

describe('Payment bankslips Use Case', () => {
  beforeEach(() => {
    bankslipsRepository = new InMemoryBankslipsRepository()
    sut = new PaymentBankslipsUseCase(bankslipsRepository)
  })

  it('should change to payed bankslips', async () => {
    const { payment } = await sut.execute('1', '2020-06-5')

    expect(payment.id).toEqual('1')
    expect(payment.status).toEqual('PAID')
    expect(payment.payment_date).toEqual('2020-06-5')
  })
})
