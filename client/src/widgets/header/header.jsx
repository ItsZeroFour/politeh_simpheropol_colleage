"use client";

import { useState } from "react";
import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import logo from "../../../public/assets/icons/logo.svg";
import sunIcon from "../../../public/assets/icons/sun.svg";

const header = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const navItems = [
    { title: "Главная", link: "/home", id: 0 },
    { title: "Наш колледж", link: "/our-colleage", id: 1 },
    { title: "Абитуриенту", link: "/enrollee", id: 2 },
    { title: "Контакты", link: "/contacts", id: 3 },
    {
      title: "Общежитие",
      dropdown: [
        {
          item: "Правила внутреннего распорядка в студенческом общежитии",
          link: "/hostel-rules",
        },
        { item: "Поселение в общежитие", link: "/settlement" },
        { item: "Жизнь общежития", link: "/dorm-life" },
      ],
      id: 4,
    },
    {
      title: "Студенту",
      dropdown: [
        {
          item: "Правила внутреннего распорядка в студенческом общежитии",
          link: "/hostel-rules",
        },
        { item: "Поселение в общежитие", link: "/settlement" },
        { item: "Жизнь общежития", link: "/dorm-life" },
      ],
      id: 5,
    },
  ];

  return (
    <header className={style.header}>
      <Image src={logo} alt="logo" width={104} height={105} />

      <nav className={style.header__nav}>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.link && (
              <Link href={item.link} onClick={() => setDropdownIndex(null)}>
                {item.title}
              </Link>
            )}
            {item.dropdown && (
              <p
                onClick={() =>
                  setDropdownIndex(dropdownIndex === null ? item.id : null)
                }
              >
                {item.title}
              </p>
            )}
          </li>
        ))}

        {dropdownIndex && (
          <ul className={style.header__dropdown}>
            {navItems[dropdownIndex].dropdown &&
              navItems[dropdownIndex].dropdown.map(({ item, link }) => (
                <li key={item} onClick={() => setDropdownIndex(null)}>
                  <Link href={link}>{item}</Link>
                </li>
              ))}
          </ul>
        )}
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
