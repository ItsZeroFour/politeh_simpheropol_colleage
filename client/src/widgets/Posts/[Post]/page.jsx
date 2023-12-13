import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function Post({ params }) {
	const [data, setData] = useState({})
	const someData = useSelector(state => state.counter)
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
			 >${data.pageContent}<div style="margin: 40px auto;" ><a style="display: inline;
			 background-color: #0066FF;
			 border-radius: 10px;
			 padding: 10px 10px;
			 color: #FFFFFF;
			 font-size: 24px;"  href='/our-colleage/'>
			 Вернуться назад
		 </a></div></div>`}
			/>
		</div>
	)
}
