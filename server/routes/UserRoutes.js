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
//тут проблема короче, я не знаю почему она вызвана
//я в принципе сделал регистарцию и вход, кроме получения юзеров, но это позже реализую
//очень странная ошибка из-за которой крашиться приложение сразу же после запуска
