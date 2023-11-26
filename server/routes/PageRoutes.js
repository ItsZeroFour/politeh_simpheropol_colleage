import express from 'express'
import { PageControllers } from '../controllers/index.js'
import checkAuth from '../utils/checkAuth.js'
import checkUserIsAdmin from '../utils/checkUserIsAdmin.js'
import { updatePageValidation } from '../validation/pageValidation.js'

const router = express.Router()

router.post(
	'/create',
	// checkAuth,
	// checkUserIsAdmin,
	// pageValidation,
	PageControllers.createPage
)
router.get('/get', PageControllers.getPage)
router.get(
	'/update',
	checkAuth,
	checkUserIsAdmin,
	updatePageValidation,
	PageControllers.updatePage
)

export default router
