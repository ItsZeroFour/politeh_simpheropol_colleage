import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import logo from "../../../public/assets/icons/logo.svg";
import sunIcon from "../../../public/assets/icons/sun.svg";

const header = () => {
  return (
    <header className={style.header}>
      <Image src={logo} alt="logo" width={104} height={105} />

      <nav className={style.header__nav}>
        {[
          { title: "Главная", link: "/" },
          { title: "Наш колледж", link: "/our-colleage" },
          { title: "Абитуриенту", link: "/enrollee" },
          { title: "Контакты", link: "/contacts" },
          { title: "Общежитие", link: "/dormitory" },
          { title: "Студенту", link: "/student" },
        ].map(({ title, link }) => (
          <li key={title}>
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </nav>

      <div className={style.header__buttons}>
        <button>Для слабовидящих</button>
        <button>
          <p>Белая тема</p>
          <Image src={sunIcon} alt="white theme" width={26} height={26} />
        </button>
      </div>

      <div className={style.header__menu} />
    </header>
  );
};

export default header;
