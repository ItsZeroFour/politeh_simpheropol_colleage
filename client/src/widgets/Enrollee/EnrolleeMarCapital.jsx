import Image from "next/image";
import style from "./Enrollee.module.scss";
import matCapitalImage from "../../../public/assets/images/enrollee/mar-capital.jpg";

const EnrolleeMarCapital = () => {
  return (
    <Image
      className={style.mat__capital__image}
      src={matCapitalImage}
      alt="Материнский капитал"
    />
  );
};

export default EnrolleeMarCapital;
