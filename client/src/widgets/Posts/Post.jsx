/* itsZeroFourX@gmail.com code side */

import Image from "next/image";
import style from "./style.module.scss";
import eye from "/public/assets/icons/eye.svg";
import moment from "moment";

const Post = ({ title, subtitle, image, text, createdAt, viewsCount }) => {
  const src = `${process.env.NEXT_PUBLIC_SERVER_URL}${image}`;
  return (
    <div className={style.post}>
      <div className={style.post__time}>
        <p>{moment(createdAt).format("MM.DD.YYYY")}</p>
      </div>

      <Image
        className={style.post__main__image}
        src={src}
        loader={() => src}
        alt={title}
        width={1011}
        height={886}
      />

      <div className={style.post__main__info}>
        <div className={style.post__title}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <div className={style.post__views}>
          <p>{viewsCount}</p>
          <Image src={eye} alt="eye" width={40} height={21} />
        </div>
      </div>

      <p className={style.post__text}>{text}</p>
    </div>
  );
};

export default Post;
