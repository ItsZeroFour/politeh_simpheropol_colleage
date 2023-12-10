'use client'
import axios from 'axios'
import { Interweave } from 'interweave'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDataOurCollege } from '../../app/store/pagesAdmin/UndoRendoSlice.js'
import styles from './style.module.scss'
const Posts = () => {
	const dataOurCollege2 = useSelector(
		state => state.counter.present.dataOurCollege
	)
	const state = useSelector(state => state.counter)
	console.log(state)
	console.log(dataOurCollege2)
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					'http://localhost:5000/page/getpagestitle',
					{ params: { typePage: 'post' } }
				)
				setData([...somedata.data])
				dispatch(setDataOurCollege([...somedata.data]))
				console.log('loading', somedata)
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
				if (el.pageTypePublish && el.pageType == 'post') {
					return (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								margin: 10,
								textAlign: 'center',
							}}
							key={el._id}
						>
							<div>
								<div className={styles.postImgTitleWrapper}>
									<Interweave content={el.pageImage} />
									<Link href={`/posts/${el.pageUrl}`}>
										{<p className={styles.post_title}>{el.pageTitle}</p>}
									</Link>
									<div className={styles.post_date}>{el.pageDate}</div>
								</div>
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}

export default Posts
