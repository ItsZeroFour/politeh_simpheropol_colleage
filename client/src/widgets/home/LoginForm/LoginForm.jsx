import { useInput } from '@app/hooks/useInput'
import Designed from '@features/global/Designed/Designed'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import style from './LoginForm.module.scss'
const links = [
	{
		text: 'Структура и органы управления образовательной организацией',
		href: '/',
	},
	{ text: 'Документы', href: '/' },
	{ text: 'Образование', href: '/' },
	{ text: 'Образовательные стандарты и требования', href: '/' },
	{
		text: 'Руководство. Педагогический (научно-педагогический) состав',
		href: '/',
	},
	{
		text: 'Материально-техническое обеспечение и оснащённость образовательного процесса',
		href: '/',
	},
	{ text: 'Стипендии и меры поддержки обучающихся', href: '/' },
	{ text: 'Платные образовательные услуги', href: '/' },
	{ text: 'Финансово-хозяйственная деятельность', href: '/' },
	{ text: 'Вакантные места для приёма (перевода) обучающихся', href: '/' },
	{ text: 'Доступная среда', href: '/' },
	{ text: 'Международное сотрудничество', href: '/' },
	{ text: 'Организация питания в образовательной организации', href: '/' },
]

const LoginForm = () => {
	const router = useRouter()
	const submitForm = async e => {
		e.preventDefault()
		if (!login || !password) {
			alert('Пожалуйста, заполните все поля')
			return
		}
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
				{
					email: login,
					password,
				}
			)
			if (res.status == 200) {
				console.log('200', res.data.token)
				Cookies.set('token', res?.data?.token)
				console.log(Cookies.get('token'))
			}
			alert(' успешно вошли!')
			resetLogin()
			resetPassword()
			router.push('/panel')
		} catch (error) {
			alert('Произошла ошибка', error)
			console.log(error)
		}
		// Clear input values
	}

	const { value: login, bind: loginBind, reset: resetLogin } = useInput()
	const {
		value: password,
		bind: passwordBind,
		reset: resetPassword,
	} = useInput()

	return (
		<div className={style.loginForm}>
			<div className={style.container}>
				<form>
					<input
						className={style.input}
						{...loginBind}
						type='text'
						placeholder='Логин'
					/>
					<input
						{...passwordBind}
						className={style.input}
						type='password' // Changed to type='password' for security
						placeholder='Пароль'
					/>
					<button onClick={e => submitForm(e)} className={style.submit}>
						Войти
					</button>
				</form>

				<div>
					<ul className={style.links}>
						{links.map((link, index) => (
							<li key={index} className={style.link}>
								<Link href={link.href}>{link.text}</Link>
							</li>
						))}
					</ul>
				</div>
				<Designed />
			</div>
		</div>
	)
}

export default LoginForm
