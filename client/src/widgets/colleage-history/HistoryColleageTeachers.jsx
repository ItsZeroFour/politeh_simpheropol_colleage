"use client";

import style from "./ColleageHistory.module.scss";
import hatImg from "@public/assets/icons/hat.svg";
import townImg from "@public/assets/icons/town.svg";

const HistoryColleageTeachers = () => {
  const tursun = [
    {
      Icon: hatImg,
      name: "Федоренко Оксана Николаевна",
      status: "Преподователь",
    },
    {
      Icon: hatImg,
      name: "Завадская Людмила Викторовна",
      status: "Преподователь",
    },
    {
      Icon: hatImg,
      name: "Цыганкова Елена Викторовна",
      status: "Преподователь",
    },
    { Icon: hatImg, name: "Голуб Евдокия Николаевна", status: "Преподователь" },
    { Icon: hatImg, name: "Золотарев Игорь Иванович", status: "Преподователь" },
    {
      Icon: hatImg,
      name: "Бурова Оксана Николаевна",
      status: "Преподователь, руководитель ЦИТиИ",
    },
    {
      Icon: townImg,
      name: "Коврижных Елена Ивановна",
      status: "Зав. Отделениея, преподователь",
    },
    { Icon: hatImg, name: "Сытник Нина Владимировна", status: "Преподователь" },
    {
      Icon: hatImg,
      name: "Меметова Эльмаз Шевкетовна",
      status: "Преподователь",
    },
    {
      Icon: hatImg,
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
        {tursun.map(({ Icon, name, status }, index) => (
          <li key={index}>
            <Icon />
            <p>{name}</p>
            <h4>{status}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistoryColleageTeachers;
