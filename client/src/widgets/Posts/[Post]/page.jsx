import axios from 'axios'
import { Interweave } from 'interweave'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function Post({ params }) {
	const [data, setData] = useState({})
	const someData = useSelector(state => state.counter)

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagecontent`,
					{ params: { postId: params.postId } }
				)

				setData({ ...somedata.data })
				document.body.scrollTop = 0
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
				justifyItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Interweave content={data.pageContent} />
			<div style={{ marginTop: 50 }}>
				<button
					style={{
						width: '300px',
						margin: '0 auto',
						display: 'block',
						backgroundColor: '#0066FF',
						borderRadius: 10,
						padding: 10,
						color: '#FFF',
						fontSize: 24,
					
					}}
					onClick={() => {
						history.back()
					}}
				>
					Вернуться назад
				</button>
			</div>
		</div>
	)
}
