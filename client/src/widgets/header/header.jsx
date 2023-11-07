"use client";

import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";
import logo from "../../../public/assets/icons/logo.svg";
import sunIcon from "../../../public/assets/icons/sun.svg";
import vk from "../../../public/assets/icons/vk.svg";
import telegram from "../../../public/assets/icons/telegram.svg";
import www from "../../../public/assets/icons/www.svg";
import { useState } from "react";
import moment from "moment";

const header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={style.header}>
      <Image className={style.header__logo} src={logo} alt="logo" width={104} height={105} />

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

      <button onClick={() => setOpenMenu((prev) => !prev)}>
        <div className={style.header__menu} />
      </button>

      {openMenu && (
        <div className={style.header__menu__wrapper}>
          <div className={style.header__menu__top}>
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

            <button onClick={() => setOpenMenu((prev) => !prev)}>
              <div className={style.header__menu} />
            </button>
          </div>
          <nav className={style.header__menu__nav}>
            {[
              { title: "Главная", link: "/" },
              { title: "Наш колледж", link: "/our-colleage" },
              { title: "Абитуриенту", link: "/enrollee" },
              { title: "Контакты", link: "/contacts" },
              { title: "Общежитие", link: "/dormitory" },
              { title: "Студенту", link: "/student" },
              { title: "НацПроекты", link: "/nacproject" },
              { title: "Олимпиады", link: "/olimpiads" },
              { title: "ДПО", link: "/dpo" },
              {
                title:
                  "Условия обучения инвалидов и лиц с ограниченными возможностями здоровья",
                link: "/ovz",
              },
            ].map(({ title, link }) => (
              <li key={title}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </nav>

          <div className={style.header__menu__bottom}>
            <a href="https://vk.com/simfpolyteh">
              <Image src={vk} alt="vk" width={72} height={72} />
            </a>

            <p>{moment().format("LL")}</p>

            <ul className={style.header__devs__list}>
              {[
                {
                  name: "Андреев Д. В.",
                  vk: vk,
                  telegram: telegram,
                  www: www,
                  vkLink: "https://vk.com/nullbebra",
                  telegramLink: "https://t.me/ItsZeroFour",
                  wwwLink: "https://zero-personal-web.vercal.app",
                },

                {
                  name: "Власенко Д. С.",
                  vk: vk,
                  telegram: telegram,
                  www: www,
                  vkLink: "https://vk.com/l.o_oll",
                  telegramLink: "https://t.me/mr_alberg",
                  wwwLink: "https://zero-personal-web.vercal.app",
                },

                {
                  name: "Сейдалиев А.Э.",
                  vk: vk,
                  telegram: telegram,
                  www: www,
                  vkLink: "https://vk.com/justzero09",
                  telegramLink: "https://t.me/AmetWebDev",
                  wwwLink: "https://zero-personal-web.vercal.app",
                },
              ].map(
                ({
                  name,
                  vk,
                  telegram,
                  www,
                  vkLink,
                  telegramLink,
                  wwwLink,
                }) => (
                  <li key={name}>
                    <p>{name}</p>

                    <div className={style.header__devs__links}>
                      <Link href={vkLink}>
                        <Image src={vk} alt="vk" width={41} height={41} />
                      </Link>
                      <Link href={telegramLink}>
                        <Image
                          src={telegram}
                          alt="telegram"
                          width={28}
                          height={28}
                        />
                      </Link>
                      <Link href={wwwLink}>
                        <Image src={www} alt="www" width={26} height={26} />
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default header;
