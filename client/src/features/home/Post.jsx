import Image from 'next/image'
import style from './Post.module.scss'

const Post = ({ title, imageUrl, text }) => {
    console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}${imageUrl}`)

  return <article className={style.post}>
    <Image fill={true} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${imageUrl}`} alt="post photo" />

    <div className={style.info}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  </article>
}

export default Post


