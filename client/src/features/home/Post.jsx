import imagePicture from '@public/assets/icons/adminicons/picture2.png'
import Image from 'next/image'
import Link from 'next/link'
// import { useState } from 'react'
import style from './Post.module.scss'
const Post = ({ data }) => {
	// const [picture, setPicture] = useState()

	// function Picture() {
	// 	return (
	// 		<svg
	// 			xmlns='http://www.w3.org/2000/svg'
	// 			width='512'
	// 			height='512'
	// 			enableBackground='new 0 0 512 512'
	// 			version='1.1'
	// 			viewBox='0 0 512 512'
	// 			xmlSpace='preserve'
	// 		>
	// 			<path d='M368 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z'></path>
	// 			<path d='M452 64H60c-15.6 0-28 12.7-28 28.3v327.4c0 15.6 12.4 28.3 28 28.3h392c15.6 0 28-12.7 28-28.3V92.3c0-15.6-12.4-28.3-28-28.3zM348.9 261.7c-3-3.5-7.6-6.2-12.8-6.2-5.1 0-8.7 2.4-12.8 5.7L304.6 277c-3.9 2.8-7 4.7-11.5 4.7-4.3 0-8.2-1.6-11-4.1-1-.9-2.8-2.6-4.3-4.1L224 215.3c-4-4.6-10-7.5-16.7-7.5-6.7 0-12.9 3.3-16.8 7.8L64 368.2V107.7c1-6.8 6.3-11.7 13.1-11.7h357.7c6.9 0 12.5 5.1 12.9 12l.3 260.4-99.1-106.7z'></path>
	// 		</svg>
	// 	)
	// }

	//console.log({ data: { pageTitle: pageTitle, pageUrl } })
	const { pageTitle, pageUrl, pageImage, pageDate } = data
	console.log(pageImage)
	console.log('hello')
	if (pageImage != '') {
		const str = pageImage
		const srcRegex = /src\s*=\s*['"]?([^'"\s>]+)['"]?/
		const matches = str.match(srcRegex)
		var srcValue = matches[1]
	} else {
		srcValue = imagePicture
	}
	// let shortText = pageTitle.slice(0, 18) + '...'
	// console.log(shortText)
	let shortText =
		pageTitle.length > 25 ? pageTitle.slice(0, 20) + '...' : pageTitle
	// let slicedText = text.slice(0, 60)
	// let slicedTitle = title.slice(0, 15)

	// if (slicedText[slicedText.length - 1] === ' ')
	// 	slicedText = slicedText.slice(0, 59)
	// if (slicedTitle[slicedTitle.length - 1] === ' ')
	// 	slicedTitle = slicedTitle.slice(0, 14)

	// text = text.length >= 60 ? slicedText + '...' : text
	// title = title.length >= 15 ? slicedTitle + '...' : title

	//console.log(_id)

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
