import { Router } from 'express'
import { CancelBankslipsController } from './http/controllers/bankslips/cancel-bankslips-controller'
import { CreateBankslipsController } from './http/controllers/bankslips/create-bankslips-controller'
import { GetBankslipsController } from './http/controllers/bankslips/get-bankslips-controller'
import { PaymentBankslipsController } from './http/controllers/bankslips/payment-bankslips-controller'
import { SearchBankslipsController } from './http/controllers/bankslips/search-bankslips-controller'
import { BankslipsRepository } from './repositories/bankslips-repository'

const router = Router()

const bankslipsRepository = new BankslipsRepository()

const createBankslipsUseCase = new CreateBankslipsController(bankslipsRepository)
const getBankslipsUseCase = new GetBankslipsController(bankslipsRepository)
const searchBankslipsUseCase = new SearchBankslipsController(bankslipsRepository)
const cancelBankslipsUseCase = new CancelBankslipsController(bankslipsRepository)
const paymentBankslipsUseCase = new PaymentBankslipsController(bankslipsRepository)

router.post('/rest/bankslips', createBankslipsUseCase.handle)
router.get('/rest/bankslips', getBankslipsUseCase.handle)
router.get('/rest/bankslips/{id}', searchBankslipsUseCase.handle)
router.post('/rest/bankslips/{id}/payments', paymentBankslipsUseCase.handle)
router.delete('/rest/bankslips/{id}', cancelBankslipsUseCase.handle)

export { router }
