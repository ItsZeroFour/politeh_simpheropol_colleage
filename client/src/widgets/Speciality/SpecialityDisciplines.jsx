import style from "./Speciality.module.scss";

const SpecialityDisciplines = ({ speciality }) => {
  return (
    <div className={style.disciplines}>
      <h2>Важные учебные дисциплины:</h2>

      <ul>
        {speciality.academicDisciplines.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialityDisciplines;
