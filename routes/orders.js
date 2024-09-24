import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as ordersCtrl from '../controllers/orders.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/newOrder', ordersCtrl.create)

/*---------- Protected Routes ----------*/


export { router }