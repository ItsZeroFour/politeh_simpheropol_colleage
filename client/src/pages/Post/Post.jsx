'use client'

/* itsZeroFourX@gmail.com code side */

import PostComponent from '@/widgets/Post/Post'
import { useEffect, useState } from 'react'

const Post = ({ postId }) => {
	const [post, setPost] = useState(null)

	useEffect(() => {
		const getData = async () => {
			const query = await fetch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/post/getOne/${postId}`
			)
			const response = await query.json()
			setPost(response)
		}

		getData()
	}, [])

	return <section>{post && <PostComponent post={post} />}</section>
}

export default Post
