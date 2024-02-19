"use client";

import style from "./DPO.module.scss";
import dpoImage from "../../../public/assets/images/dpo/dpo.jpg";
import Link from "next/link";

const DPO = ({ files }) => {
  return (
    <section className={style.dpo}>
      <h1>Дополнительное профессиональное образование</h1>

      <img src={dpoImage} alt="dpo image" />

      <ul className={style.dpo__order}>
        {files ? (
          files.map(({ file, name }) => (
            <li key={name}>
              <Link
                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
                target="_blank"
                rel="norefferer"
              >
                {name}
              </Link>
            </li>
          ))
        ) : (
          <p>Загрузка...</p>
        )}
      </ul>

      <p>
        Контактное лицо — Кондратенко Ирина Владимировна, заместитель директора
        по учебно-производственной работе, каб.206 моб.{" "}
        <Link href="tel:+7(3652)27-62-20">+7(3652)27-62-20</Link>
      </p>
    </section>
  );
};

export default DPO;
