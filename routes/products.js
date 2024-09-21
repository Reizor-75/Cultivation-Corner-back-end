import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as productsCtrl from '../controllers/products.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index)
router.post('/newProduct', productsCtrl.create)
router.put('/:productId', productsCtrl.update)
router.delete('/:productId', productsCtrl.delete)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)


export { router }