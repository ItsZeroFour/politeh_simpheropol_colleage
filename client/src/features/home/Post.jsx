import imagePicture from '@public/assets/icons/adminicons/picture2.png'
import Image from 'next/image'
import Link from 'next/link'
// import { useState } from 'react'
import style from './Post.module.scss'
const Post = ({ data }) => {
	const { pageTitle, pageUrl, pageImage, pageDate } = data

	if (pageImage != '') {
		const str = pageImage
		const srcRegex = /src\s*=\s*['"]?([^'"\s>]+)['"]?/
		const matches = str.match(srcRegex)
		var srcValue = matches[1]
	} else {
		srcValue = imagePicture
	}

	let shortText =
		pageTitle.length > 25 ? pageTitle.slice(0, 20) + '...' : pageTitle

	return (
		<Link href={`/posts/${pageUrl}`} className={style.post}>
			<Image
				className={style.image}
				fill={true}
				src={srcValue}
				alt='post photo'
			/>
			{/* <Interweave content={pageImage} /> */}
			<div className={style.info}>
				<h2 className={style.title}>{shortText}</h2>
				<span className={style.description}>{pageDate}</span>
			</div>
		</Link>
	)
}

export default Post
