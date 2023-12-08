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
router.get('/takecollege', PageControllers.getPageUrl)
router.put('/topublic', PageControllers.updatePageAndToPublic)
router.get('/get', PageControllers.getPage)
router.get(
	'/getourcollege',
	(req, res) => {
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept'
		)
		res.end()
	},
	PageControllers.getOurCollegePages
)

// router.get(
// 	'/update',
// 	checkAuth,
// 	checkUserIsAdmin,
// 	updatePageValidation,
// 	PageControllers.updatePage
// )

export default router
