import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as inventorysCtrl from '../controllers/inventorys.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', inventorysCtrl.index)
router.post('/newInventory', inventorysCtrl.create)
router.put('/:inventoryId', inventorysCtrl.update)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)


export { router }