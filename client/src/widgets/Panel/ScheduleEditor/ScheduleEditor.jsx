import axios from 'axios'
import { useState } from 'react'
import style from './ScheduleEditor.module.scss'

const ScheduleEditor = () => {
	const [scheduleOne, setScheduleOne] = useState('')
	const [scheduleTwo, setScheduleTwo] = useState('')
	const handleImageChange = async (event, one) => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			console.log(formData)
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData
			)
			if (one == 'one') {
				console.log(one)
				setScheduleOne(data.imagelink)
			}
			if (one == 'two') {
				console.log(one)
				setScheduleTwo(data.imagelink)
			}
		} catch (err) {
			console.log(err)
		}
	}
	const onSubmit = (scheduleOne, scheduleTwo) => {
		console.log('pupuip')
		if (scheduleOne !== '' && scheduleTwo !== '') {
			console.log(true)
			function getCurrentDate() {
				const options = {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
				}
				const currentDate = new Date().toLocaleString('ru-RU', options)
				return `Обновлено: ${currentDate}`
			}

			const currentDate = getCurrentDate()

			axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/create`, {
				scheduleOne,
				scheduleTwo,
				date: currentDate,
			})
			setScheduleOne('')
			setScheduleTwo('')
		} else {
			window.alert('Заполните до-конца!')
		}
	}
	return (
		<section className={style.editor}>
			<h1> Загрузка расписаний.</h1>
			<div>
				<span
					style={{
						marginTop: 30,
						width: '150px',
						display: 'block',
						backgroundColor: '#0066FF',
						borderRadius: 10,
						padding: 10,
						color: '#FFF',
						fontSize: 18,
					}}
				>
					Первый корпус
				</span>
				<input
					onChange={event => handleImageChange(event, 'one')}
					type='file'
          accept="image/png, image/jpeg"
					name=''
					id=''
				/>
				<span
					style={{
						marginTop: 30,
						width: '150px',
						display: 'block',
						backgroundColor: '#0066FF',
						borderRadius: 10,
						padding: 10,
						color: '#FFF',
						fontSize: 18,
					}}
				>
					Второй корпус
				</span>
				<input
					onChange={event => handleImageChange(event, 'two')}
					type='file'
          accept="image/png, image/jpeg"
					name=''
					id=''
				/>
				<button
					style={{
						marginTop: 30,
						width: '200px',
						display: 'block',
						backgroundColor: '#0066FF',
						borderRadius: 10,
						padding: 10,
						color: '#FFF',
						fontSize: 18,
					}}
					type='submit'
					onClick={() => onSubmit(scheduleOne, scheduleTwo)}
				>
					ОПУБЛИКОВАТЬ
				</button>
			</div>
			<div>
				{scheduleOne !== '' && (
					<>
						<span style={{ margin: '0 auto', marginTop: 20 }}>
							Первый корпус
						</span>
						<img src={scheduleOne} alt='' />
					</>
				)}

				{scheduleTwo !== '' && (
					<>
						<span style={{ margin: '0 auto', marginTop: 20 }}>
							Второй корпус
						</span>
						<img src={scheduleTwo} alt='' />
					</>
				)}
			</div>
		</section>
	)
}

export default ScheduleEditor
