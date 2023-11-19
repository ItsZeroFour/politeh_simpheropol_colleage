import Post from '@/features/home/Post'
import style from './Posts.module.scss'
import Link from 'next/link'

const getLastPosts = async () => {
  const posts = await fetch('http://localhost:4444/post/getAll', {
    next: { revalidate: 10 },
  })

  return await posts.json()
}

const _posts = data => {

  return data.map((post) => {
    return <Post title={post.title} imageUrl={post.image} text={post.text} />
  })
}

const Posts = async () => {
  const postsData = await getLastPosts()

  return <div className={style.posts}>
    {_posts(postsData)}

    <p className={style.viewAll}>
      <Link href={`/`}>
        Смореть больше...
      </Link>
    </p>
  </div>
}

export default Posts
