'use client'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDataOurCollege } from '../../app/store/pagesAdmin/UndoRendoSlice.js'
const OurCollege = () => {
	const dataOurCollege2 = useSelector(
		state => state.counter.present.dataOurCollege
	)
	console.log(dataOurCollege2)
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					'http://localhost:5000/page/getourcollege'
				)
				setData([...somedata.data])
				dispatch(setDataOurCollege([...somedata.data]))
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	return (
		<div>
			{dataOurCollege2.map(el => {
				console.log(el.pageUrl)
				if (el.pageTypePublish && el.pageType == 'own') {
					return (
						<div
							key={el._id}
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							{/* <Interweave content={el.pageImage} /> */}
							{/* {el.pageImage} */}
							<div style={{ textAlign: 'center', margin: 10 }}>
								<Link href={`/our-colleage/${el.pageUrl}`}>
									<span
										style={{
											fontSize: '24px',
											display: 'hover',
											fontWeight: 700,
											lineHeight: 2,
										}}
									>
										{el.pageTitle}
									</span>
								</Link>
								<div>{el.pageDate}</div>
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}

export default OurCollege
