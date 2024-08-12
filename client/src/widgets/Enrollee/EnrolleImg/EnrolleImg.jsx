import photo_2024 from "@public/assets/icons/photo_20240714.jpg";
import Link from "next/link";
import style2 from "../Enrollee.module.scss";
import style from "./EnrolleImg.module.scss";
import so from "./site_CO-1.png";
const EnrolleImg = () => {
  console.log("photo", photo_2024, so);
  return (
    <div className={style.wrapperEnrolleIMGWrapper}>
      <img src={photo_2024.src} alt="kk" />

      <div className={style.enrollee__announcement}>
        <img
          className={style.enrolle_alert}
          src={so.src}
          width="100%"
          height="100%"
          alt="CO"
        />
      </div>

      <section className={style2.enrollee__order__link}>
        <Link href="/assets/announcement.docx">
          <p>
            <h2>Внимание объявление!!!</h2>
            ВСЕМ, кто предоставлял справки для зачисления в первоочередном
            порядке (СВО), ПРОСИМ ПРЕДОСТАВИТЬ СПРАВКИ СОГЛАСНО ФОРМЕ В СРОК ДО
            15 АВГУСТА 2024 ГОДА.
          </p>
          Скачать файл
        </Link>
        <Link href="/our-colleage/order-of-admission">Приказ о зачислении</Link>
        <Link href="/admission">Рейтинговый список на зачисление</Link>
      </section>
    </div>
  );
};

export default EnrolleImg;
