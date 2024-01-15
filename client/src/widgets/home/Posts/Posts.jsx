'use client'

import Post from '@/features/home/Post'
import { useGetPostsQuery } from '@app/store/header/api/home/posts.api'
import PostLoading from '@features/home/PostLoading'
import Link from 'next/link'
import style from './Posts.module.scss'

// const getLastPosts = async () => {
//   const posts = await fetch('http://localhost:4444/post/getAll3', {
//     next: { revalidate: 10 },
//   })

//   return await posts.json()
// }

const _posts = data => {
	console.log(data)
	if (!data) data = [0, 0, 0]
	if (data.length > 3) data = data.slice(-3)

	return data.map(post => {
		if (!post) return <PostLoading />
		return <Post data={post} />
	})
}

const Posts = () => {
	const { data } = useGetPostsQuery()

	return (
		<div className={style.posts}>
			{_posts(data)}

			<p className={style.viewAll}>
				<Link href={`/posts`}>Смореть больше...</Link>
			</p>
		</div>
	)
}

export default Posts
