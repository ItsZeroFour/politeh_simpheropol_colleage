import Image from "next/image";
import style from "./Post.module.scss";
import Link from "next/link";

const Post = ({ data: { image: imageUrl, text, title, _id } }) => {
  let slicedText = text.slice(0, 60);
  let slicedTitle = title.slice(0, 15);

  if (slicedText[slicedText.length - 1] === " ")
    slicedText = slicedText.slice(0, 59);
  if (slicedTitle[slicedTitle.length - 1] === " ")
    slicedTitle = slicedTitle.slice(0, 14);

  text = text.length >= 60 ? slicedText + "..." : text;
  title = title.length >= 15 ? slicedTitle + "..." : title;

  console.log(_id);

  return (
    <Link href={`/posts/${_id}`} className={style.post}>
      <Image
        className={style.image}
        fill={true}
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${imageUrl}`}
        alt="post photo"
      />

      <div className={style.info}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{text}</p>
      </div>
    </Link>
  );
};

export default Post;
