"use client";

import { useActions } from "@app/hooks/useActions";
import Designed from "@features/global/Designed/Designed";
import Links from "@features/header/Links/Links";
import logo from "@public/assets/icons/logo.svg?url";
import VK from "@public/assets/icons/vk.svg";
import Burger from "@shared/buttons/Burger/Burger";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./header.module.scss";
import MobileLinks from "@features/header/MobileLinks/MobileLinks";
import { useDispatch, useSelector } from "react-redux";
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
    url: "/enrollee",
    text: "Абитуриенту",
    prefetch: true,
  },
  {
    url: "/contacts",
    text: "Контакты",
  },
  {
    url: "/schedule",
    text: "Расписание",
    prefetch: true,
  },

  {
    url: "/dpo",
    text: "ДПО",
  },

  {
    url: "/our-colleage/limited-opportunities",
    text: "Условия обучения инвалидов и лиц с ограниченными возможностями здоровья",
  },

  {
    url: "/our-colleage/specialty-study",
    text: "Изучение выбранной вами специальности",
  },

  { url: "/our-colleage/practice", text: "Практика и трудоустройство" },

  { url: "/our-colleage/olimpiads", text: "Олимпиады" },

  {
    url: "/water-rules",
    text: "Правила поведения в близи водоемов",
  },

  {
    url: "/nacproject",
    text: "НацПроекты",
  },
  {
    url: "/anti-corruption",
    text: "Противодействие коррупции",
  },
];

const Header = ({ data }) => {
  const { isOpened } = useSelector(getHeader);
  const dispatch = useDispatch();
  const { setIsOpenedMenu } = useActions();

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const week = daysOfWeek[date.getDay()];
  const year = date.getFullYear();
  const today = `Сегодня: ${week}, ${day} ${month} ${year}`;

  useEffect(() => {
    if (!isOpened) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [isOpened])

  return (
    <>
      <div className={style.headerWrapper}></div>

      <header
        className={`${style.header} ${isOpened && style.headerMenuActive}`}
      >
        <div className={style.container}>
          <div className={style.logo}>
            <Link href="/" onClick={() => dispatch(setIsOpenedMenu(false))}>
              <img src={logo.src} />
            </Link>
          </div>

          <nav className={style.navigation}>
            <Links data={data} />
          </nav>

          <div className={style.headerButtons}>
            <button style={{ cursor: "pointer" }} id="specialButton">
              Для слабовидящих
            </button>
            {/* <button>
              <p>Белая тема</p>
              <img src={sunIcon} alt='white theme' width={26} height={26} />
            </button> */}
          </div>

          <Burger />
        </div>
      </header>

      <div className={`${style.menu} ${isOpened && style.menuActive}`}>
        <nav className={style.menuLinks}>
          <ul>
            <div className={style.mobile__links}>
              <MobileLinks data={data} />
            </div>

            {menuLinks.map((menuLink, index) => (
              <li
                onClick={() => dispatch(setIsOpenedMenu(false))}
                key={index}
                className={style.menuLink}
              >
                <Link href={menuLink.url} prefetch={menuLink.prefetch}>
                  {menuLink.text}
                </Link>
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
