import style from "./Speciality.module.scss";

const SpecialityMainInfo = ({ speciality }) => {
  return (
    <ul className={style.speciality__main__info}>
      {[
        { item: "Уровень образования", value: speciality.educationLevel },
        { item: "Форма обучения", value: speciality.educationForm },
        { item: "Срок обучения", value: speciality.educationPeriod },
        { item: "Квалификация", value: speciality.cvalification },
      ].map(({ item, value }, index) => (
        <li key={index}>
          <h3>{item}</h3>
          <p>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default SpecialityMainInfo;
