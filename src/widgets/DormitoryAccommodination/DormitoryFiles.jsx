import style from "./style.module.scss";

const DormitoryFiles = () => {
  return (
    <div className={style.dormitory__files}>
      <ul>
        {[
          {
            item: "Заявление на поселение в общежитие СОВЕРШЕННОЛЕТНИХ студентов",
            file: "",
          },
          {
            item: "Заявление на поселение в общежитие НЕСОВЕРШЕННОЛЕТНИХ студентов — Заполняются ОБА бланка",
            file: "",
          },
          {
            item: "ДОГОВОР найма жилого помещения в общежитии (со студентами)",
            file: "",
          },
          {
            item: "Об утверждении перечня бытовых приборов, разрешенных и запрещённых для пользования студентами в общежитии колледжа",
            file: "",
          },
        ].map(({ item, file }, index) => (
          <li key={index}>
            <a href={file}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DormitoryFiles;
