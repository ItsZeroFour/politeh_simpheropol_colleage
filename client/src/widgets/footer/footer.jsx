import Image from "next/image";
import style from "./footer.module.scss";
import logo from "../../../public/assets/icons/logo.svg?url";
import phone from "../../../public/assets/icons/phone.svg?url";
import letter from "../../../public/assets/icons/letter.svg?url";
import location from "../../../public/assets/icons/location.svg?url";
import vk from "../../../public/assets/icons/vk.svg?url";
import telegram from "../../../public/assets/icons/telegram.svg?url";
import www from "../../../public/assets/icons/www.svg?url";
import Link from "next/link";
import Designed from "@features/global/Designed/Designed";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__left}>
            <div className={style.footer__left__logo}>
              <Image src={logo} alt="logo" width={153} height={154} />
              <a className={style.footer_college_link} href="www.simfpolyteh.ru">www.simfpolyteh.ru</a>
            </div>

            <p className={style.information}>
              Информация 1932-{currentYear} г. ГБПОУ РК "СПК" Министерство
              образования, науки и молодежи Республики Крым
            </p>

            <ul className={style.footer__contacts}>
              {[
                { title: "Контактная служба", icon: phone, link: "/contacts" },
                { title: "Обратная связь", icon: letter, link: "/feedback" },
                {
                  title: "г.Симферополь ул.Гаспринского 3",
                  icon: location,
                  link: "https://yandex.ru/maps/-/CDa-i4ZS",
                },
              ].map(({ title, icon, link }) => (
                <li key={title}>
                  <Link href={link}>
                    <Image src={icon} alt={title} width={36} height={26} />
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer__right}>
            <h2 className={style.footer__right__title}>
              Учитесь с удовольствием!
            </h2>

            <div className={style.footer__devs}>
              <Designed />
            </div>
          </div>
        </div>
      </div>

      <div className={style.footer__copyright}>
        © {currentYear} Симферопольский политехнический колледж
      </div>
    </footer>
  );
};

export default footer;
