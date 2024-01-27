import style from "./Departments.module.scss";

import partTime from "@public/assets/images/home/part_time.png";
import it from "@public/assets/images/home/it.png";
import money from "@public/assets/images/home/money.png";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: partTime,
    text: "Заочная форма обучения",
    link: "/remote-departament",
  },
  {
    image: it,
    text: "Технико-информационное отделение",
    link: "/technical-departament",
  },
  {
    image: money,
    text: "Отделение пищевых технологий, экономико-бухгалтерского учета и гостиничного дела",
    link: "/economic-departament",
  },
];

function Departments() {
  return (
    <div className={style.departments}>
      <h2 className={style.title}>Отделения</h2>

      <div className={style.all}>
        {data.map(({ image: source, text, link }) => (
          <Link href={link} className={style.card}>
            <div className={style.image}>
              <Image src={source} />
            </div>

            <p className={style.text}>{text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departments;
