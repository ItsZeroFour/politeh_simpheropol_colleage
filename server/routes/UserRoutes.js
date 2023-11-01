import express from 'express'
import { AuthControllers } from '../controllers/index.js'
import {
	loginValidation,
	registerValidation,
} from '../validation/registerValidation.js'
const router = express.Router()

router.post('/register', registerValidation, AuthControllers.createUser)
router.post('/login', loginValidation, AuthControllers.loginUser)
export default router
