'use client'

import Designed from '@features/global/Designed/Designed'
import Links from '@features/header/Links/Links'
import logo from '@public/assets/icons/logo.svg?url'
import VK from '@public/assets/icons/vk.svg'
import Burger from '@shared/buttons/Burger/Burger'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import style from './header.module.scss'

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
		url: '/our-colleage',
		text: 'Наш колледж',
	},
	{
		url: '/nacproject',
		text: 'НацПроекты',
	},
	{
		url: '/anticorruption',
		text: 'Противодействие коррупции',
	},
	{
		url: '/dpo',
		text: 'ДПО',
	},
	{
		url: '/enrollee',
		text: 'Абитуриенту',
	},
	{
		url: '/contacts',
		text: 'Контакты',
	},
	{
		url: '/schedule',
		text: 'Расписание',
	},
]

const Header = () => {
	const [isOpened, setIsOpened] = useState(false)

	const onMenuClick = () => {
		setIsOpened(!isOpened)
	}

	const date = new Date()
	const day = date.getDate()
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
						<li
							onClick={() => setIsOpened(!isOpened)}
							key={index}
							className={style.menuLink}
						>
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
