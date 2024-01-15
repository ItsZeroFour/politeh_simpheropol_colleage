import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'

export default function CollegePage({ params }) {
	const [data, setData] = useState([])
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getourcollege`
				)
				setData([...somedata.data])
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	const id = params.collegeId
	const result = data.filter(
		el => el.pageUrl == id && el.pageType == 'own' && el.pageTypePublish == true
	)
	const resultObj = result.map(el => el.pageContent)
	return (
		<div>
			<Interweave
				content={
					resultObj +
					'' +
					`<div style="margin: 40px auto;" ><a style="display: inline;
					background-color: #0066FF;
					border-radius: 10px;
					padding: 10px 10px;
					color: #FFFFFF;
					font-size: 24px;"  href='/our-colleage/'>
					Вернуться назад
				</a></div>`
				}
			/>
			{/* <div
				styles={{
					marginTop: 30,
					color: 'red',
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '50%',
				}}
			>
				<a styles={{ color: '#000' }} href='/our-colleage/'>
					Вернуться назад
				</a>
			</div> */}
		</div>
	)
}
