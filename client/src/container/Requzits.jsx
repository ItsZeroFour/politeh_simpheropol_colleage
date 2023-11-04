import style from "./Style.module.scss";

const Requzits = () => {
  return (
    <div className={style.requzits__template}>
      <div className={style.requzits__template__get}>
        <h2>Получатель:</h2>{" "}
        <p>
          Министерство финансов Республики Крым (ГБПОУ РК «Симферопольский
          политехнический колледж», л/с 20756Щ99150)
        </p>
      </div>

      <div>
        <h2>ИНН</h2>
        <p>9102160017</p>

        <h2>/ КПП</h2>
        <p>910201001</p>
      </div>

      <div>
        <h2>ОКТМО</h2>
        <p>35701000</p>
      </div>

      <div>
        <h2>КБК</h2>
        <p>00000000000000000130</p>
      </div>

      <div>
        <h2>Банк получателя:</h2>
        <p>
          Отделение Республика Крым Банка России//УФК по Республике Крым
          г.Симферополь
        </p>
      </div>

      <div>
        <h2>БИК</h2>
        <p>013510002</p>
      </div>

      <div>
        <h2>Единый к/с</h2>
        <p>40102810645370000035</p>
      </div>

      <div>
        <h2>К/с</h2>
        <p>03224643350000007500</p>
      </div>

      <div>
        <h2>Назначение платежа:</h2>
        <p>Плата за ОБУЧЕНИЕ (ПРОЖИВАНИЕ)</p>
      </div>

      <div>
        <p>
          ______________________________ № группы________ ФИО студента
          (полностью)
        </p>
      </div>
    </div>
  );
};

export default Requzits;
