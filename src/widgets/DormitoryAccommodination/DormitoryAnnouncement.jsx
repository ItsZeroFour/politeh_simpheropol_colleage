import style from "./style.module.scss";

const DormitoryAnnouncement = () => {
  const announcement = [
    "Заселение вновь поступивших студентов в общежитие ГБПОУ РК «Симферопольский политехнический колледж» будет проходить",
    "строго 29 и 30 августа 2023 года с 8.00 до 16.00",
    "по адресу: г.Симферополь, ул.Камская,5",
    "Со списком желающих заселиться в общежитие можно ознакомиться, Список к заселению в общежитие с 01.09.2023",
  ];

  return (
    <div className={style.dormitory__announcement}>
      <div className={style.dormitory__announcement__title}>
        <h3>Объвление!</h3>
      </div>

      <ul>
        {announcement.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DormitoryAnnouncement;
