"use client"

import style from "./ColleageHistory.module.scss";
import hatImg from "@public/assets/icons/hat.svg";
import townImg from "@public/assets/icons/town.svg";
import Image from "next/image";

const HistoryColleageTeachers = () => {
  const tursun = [
    {
      icon: hatImg,
      name: "Федоренко Оксана Николаевна",
      status: "Преподователь",
    },
    {
      icon: hatImg,
      name: "Завадская Людмила Викторовна",
      status: "Преподователь",
    },
    {
      icon: hatImg,
      name: "Цыганкова Елена Викторовна",
      status: "Преподователь",
    },
    { icon: hatImg, name: "Голуб Евдокия Николаевна", status: "Преподователь" },
    { icon: hatImg, name: "Золотарев Игорь Иванович", status: "Преподователь" },
    {
      icon: hatImg,
      name: "Бурова Оксана Николаевна",
      status: "Преподователь, руководитель ЦИТиИ",
    },
    {
      icon: townImg,
      name: "Коврижных Елена Ивановна",
      status: "Зав. Отделениея, преподователь",
    },
    { icon: hatImg, name: "Сытник Нина Владимировна", status: "Преподователь" },
    {
      icon: hatImg,
      name: "Меметова Эльмаз Шевкетовна",
      status: "Преподователь",
    },
    {
      icon: hatImg,
      name: "Головченко Алексей Евгеньевич",
      status: "Преподователь",
    },
  ];

  return (
    <section className={style.colleage__history__teachers}>
      <p>
        Еще одной особенностью колледжа является то, что некоторые выпускники
        возвращаются в его стены уже в ином качестве.
      </p>

      <ul>
        {tursun.map(({ icon, name, status }, index) => (
          <li key={index}>
            <Image src={icon} alt={status} />
            <p>{name}</p>
            <h4>{status}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistoryColleageTeachers;
