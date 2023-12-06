import express from 'express'
import { PageControllers } from '../controllers/index.js'

const router = express.Router()

router.post(
	'/create',
	// checkAuth,
	// checkUserIsAdmin,
	// pageValidation,
	PageControllers.createPage
)
router.put('/topublic', PageControllers.updatePageAndToPublic)
router.get('/get', PageControllers.getPage)
router.get('/getourcollege', PageControllers.getOurCollegePages)
// router.get(
// 	'/update',
// 	checkAuth,
// 	checkUserIsAdmin,
// 	updatePageValidation,
// 	PageControllers.updatePage
// )

export default router
