'use client'

import { selectCount, setDataOurCollege } from '@redux/features/GenSlice.js'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//getourcollge
const OurCollege = () => {
	const { dataOurCollege } = useSelector(selectCount)
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
	console.log(data)
	console.log(dataOurCollege)
	return (
		<div>
			{data.map(el => {
				console.log(el.pageUrl)
				return (
					<div key={el._id} style={{ margin: 10 }}>
						{/* <Interweave content={el.pageImage} /> */}
						{/* {el.pageImage} */}
						<Link href={`/our-colleage/${el.pageUrl}`}>{el.pageTitle}</Link>
						<div>{el.pageDate}</div>
					</div>
				)
			})}
		</div>
	)
}

export default OurCollege
