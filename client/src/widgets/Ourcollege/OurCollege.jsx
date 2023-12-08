'use client'
import axios from 'axios'
import { Interweave } from 'interweave'
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
							style={{ display: flex, justifyContent: 'center', margin: 10 }}
						>
							<Interweave content={el.pageImage} />
							{/* {el.pageImage} */}
							<Link href={`/our-colleage/${el.pageUrl}`}>{el.pageTitle}</Link>
							<div>{el.pageDate}</div>
						</div>
					)
				}
			})}
		</div>
	)
}

export default OurCollege
