import Image from 'next/image'
import Link from 'next/link'
import style from './Post.module.scss'

const Post = ({ data }) => {
	//console.log({ data: { pageTitle: pageTitle, pageUrl } })
	const { pageTitle, pageUrl, pageImage, pageDate } = data
	console.log(pageTitle)

	console.log(pageUrl)
	console.log(pageImage)
	var str = pageImage
	var srcRegex = /src\s*=\s*['"]?([^'"\s>]+)['"]?/
	var matches = str.match(srcRegex)
	var srcValue = matches[1]
	// let shortText = pageTitle.slice(0, 18) + '...'
	// console.log(shortText)
	let shortText =
		pageTitle.length > 25 ? pageTitle.slice(0, 20) + '...' : pageTitle
	console.log(shortText)
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
