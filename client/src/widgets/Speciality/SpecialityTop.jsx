import Image from "next/image";
import style from "./Speciality.module.scss";

const SpecialityTop = ({ speciality }) => {
  console.log(speciality);

  const mainSpecialityImg = `${process.env.NEXT_PUBLIC_SERVER_URL}${speciality.mainImage}`;

  return (
    <div className={style.speciality__top}>
      <div className={style.speciality__top__text}>
        <h1>{speciality.specialityTitle}</h1>
        <h2>{speciality.specialityCode}</h2>
        <p>{speciality.description}</p>
      </div>

      <div className={style.speciality__top__image}>
        <Image
          loader={() => mainSpecialityImg}
          src={mainSpecialityImg}
          alt="speciality image"
          width={859}
          height={713}
        />
      </div>
    </div>
  );
};

export default SpecialityTop;
