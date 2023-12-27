// Настройка транспортера для отправки электронной почты
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: 'smtp.yandex.ru',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
})

export const useMailer = async (req, res) => {
	try {
		const { fullname, email, theme, message } = req.body
		console.log('fullname', fullname)
		console.log('email', email)
		console.log('theme', theme)
		console.log('message', message)
		await transporter.sendMail({
			from: process.env.EMAIL, // Адрес отправителя
			to: process.env.EMAIL, // Адрес получателя
			subject: `Заявка от ${fullname}`,
			html: `<p><strong>Почта:</strong> ${email}</p>
        <p><strong>Тема:</strong> ${theme}</p>
        <p><strong>Сообщение:</strong> ${message}</p>`,
		})

		res.send('Сообщение отправлено!')
	} catch (error) {
		console.error(error)
		res.status(500).send(error.message)
	}
}
