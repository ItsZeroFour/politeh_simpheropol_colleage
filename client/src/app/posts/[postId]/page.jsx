'use client'
import Post from '@/pages/Post/Post'

const page = ({ params }) => {
	return <Post postId={params.postId} />
}

export default page
