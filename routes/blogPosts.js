import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as blogPostsCtrl from '../controllers/blogPosts.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', blogPostsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)
router.post('/newPost', auth.checkAuth, blogPostsCtrl.create)

export { router }