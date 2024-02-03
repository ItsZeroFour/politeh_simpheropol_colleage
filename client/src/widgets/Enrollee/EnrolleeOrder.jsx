import Link from "next/link";
import style from "./Enrollee.module.scss";

const EnrolleeOrder = ({ files }) => {
  console.log(files);

  return (
    <ul className={style.enrollee__order}>
      {files ? (
        files.map(({ file, name }) => (
          <li key={name}>
            <Link
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
              target="_blank"
              rel="norefferer"
            >
              {name}
            </Link>
          </li>
        ))
      ) : (
        <p>Загрузка...</p>
      )}
    </ul>
  );
};

export default EnrolleeOrder;
