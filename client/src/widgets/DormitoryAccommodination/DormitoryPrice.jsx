import style from "./style.module.scss";

const DormitoryPrice = () => {
  return (
    <div className={style.dormitory__price}>
      <div className={style.dormitory__price__title}>
        <h3>
          Стоимость проживания в общежитии с 01.12.2022 г. за одно койко-место:
        </h3>
        <p>Для обучающихся Колледжа за счет средств бюджета Республики Крым:</p>
      </div>
    </div>
  );
};

export default DormitoryPrice;
