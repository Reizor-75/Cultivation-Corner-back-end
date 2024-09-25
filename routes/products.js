import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as productsCtrl from '../controllers/products.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index)
router.get('/:productId', productsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)
router.post('/newProduct', auth.checkEmployee, productsCtrl.create)
router.put('/:productId', auth.checkEmployee, productsCtrl.update)
router.delete('/:productId', auth.checkEmployee, productsCtrl.delete)


export { router }