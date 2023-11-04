import Requzits from "@/container/Requzits";
import style from "./Enrollee.module.scss";

const EnrolleeRequzits = () => {
  return (
    <div className={style.requzits}>
      <h1>
        РЕКВИЗИТЫ НА ОПЛАТУ ОБУЧЕНИЯ И ЗА ПРОЖИВАНИЕ В ОБЩЕЖИТИИ И ОБУЧЕНИЯ
      </h1>

      <Requzits />
    </div>
  );
};

export default EnrolleeRequzits;
