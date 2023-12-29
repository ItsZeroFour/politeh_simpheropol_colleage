'use client'
import axios from 'axios'
import Image from 'next/image.js'
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
	let [increment, setIncrement] = useState(3)
	const [data, setData] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagestitle`,
					{ params: { typePage: 'post', increment } }
				)
				setData([...somedata.data])
				dispatch(setDataOurCollege([...somedata.data]))
				console.log('loading', somedata)
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [increment])

	return (
		<div>
			<div className={styles.wrapperPosts}>
				{dataOurCollege2.map(el => {
					console.log(el.pageUrl)
					var str = el.pageImage
					var srcRegex = /src\s*=\s*['"]?([^'"\s>]+)['"]?/
					var matches = str.match(srcRegex)
					var srcValue = matches[1]
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
										<Image
											src={srcValue}
											className={styles.image}
											fill={true}
											//style={{ objectFit: 'contain' }}
											alt='Picture of the author'
										/>
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
			<button
				onClick={() => {
					setIncrement((increment += 3))
					console.log(increment)
				}}
				className={styles.btn}
			>
				Загрузить еще
			</button>
		</div>
	)
}

export default Posts
