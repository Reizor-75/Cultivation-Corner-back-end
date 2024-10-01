import { Router } from 'express'
import { decodeUserFromToken, checkAuth, checkOwner } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/aboutUs', profilesCtrl.showEmployee)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.put(':profileId/updateRole', checkOwner, profilesCtrl.updateRole)

export { router }
