import { compareSync } from 'bcrypt'
import User from '../models/User'
import { generateAccessToken } from '../utils/jwt'
import { registerValidation } from '../validation/registerValidation'

export class authContoller {
	async registration(req, res) {
		try {
			const errors = registerValidation()
			errors ? res.send(errors) : null
			const {
				firstName,
				lastName,
				fatherName,
				email,
				isAdmin,
				avatarUrl,
				password,
			} = req.body
			const candidate = await User.findOne({ email })
			if (candidate) {
				return res
					.status(400)
					.json({ message: 'Пользователь с такой почтой уже существует' })
			}
			const hashPassword = bcrypt.hashSync(password, 7)
			const user = new User({
				firstName,
				lastName,
				fatherName,
				email,
				isAdmin,
				avatarUrl,
				password: hashPassword,
				avatarUrl,
			})
			await user.save()
			const token = generateAccessToken(user_id, user.email)
			return res.json({
				token,
				message: 'Пользователь успешно зарегистрирован',
			})
		} catch (error) {
			res.status(400).json({ message: 'Ошибка регистрации' })
		}
	}
	async login(req, res) {
		try {
			const { email, password } = req.body
			const user = User.findOne({ email })
			if (!user) {
				res
					.status(400)
					.json({ message: `Пользователь не найден с почтой ${email}` })
			}
			const isPassword = compareSync(password, user.password)
			if (!isPassword) {
				return res.status(400).json('Введен неверный пароль')
			}
			const token = generateAccessToken(user_id, user.email)
			return res.json({ token })
		} catch (error) {
			console.log(error)
			res.status(400).json({ message: 'Ошибка входа' })
		}
	}
}
