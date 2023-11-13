import Link from 'next/link'

import style from './LoginForm.module.scss'
import global from '@/scss/global.module.scss'

import VK from '@public/assets/icons/vk.svg'
import WWW from '@public/assets/icons/www.svg'
import Telegram from '@public/assets/icons/telegram.svg'


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

        <div className={style.designed}>
          <p className={style.authors}>Разработали:</p>
          <div className={style.developer}>
            <p className={style.developerName}>Андреев Д. В.</p>
            <div className={style.networks}>
              <Link href=''>
                <VK className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <WWW className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <Telegram className={`${global.icon} cursor-pointer`} />
              </Link>
            </div>
          </div>

          <div className={style.developer}>
            <p className={style.developerName}>Власенко Д. С.</p>
            <div className={style.networks}>
              <Link href=''>
                <VK className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <WWW className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <Telegram className={`${global.icon} cursor-pointer`} />
              </Link>
            </div>
          </div>

          <div className={style.developer}>
            <p className={style.developerName}>Сейдалиев А. Э.</p>
            <div className={style.networks}>
              <Link href=''>
                <VK className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <WWW className={`${global.icon} cursor-pointer`} />
              </Link>
              <Link href=''>
                <Telegram className={`${global.icon} cursor-pointer`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
