import NotFoundPage from '@app/not-found'
import axios from 'axios'
import { Interweave } from 'interweave'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function CollegePage({ params }) {
	const router = useRouter()
	const handleClick = () => {
		router.back()
	}
	console.log(params)
	let [data, setData] = useState('')
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/pageourcollege`,
					params.collegeId ? { params: { pageUrl: params.collegeId } } : ''
				)
				function updateImageSource(text) {
					const link = process.env.NEXT_PUBLIC_SERVER_URL
					return text.replace(/src=\/uploads/g, `src=${link}/uploads`)
				}
				console.log(somedata)
				const result = updateImageSource(somedata.data.pageContent)
				console.log(result)
				setData(result)
			} catch (error) {
				console.log(error)
				console.log('error', error.response.data.message)
				console.log('error', error.response.status)
				setData(error.response.status)
			}
		}
		someAsyncFunc()
	}, [])

	const id = params.collegeId
	// const result = data.filter(
	// 	el => el.pageUrl == id && el.pageType == 'own' && el.pageTypePublish == true
	// )
	// const resultObj = result.map(el => el)
	return (
		<div>
			{data !== 404 && (
				<>
					{' '}
					<Interweave content={data + ''} />
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
				</>
			)}
			{data === 404 && <NotFoundPage />}
		</div>
	)
}
