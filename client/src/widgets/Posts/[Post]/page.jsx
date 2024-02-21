import EyeImg from '@public/assets/icons/eye.svg'
import axios from 'axios'
import { Interweave } from 'interweave'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './page.module.scss'

export default function Post({ params }) {
	const [data, setData] = useState({})
	const [allData, setAllData] = useState([])
	const someData = useSelector(state => state.counter)
	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagecontent`,
					{ params: { postId: params.postId } }
				)
				console.log('somedata.data', somedata.data)

				let result = somedata.data // Создаем новую переменную result и присваиваем ей исходный текст

				function processText(text) {
					console.log(text)
					const images = text.match(/\b\d+\.(jpg|png)\b/g)
					let result = text
					const somelink = 'http://localhost:4444'
					if (images) {
						images.map(image => {
							result = result.replace(image, `<img src=${somelink}/${image}/>`)
						})
					}
					if (!images) {
						return text
					}
					return result
				}
				const result1 = processText(somedata.data.pageContent)
				console.log(result1)
				setData({ pageContent: result1 })
				document.body.scrollTop = 0
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const mainData = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/get`,
					{ params: { url: params.postId } }
				)

				setAllData(mainData.data)
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	return (
		<main
			className={style.post__main}
			style={{
				display: 'flex',
				justifyItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Interweave content={data.pageContent} />

			<div className={style.post__views}>
				<span>
					<EyeImg />
					{allData.viewsCount}
				</span>
			</div>

			<div style={{ marginTop: 50 }}>
				<button
					style={{
						width: '100%',
						margin: '0 auto',
						display: 'block',
						backgroundColor: '#131313',
						borderRadius: 10,
						padding: 20,
						color: '#FFF',
						fontSize: 24,
					}}
					onClick={handleClick}
				>
					Вернуться назад
				</button>
			</div>
		</main>
	)
}
