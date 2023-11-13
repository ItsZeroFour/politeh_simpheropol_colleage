import Post from '@/features/home/Post'
import style from './Posts.module.scss'

const getLastPosts = async () => {
  const posts = await fetch('http://localhost:4444/post/getAll', {
    next: { revalidate: 10 },
  })

  return await posts.json()
}

const _posts = data => {
  console.log(data)

  return data.map((post) => {
    console.log(post)
    return <Post title={post.title} imageUrl={post.image} text={post.text} />
  })
}

const Posts = async () => {
  const postsData = await getLastPosts()

  console.log(postsData)
  return <div className={style.posts}>
    {_posts(postsData)}
  </div>
}

export default Posts
