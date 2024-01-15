'use client'

import { useInput } from '@app/hooks/useInput'
import VK from '@public/assets/icons/vk.svg'
import Link from 'next/link'
import style from './ContactForm.module.scss'

const ContactForm = () => {
	const { value: fullname, bind: fullnameBind } = useInput()
	const { value: email, bind: emailBind } = useInput()
	const { value: theme, bind: themeBind } = useInput()
	const { value: message, bind: messageBind } = useInput()

	return (
		<div className={style.contact}>
			<div className={style.top}>
				<p className={style.title}>Свяжитесь с нами!</p>
				<div className={style.icon}>
					<Link href='/'>
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
					type='text'
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

				<button className={style.submit}>Отправить</button>
			</form>
		</div>
	)
}

export default ContactForm
