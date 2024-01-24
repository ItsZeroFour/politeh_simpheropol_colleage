'use client'
import imagePicture from '@public/assets/icons/adminicons/picture2.png'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PostsLoader from './[Post]/PostsLoader'
import styles from './style.module.scss'
const Posts = () => {
	// const dataOurCollege2 = useSelector(
	// 	state => state.counter.present.dataOurCollege
	// )
	//const state = useSelector(state => state.counter)
	let [increment, setIncrement] = useState(0)
	const [data, setData] = useState([])
	const [picture, setPicture] = useState('')
	const dispatch = useDispatch()
	const fakeArr = [[undefined], [undefined], [undefined]]
	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				document.body.scrollTop = 0
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagestitle`,
					{ params: { typePage: 'post', increment } }
				)
				setData([...data, ...somedata.data])

				//	console.log(data)
				//	dispatch(setDataOurCollege([...data]))
				//	console.log('loading', somedata)
			} catch (error) {
				console.log(error)
			}
			//	console.log('state', dataOurCollege2)
		}
		someAsyncFunc()
	}, [increment])

	return (
		<div>
			<div className={styles.wrapperPosts}>
				{data.length == 0 && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							textAlign: 'center',
							flexWrap: 'wrap',
						}}
					>
						{fakeArr.map(obj => {
							return <PostsLoader key={obj.id} {...obj} />
						})}
					</div>
				)}
				{data !== null &&
					data.map(el => {
						console.log(el.pageUrl)

						if (el.pageImage != '') {
							var str = el.pageImage
							var srcRegex = /src\s*=\s*['"]?([^'"\s>]+)['"]?/
							var matches = str.match(srcRegex)
							var srcValue = matches[1]
						} else {
							srcValue = imagePicture
						}

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
												width={400}
												height={300}
												style={{ objectFit: 'cover', width: 400, height: 300 }}
												//className={styles.image}

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
