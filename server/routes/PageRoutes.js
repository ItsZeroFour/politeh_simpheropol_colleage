import express from 'express'
import { ImageLoader } from '../controllers/ImageController.js'
import { PageControllers } from '../controllers/index.js'
import checkAuth from '../utils/checkAuth.js'
import checkUserIsAdmin from '../utils/checkUserIsAdmin.js'

const router = express.Router()

router.post(
	'/create',
	checkAuth,
	checkUserIsAdmin,
	// pageValidation,
	PageControllers.createPage
)
router.put(
	'/imagepage',
	checkAuth,
	checkUserIsAdmin,
	PageControllers.updateImagePage
)
router.post('/uploadimage', checkAuth, checkUserIsAdmin, ImageLoader)
router.get('/takecollege', PageControllers.getPageUrl)
router.put(
	'/topublic',
	checkAuth,
	checkUserIsAdmin,
	PageControllers.updatePageAndToPublic
)
router.get('/get', PageControllers.getPage)
router.get('/getourcollege', PageControllers.getOurCollegePages)
router.get('/getpostspages', PageControllers.getOurPostsPages)
router.get('/getpagestitle', PageControllers.getPagePostsTitle)
router.get('/getpagecontent', PageControllers.getPageContent)
//router.get('/getonepage', PageControllers.getOnePage)
router.delete(
	'/delete',
	checkAuth,
	checkUserIsAdmin,
	PageControllers.deletePage
)
router.get('/getonepage', PageControllers.getOnePage)
// router.get(
// 	'/update',
// 	checkAuth,
// 	checkUserIsAdmin,
// 	updatePageValidation,
// 	PageControllers.updatePage
// )

export default router
