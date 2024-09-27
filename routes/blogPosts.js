import { Router } from 'express'
import * as auth from '../middleware/auth.js'

import * as blogPostsCtrl from '../controllers/blogPosts.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', blogPostsCtrl.index)
router.get('/:postId', blogPostsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(auth.decodeUserFromToken)
router.post('/newPost', auth.checkAuth, blogPostsCtrl.create)
router.post('/newComment', auth.checkAuth, blogPostsCtrl.createComment)
router.put('/:postId', auth.checkAuth, blogPostsCtrl.update)
router.put('/:postId/:commentId', auth.checkAuth, blogPostsCtrl.updateComment)
router.delete('/:postId', auth.checkAuth, blogPostsCtrl.delete)
router.delete('/:postId/:commentId', auth.checkAuth, blogPostsCtrl.deleteComment)

export { router }