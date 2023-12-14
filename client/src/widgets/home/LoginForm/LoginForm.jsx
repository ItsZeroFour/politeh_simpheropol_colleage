import Link from 'next/link'
import style from './LoginForm.module.scss'
import Designed from '@features/global/Designed/Designed'

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
  return (
    <div className={style.loginForm}>
      <div className={style.container}>
        <form>
          <input className={style.input} type='text' placeholder='Логин' />
          <input className={style.input} type='text' placeholder='Пароль' />
          <button className={style.submit}>Войти</button>
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
