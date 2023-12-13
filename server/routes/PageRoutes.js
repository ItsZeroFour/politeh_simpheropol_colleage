import express from 'express'
import { ImageLoader } from '../controllers/ImageController.js'
import { PageControllers } from '../controllers/index.js'

const router = express.Router()

router.post(
	'/create',
	// checkAuth,
	// checkUserIsAdmin,
	// pageValidation,
	PageControllers.createPage
)
router.post('/uploadimage', ImageLoader)
router.get('/takecollege', PageControllers.getPageUrl)
router.put('/topublic', PageControllers.updatePageAndToPublic)
router.get('/get', PageControllers.getPage)
router.get('/getourcollege', PageControllers.getOurCollegePages)
router.get('/getpagestitle', PageControllers.getPagePostsTitle)
router.get('/getpagecontent', PageControllers.getPageContent)
// router.get(
// 	'/update',
// 	checkAuth,
// 	checkUserIsAdmin,
// 	updatePageValidation,
// 	PageControllers.updatePage
// )

export default router
