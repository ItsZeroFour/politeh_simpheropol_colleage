import style from "./DPO.module.scss";
import dpoImage from "../../../public/assets/images/dpo/dpo.jpg";
import Image from "next/image";
import Link from "next/link";

const DPO = () => {
  return (
    <section className={style.dpo}>
      <h1>Дополнительное профессиональное образование</h1>

      <Image src={dpoImage} alt="dpo image" />

      <ul className={style.dpo__order}>
        {[
          {
            item: "Приказ об установлении стоимости образовательных услуг",
            value: "/data/DPO/1.pdf",
          },
          {
            item: "Положение об организации образовательного процесса по программам ДПО и ПО",
            value: "/data/DPO/2.pdf",
          },
          {
            item: "Правила приема слушателей на обучение по программам дополнительного профессионального образования и профессионального обучения",
            value: "/data/DPO/3.pdf",
          },
        ].map(({ item, value }, index) => (
          <li key={index}>
            <a href={value}>{item}</a>
          </li>
        ))}
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
