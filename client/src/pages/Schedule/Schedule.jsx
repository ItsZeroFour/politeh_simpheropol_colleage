'use client'

import { useActions } from '@app/hooks/useActions'
import DaySelector from '@entities/Schedule/DaySelector/DaySelector'
import Favourited from '@features/Schedule/Favourited/Favourited'
import Corpus from '@widgets/Schedule/Corpus/Corpus'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import style from './Schedule.module.scss'

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

const scheduleOfGroup = [
	{ name: 'основы жизни', lecturer: 'Власенко', cabinet: 225 },
	{ name: 'инфор. технологии', lecturer: 'Акимова', cabinet: 307 },
	{ name: 'БЖД', lecturer: 'Маланьин', cabinet: 216 },
	{},
	{ name: 'технические штуки', lecturer: 'Клементьев', cabinet: 109 },
	{ name: 'история', lecturer: 'Пшеничная', cabinet: 112 },
]

const scheduleLine = [
	['12ИСП-В', scheduleOfGroup],
	['22ГГВП', scheduleOfGroup],
	['12ИСП-П', scheduleOfGroup],
	['23ИСП-В', scheduleOfGroup],
	['12ИМД', scheduleOfGroup],
	['12ИСП-В', scheduleOfGroup],
]

const scheduleData = {
	monday: [
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
	],
	tuesday: [
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
	],
	wednesday: [
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
	],
	thursday: [
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
	],
	friday: [
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
		scheduleLine,
	],
}

// TODO: Добавить адаптацию с +- 1250 пикселей

const data = {
	first: scheduleData,
	second: scheduleData,
}

const Schedule = () => {
	const dispatch = useDispatch()
	const { loadState } = useActions()

	useEffect(() => {
		dispatch(loadState())
	}, [])

	return (
		<section className={style.schedule}>
				<DaySelector />
				<Favourited data={data} />
				<Corpus title='Первый корпус' data={data.first} />
				<Corpus title='Второй корпус' data={data.second} />
		</section>
	)
}

export default Schedule
