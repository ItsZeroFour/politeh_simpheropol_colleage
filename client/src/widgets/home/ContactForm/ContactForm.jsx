'use client'

import { useInput } from '@app/hooks/useInput'
import VK from '@public/assets/icons/vk.svg'
import axios from 'axios'
import Link from 'next/link'
import style from './ContactForm.module.scss'

const ContactForm = () => {
	// const submitForm = async e => {
	// 	e.preventDefault()
	// 	console.log('fullname', fullname)
	// 	console.log('email', email)
	// 	console.log('theme', theme)
	// 	console.log('message', message)
	// 	try {
	// 		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/mailer/send-email/`, {
	// 			fullname,
	// 			email,
	// 			theme,
	// 			message,
	// 		})
	// 		alert('Письмо успешно отправлено!')
	// 	} catch (error) {
	// 		alert('Произошла ошибка', error)
	// 	}
	// }
	const submitForm = async e => {
		e.preventDefault()
		if (!fullname || !email || !theme || !message) {
			alert('Пожалуйста, заполните все поля')
			return
		}
		try {
			axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/mailer/send-email/`, {
				fullname,
				email,
				theme,
				message,
			})
			alert('Письмо успешно отправлено!')
			resetFullname()
			resetEmailBind()
			resetThemeBind()
			resetMessageBind()
		} catch (error) {
			alert('Произошла ошибка', error)
		}
		// Clear input values
	}

	const {
		value: fullname,
		bind: fullnameBind,
		reset: resetFullname,
	} = useInput()
	const { value: email, bind: emailBind, reset: resetEmailBind } = useInput()
	const { value: theme, bind: themeBind, reset: resetThemeBind } = useInput()
	const {
		value: message,
		bind: messageBind,
		reset: resetMessageBind,
	} = useInput()

	return (
		<div className={style.contact}>
			<div className={style.top}>
				<p className={style.title}>Свяжитесь с нами!</p>
				<div className={style.icon}>
					<Link target='_blank' href='https://vk.com/simfpolyteh'>
						<VK />
					</Link>
				</div>
			</div>

			<form className={style.form}>
				<input
					{...fullnameBind}
					type='text'
					className={style.input}
					placeholder='Ваше ФИО'
				/>
				<input
					{...emailBind}
					type='email'
					className={style.input}
					placeholder='Ваш E-Mail'
				/>
				<input
					{...themeBind}
					type='text'
					className={style.input}
					placeholder='Тема'
				/>

				<textarea
					{...messageBind}
					className={style.input + ' ' + style.textarea}
					placeholder='Ваше сообщение...'
				/>

				<button onClick={e => submitForm(e)} className={style.submit}>
					Отправить
				</button>
			</form>
		</div>
	)
}

export default ContactForm
