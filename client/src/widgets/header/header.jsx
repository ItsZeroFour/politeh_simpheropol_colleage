"use client";

import Designed from "@features/global/Designed/Designed";
import Links from "@features/header/Links/Links";
import logo from "@public/assets/icons/logo.svg?url";
import VK from "@public/assets/icons/vk.svg";
import Burger from "@shared/buttons/Burger/Burger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./header.module.scss";
import MobileLinks from "@features/header/MobileLinks/MobileLinks";
import { useSelector } from "react-redux";
import { getHeader } from "@app/store/header/header.slice";

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const menuLinks = [
  {
    url: "/nacproject",
    text: "НацПроекты",
  },
  {
    url: "/anticorruption",
    text: "Противодействие коррупции",
  },
  {
    url: "/dpo_",
    text: "ДПО",
  },
  {
    url: "/enrollee",
    text: "Абитуриенту",
  },
  {
    url: "/contacts",
    text: "Контакты",
  },
  {
    url: "/schedule",
    text: "Расписание",
  },
  {
    url: "/our-colleage/specialty-study",
    text: "Изучение выбранной вами специальности",
  },
  { url: "/our-colleage/practice", text: "Практика и трудоустройство" },
  { url: "/our-colleage/olimpiads", text: "Олимпиады" },
  {
    url: "/our-colleage/limited-opportunities",
    text: "Условия обучения инвалидов и лиц с ограниченными возможностями здоровья",
  },
];

const Header = () => {
  const { isOpened } = useSelector(getHeader);

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const week = daysOfWeek[date.getDay()];
  const year = date.getFullYear();
  const today = `Сегодня: ${week}, ${day} ${month} ${year}`;

  useEffect(() => {
    if (!isOpened) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [isOpened]);

  return (
    <>
      <div className={style.headerWrapper}></div>

      <header
        className={`${style.header} ${isOpened && style.headerMenuActive}`}
      >
        <div className={style.container}>
          <div className={style.logo}>
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>

          <nav className={style.navigation}>
            <Links />
          </nav>

          <div className={style.headerButtons}>
            <button style={{ cursor: "pointer" }} id="specialButton">
              Для слабовидящих
            </button>
            {/* <button>
              <p>Белая тема</p>
              <Image src={sunIcon} alt='white theme' width={26} height={26} />
            </button> */}
          </div>

          <Burger />
        </div>
      </header>

      <div className={`${style.menu} ${isOpened && style.menuActive}`}>
        <nav className={style.menuLinks}>
          <ul>
            <div className={style.mobile__links}>
              <MobileLinks />
            </div>

            {menuLinks.map((menuLink, index) => (
              <li
                onClick={() => dispatch(setIsOpenedMenu(false))}
                key={index}
                className={style.menuLink}
              >
                <Link href={menuLink.url}>{menuLink.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={style.menuFooter}>
          <p className={style.menuIcon}>
            <Link href="https://vk.com/simfpolyteh">
              <VK />
            </Link>
          </p>

          <p className={style.today}>{today}</p>

          <div className={style.developers}>
            <Designed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
