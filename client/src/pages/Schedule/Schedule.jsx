'use client'
import { fetchSchedule } from '@app/store/schedule/scheduleSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Schedule.module.scss'

const Schedule = () => {
	const dispatch = useDispatch()
	const [isScheduleLoading, setIsScheduleLoading] = useState(true)
	const { items, status } = useSelector(state => state.schedule)
	const isPostsLoading = status === 'loaded'
	console.log(isPostsLoading)
	useEffect(() => {
		dispatch(fetchSchedule())
	}, [])
	console.log(items)
	const IsRender = ({ isPostsLoading }) => {
		console.log(isPostsLoading)
		if (isPostsLoading) {
			return <div>данные загрузились</div>
		} else {
			return <div>загрузка данных</div>
		}
	}
	return (
		<section className={style.schedule}>
			<IsRender isPostsLoading={isPostsLoading} />
		</section>
	)
}

export default Schedule
{
	/* <DaySelector />
				<Favourited data={data} />
				<Corpus title='Первый корпус' data={data.first} />
				<Corpus title='Второй корпус' data={data.second} />
				 */
}
//	dispatch(loadState())
// const fetchingData = async () => {
// 	try {
// 		const data = await axios.get(
// 			`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/scheduleone`
// 		)

// 		setDataSchedule({ ...data })
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// fetchingData()
// const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

// const scheduleOfGroup = [
// 	{ name: 'основы жизни', lecturer: 'Власенко', cabinet: 225 },
// 	{ name: 'инфор. технологии', lecturer: 'Акимова', cabinet: 307 },
// 	{ name: 'БЖД', lecturer: 'Маланьин', cabinet: 216 },
// 	{},
// 	{ name: 'технические штуки', lecturer: 'Клементьев', cabinet: 109 },
// 	{ name: 'история', lecturer: 'Пшеничная', cabinet: 112 },
// ]

// const scheduleLine = [
// 	['12ИСП-В', scheduleOfGroup],
// 	['22ГГВП', scheduleOfGroup],
// 	['12ИСП-П', scheduleOfGroup],
// 	['23ИСП-В', scheduleOfGroup],
// 	['12ИМД', scheduleOfGroup],
// 	['12ИСП-В', scheduleOfGroup],
// ]

// const scheduleData = {
// 	monday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	tuesday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	wednesday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	thursday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	friday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// }

// // TODO: Добавить адаптацию с +- 1250 пикселей

// const data = {
// 	first: scheduleData,
// 	second: scheduleData,
// }
