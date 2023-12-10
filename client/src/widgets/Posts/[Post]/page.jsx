import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function Post({ params }) {
	const [data, setData] = useState({})
	const someData = useSelector(state => state.counter.present.dataOurCollege)
	console.log(someData)
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					'http://localhost:5000/page/getpagecontent',
					{ params: { postId: params.postId } }
				)
				console.log(somedata)
				setData({ ...somedata.data })
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Interweave
				content={`<div
			 >${data.pageContent}</div>`}
			/>
		</div>
	)
}
