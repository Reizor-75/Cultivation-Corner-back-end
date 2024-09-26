import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as blogPostsCtrl from '../controllers/blogPosts.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)

export { router }