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

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__left}>
            <div className={style.footer__left__logo}>
              <Image src={logo} alt="logo" width={153} height={154} />
              <a href="www.simfpolyteh.ru">www.simfpolyteh.ru</a>
            </div>

            <p>
              Информация 1932-{currentYear} г. ГБПОУ РК "СПК" Министерство
              образования, науки и молодежи Республики Крым
            </p>

            <ul className={style.footer__contacts}>
              {[
                { title: "Контактная служба", icon: phone, link: "/contacts" },
                { title: "Обратная связь", icon: letter, link: "/#contactus" },
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
              <p className={style.footer__devs__title}>Разработали:</p>
              <ul className={style.footer__devs__list}>
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

                      <div className={style.footer__devs__links}>
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
        </div>
      </div>

      <div className={style.footer__copyright}>
        © {currentYear} Симферопольский политехнический колледж
      </div>
    </footer>
  );
};

export default footer;
