import React from "react";
import style from "./ColleageHistory.module.scss";

const CEO = () => {
  const CEOList = [
    "Жуков Иван Леонтьевич с 1932 по 1950 год;",
    "Анохин Иван Иванович с 1950 по 1969 год;",
    "Морозов Дмитрий Иванович с 1969 по 1973 год;",
    "Пелих Владимир Макарович с 1973 по 1980 год;",
    "Поддубный Владимир Захарович с 1980 по 1996 год;",
    "Ващук Тимофей Александрович с 1996 по 2015 год;",
    "Хильский Виктор Григорьевич с 2015 по 2017 год.",
  ];

  return (
    <section className={style.CEO}>
      <h2>
        На протяжении истории колледж несколько раз переименовывался и сменил
        целую плеяду руководителей. Кузнецова Петра Афанасьевича на посту
        директора сменил преподаватель математики —
      </h2>

      <div>
        <ul>
          {CEOList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          С 2017 года по настоящее время директором колледжа впервые стала
          женщина – Баркова Татьяна Григорьевна.
        </p>
      </div>

      <p>
        Сегодня колледж преображается на глазах, идет ремонт аудиторий,
        оснащение современным оборудованием профильных мастерских и кабинетов,
        построен модульный спортивный зал. Учебное заведение пишет новые
        страницы своей истории, бережно оберегая традиции и совершенствуя
        обучение в соответствии с требованиями времени, готовясь в 2026 отметить
        свое 140-летие, исходя из вновь полученных архивных сведений.
      </p>

      <p>
        Учебное заведение пишет новые страницы своей истории, бережно оберегая
        традиции и совершенствуя обучение в соответствии с требованиями времени,
        готовясь в 2026 отметить свое 140-летие, исходя из вновь полученных
        архивных сведений.
      </p>
    </section>
  );
};

export default CEO;
