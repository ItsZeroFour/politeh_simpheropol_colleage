import express from 'express'
import { LinkHeaderController } from '../controllers/index.js'
const router = express.Router()

router.get('/linksheader', LinkHeaderController.LinkOne)
router.get('/linksheaderall', LinkHeaderController.LinkGetAll)
router.post('/linksheader', LinkHeaderController.LinkCreate)
router.delete('/linksheader', LinkHeaderController.LinkDeleteGlobalLink)
router.patch('/linksheader', LinkHeaderController.LinkUpdate)
export default router
