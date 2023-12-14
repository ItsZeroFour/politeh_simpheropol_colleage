'use client'

import Image from 'next/image'
import Link from 'next/link'
import style from './header.module.scss'
import logo from '@public/assets/icons/logo.svg?url'
import sunIcon from '../../../public/assets/icons/sun.svg?url'
import Links from '@features/header/Links/Links'
import Burger from '@shared/buttons/Burger/Burger'
import { useEffect, useState } from 'react'
import VK from '@public/assets/icons/VK.svg'
import Designed from '@features/global/Designed/Designed'

const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

const menuLinks = [
  {
    url: '/',
    text: 'Сведения об образовательной организациии',
  },
  {
    url: '/',
    text: 'НацПроекты',
  },
  {
    url: '/',
    text: 'Олимпиады',
  },
  {
    url: '/',
    text: 'ДПО',
  },
  {
    url: '/',
    text: 'Условия обучения инвалидов и лиц с ограниченными возможностями здоровья',
  },
]

const Header = () => {
  const [isOpened, setIsOpened] = useState(false)

  const onMenuClick = () => {
    setIsOpened(!isOpened)
  }

  const date = new Date()
  const day = date.getDay()
  const month = months[date.getMonth()]
  const week = daysOfWeek[date.getDay()]
  const year = date.getFullYear()
  const today = `Сегодня: ${week}, ${day} ${month} ${year}`

  return (
    <>
      <div className={style.headerWrapper}></div>

      <header
        className={`${style.header} ${isOpened && style.headerMenuActive}`}
      >
        <div className={style.container}>
          <div>
            <Link href='/'>
              <Image src={logo} />
            </Link>
          </div>

          <nav className={style.navigation}>
            <Links />
          </nav>

          <div className={style.headerButtons}>
            <button>Для слабовидящих</button>
            {/* <button>
              <p>Белая тема</p>
              <Image src={sunIcon} alt='white theme' width={26} height={26} />
            </button> */}
          </div>

          <Burger onClick={onMenuClick} />
        </div>
      </header>

      <div className={`${style.menu} ${isOpened && style.menuActive}`}>
        <nav className={style.menuLinks}>
          {menuLinks.map((menuLink, index) => (
            <li key={index} className={style.menuLink}>
              <Link href={menuLink.url}>{menuLink.text}</Link>
            </li>
          ))}
        </nav>

        <div className={style.menuFooter}>
          <p className={style.menuIcon}>
            <Link href='https://vk.com/simfpolyteh'>
              <VK />
            </Link>
          </p>

          <p className={style.today}>{today}</p>

          <div className={style.developers}>
            <Designed />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
