import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as ordersCtrl from '../controllers/orders.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', ordersCtrl.index)
router.get('/:orderId', ordersCtrl.show)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)
router.post('/newOrder', auth.checkAuth, ordersCtrl.create)
router.put('/:orderId', auth.checkEmployee, ordersCtrl.update)

export { router }