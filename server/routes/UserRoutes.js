import { Router } from 'express'
import { authContoller } from '../controllers/authController'
import checkAuth from '../utils/checkAuth'
import {
	loginValidation,
	registerValidation,
} from '../validation/registerValidation'
const router = new Router()
const authcontroller = new authContoller()

router.post('/register', registerValidation, authcontroller.registration)
router.post('/login', checkAuth, loginValidation, authcontroller.login)

export default router
