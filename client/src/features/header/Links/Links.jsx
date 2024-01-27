import { useActions } from '@app/hooks/useActions'
import { getHeader } from '@app/store/header/header.slice'
import LinkDropdown from '@features/header/LinkDropdown/LinkDropdown'
import Triangle from '@public/assets/icons/triangle.svg'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'

//               { title: "Наш колледж", link: "/our-colleage" },
//               { title: "Абитуриенту", link: "/enrollee" },
//               { title: "Контакты", link: "/contacts" },
//               { title: "Общежитие", link: "/dormitory" },
//               { title: "Студенту", link: "/student" },
//               { title: "НацПроекты", link: "/nacproject" },
//               { title: "Олимпиады", link: "/olimpiads" },
//               { title: "ДПО", link: "/dpo" },

const linksList = [
	{ url: '/', text: 'Главная' },
	{
		url: '/',
		text: 'Наш колледж',
		isCategory: true,
		links: [
			{ url: '/colleage-history', text: 'История колледжа' },
			{ url: '/museam', text: 'Музей' },
			{
				url: '/noko',
				text: 'Независимая оценка качества осуществления образовательной деятельности (НОКО)',
			},
			{ url: '/open-doors-days', text: 'Дни открытых дверей (онлайн)' },
			{ url: '/dpo', text: 'Дополнительное профессиональное образование' },
			{ url: '/anticorruption', text: 'Противодействие коррупции' },
			{ url: '/covid-19', text: 'Коронавирусная инфекция COVID-19' },
			{ url: '/buyed', text: 'Закупочная деятельность' },
			{ url: '/metodical-classroom', text: 'Методический кабинет' },
			{ url: '/road-security', text: 'Дорожная безопасность' },
			{ url: '/ppo', text: 'Первичная профсоюзная организация' },
		],
	},
	{ url: '/enrollee', text: 'Абитуриенту' },
	{ url: '/contacts', text: 'Контакты' },
	{
		url: '/',
		text: 'Общежитие',
		isCategory: true,
		links: [
			{
				url: '/dormitory-rules',
				text: 'Правила внутреннего распорядка в студенческом общежитии',
			},
			{ url: '/dormitory-accommodination', text: 'Поселение в общежитие' },
			{ url: '/dormitory-live', text: 'Жизнь общежития' },
		],
	},
	{
		url: '/',
		text: 'Студенту',
		isCategory: true,
		links: [
			{
				url: '/position',
				text: 'Положение о Студенческом Совете в ГБПОУ РК «Симферопольский политехнический колледж»',
			},
			{ url: '/gifted', text: 'Работа с одаренными студентами' },
			{ url: '/commission', text: 'Переводная комиссия' },
			{ url: '/schedule', text: 'Расписание' },
			{ url: '/important-things', text: 'Разговор о важном' },
			{ url: '/museum', text: 'Музей нашего колледжа' },
			{ url: '/holidays', text: 'Активные каникулы' },
			{ url: '/special-study', text: 'Обучение с применением ЭО и ДОТ' },
			{
				url: '/instructions',
				text: 'Методические указания по подготовке к государственной итоговой аттестации',
			},
			{ url: '/professionals', text: 'Профессионалы' },
			{ url: '/exam', text: 'Демонстрационный экзамен' },
			{ url: '/project', text: 'Проектная деятельность' },
			{
				url: '/dpo',
				text: 'Дополнительное профессиональное образование',
			},
			{ url: '/employment', text: 'О трудоустройстве выпускников' },
			{
				url: '/career',
				text: `Дни карьеры 2022-${new Date().getFullYear()} уч.год`,
			},
			{
				url: '/safety',
				text: 'Об усилении мер по обеспечению безопасности обучающихся в период летних каникул',
			},
			{
				url: '/workshop',
				text: 'Кружки, факультативы, курсы, спортивные секции',
			},
			{ url: '/sport', text: 'Спортивная жизнь' },
			{ url: '/green-krimea', text: 'Зелёный Крым' },
			{
				url: '/products',
				text: `Ассортимент пищевых продуктов для организации дополнительного питания обучающихся в колледжах 2020-${new Date().getFullYear()}`,
			},
			{
				url: '/social-psihologic',
				text: 'О социально-психологическом сопровождении',
			},
			{
				url: '/recomindations',
				text: 'Памятки, рекомендации, разъяснения прокуратуры',
			},
			{ url: '/cyber', text: 'Киберволонтёры' },
		],
	},
]

const Links = () => {
	const [linksServer, setLinksServer] = useState([])
	const [closingLinks, setClosingLinks] = useState([])
	useEffect(() => {
		const fetchingData = async () => {
			try {
				const data = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`
				)
				setLinksServer([...data.data])
				console.log('FETCHING')
			} catch (error) {
				alert.error('error' + error)
			}
		}
		fetchingData()
	}, [])

	const { addHovered, removeHovered, addClosing } = useActions()
	const dispatch = useDispatch()

	const hovered = useSelector(getHeader).hovered
	const closing = useSelector(getHeader).closing
	console.log(closing)
	const handleOnMouseEnter = e => {
		dispatch(addHovered(e.currentTarget.id))
	}

	const handleOnMouseLeave = e => {
		console.log('EEEEE')
		const id = e.currentTarget.id
		dispatch(removeHovered(id))
		dispatch(addClosing(id))
		setClosingLinks(prev => [...prev, id])
	}

	return linksServer.map((link, index) => {
		const id = style.link + index
		link.id = id
		return (
			<li
				key={index}
				className={style.link}
				id={id}
				onMouseEnter={link.nestedObjects.length !== 0 && handleOnMouseEnter}
				onMouseLeave={link.nestedObjects.length !== 0 && handleOnMouseLeave}
			>
				<Link href={link.url}>{link.text}</Link>
				{link.nestedObjects.length !== 0 && (
					<Triangle className={style.dropdownIcon} />
				)}
				{link.nestedObjects.length !== 0 && hovered.includes(id) && (
					<LinkDropdown data={link} />
				)}
				{link.nestedObjects.length !== 0 && closing.includes(id) && (
					<LinkDropdown isClosing={true} data={link} />
				)}
			</li>
		)
	})

	return memoizedLinks
}

export default Links
