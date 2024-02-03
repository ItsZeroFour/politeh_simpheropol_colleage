import Link from "next/link";
import style from "./Enrollee.module.scss";

const EnrolleeOtherLinks = ({ files }) => {
  return (
    <ol className={style.enrollee__links}>
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
    </ol>
  );
};

export default EnrolleeOtherLinks;
