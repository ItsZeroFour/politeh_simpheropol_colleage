import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'

export default function CollegePage({ params }) {
	const [data, setData] = useState([])
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					'http://localhost:5000/page/getourcollege'
				)
				setData([...somedata.data])
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	const id = params.collegeId
	console.log(id)
	const result = data.filter(
		el => el.pageUrl == id && el.pageType == 'own' && el.pageTypePublish == true
	)
	console.log(data)
	console.log(result)
	const resultObj = result.map(el => el.pageContent)
	return (
		<div style={{ display: flex, justifyContent: 'center', margin: 10 }}>
			<Interweave content={resultObj + ''} />
		</div>
	)
}
