import express from 'express'
import { LinkHeaderController } from '../controllers/index.js'
import checkAuth from '../utils/checkAuth.js'
import checkUserIsAdmin from '../utils/checkUserIsAdmin.js'
const router = express.Router()

router.get('/linksheader', LinkHeaderController.LinkOne)
router.get('/linksheaderall', LinkHeaderController.LinkGetAll)
router.post('/linksheader', checkAuth, checkUserIsAdmin, LinkHeaderController.LinkCreate)
router.delete('/linksheader', LinkHeaderController.LinkDeleteGlobalLink)
router.patch('/linksheader', LinkHeaderController.LinkUpdate)
export default router
