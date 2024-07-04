import style from "./Enrollee.module.scss";

const EnrolleeTop = () => {
  return (
    <section className={style.enrollee__top}>
      <div className={style.enrollee__top__left}>
        <h1>Телефоны приемной комиссии</h1>

        <ul>
          {[
            { item: "+7(978) 905 11 27", telephone: "+79789051127" },
            { item: "+7(978) 905 10 25", telephone: "+79789051025" },
            { item: "+7(978) 905 11 27", telephone: "+79789051127" },
          ].map(({ item, telephone }) => (
            <li key={telephone}>
              <a href={`tel:${telephone}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.enrollee__top__right}>
        <ul>
          {[
            {
              item: "Звонки принимаются в рабочее время Понедельник — пятница с 8:00 до 16:30",
            },
            {
              item: "Документы от поступающих принимаются по адресу: г. Симферополь, ул. Гаспринского, д. 3, 1 этаж, кабинет 102",
            },
            { item: "Понедельник — пятница с 9:00 до 15:00" },
          ].map(({ item }, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EnrolleeTop;
