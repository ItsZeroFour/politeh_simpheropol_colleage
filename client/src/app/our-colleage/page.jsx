'use client'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

//getourcollge
const page = () => {
	const [data, setData] = useState([])
	const ROUTE_POST_ID = 'ourcolleages/[our-collegeId]'
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
	console.log(data)
	return (
		<div>
			{data.map(el => {
				console.log(el.pageUrl)
				return (
					<div key={el._id}>
						{/* <Interweave content={el.pageImage} /> */}
						{/* {el.pageImage} */}
						<Link href={`ourcolleages/${el.pageUrl}`}>{el.pageTitle}</Link>
						<div>{el.pageDate}</div>
					</div>
				)
			})}
		</div>
	)
}

export default page
