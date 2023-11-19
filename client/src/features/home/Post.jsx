import Image from 'next/image'
import style from './Post.module.scss'

const Post = ({ title, imageUrl, text }) => {
  text = text.length >= 60 ? text.slice(0, 60)+ '...' : text
  title = title.length >= 20 ? title.slice(0, 20)+ '...' : title

  return <article className={style.post}>
    <Image className={style.image} fill={true} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${imageUrl}`} alt="post photo" />

    <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{text}</p>
    </div>
  </article>
}

export default Post


