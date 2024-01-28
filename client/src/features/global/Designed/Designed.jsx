import Link from "next/link";
import global from "@/scss/global.module.scss";

import VK from "@public/assets/icons/vk.svg";
import WWW from "@public/assets/icons/www.svg";
import Telegram from "@public/assets/icons/telegram.svg";

import style from "./Designed.module.scss";

const Designed = () => {
  return (
    <div className={style.designed}>
      <p className={style.authors}>Разработали:</p>
      <div className={style.developer}>
        <p className={style.developerName}>Андреев Д. В.</p>
        <div className={style.networks}>
          <Link
            href="https://vk.com/nullbebra"
            target="_blank"
            className={style.networkLink}
          >
            <VK className={`${global.icon} cursor-pointer w-[32px] h-[26px]`} />
          </Link>
          <Link
            href="https://zero-personal-web.vercal.app"
            target="_blank"
            className={style.networkLink}
          >
            <WWW className={`${global.icon} cursor-pointer`} />
          </Link>
          <Link
            href="https://t.me/ItsZeroFour"
            target="_blank"
            className={style.networkLink}
          >
            <Telegram className={`${global.icon} cursor-pointer`} />
          </Link>
        </div>
      </div>

      <div className={style.developer}>
        <p className={style.developerName}>Власенко Д. С.</p>
        <div className={style.networks}>
          <Link
            href="https://vk.com/l.o_oll"
            target="_blank"
            className={style.networkLink}
          >
            <VK className={`${global.icon} cursor-pointer w-[32px] h-[26px]`} />
          </Link>
          <Link
            href="https://zero-personal-web.vercal.app"
            target="_blank"
            className={style.networkLink}
          >
            <WWW className={`${global.icon} cursor-pointer`} />
          </Link>
          <Link
            href="https://t.me/mr_alberg"
            target="_blank"
            className={style.networkLink}
          >
            <Telegram className={`${global.icon} cursor-pointer`} />
          </Link>
        </div>
      </div>

      <div className={style.developer}>
        <p className={style.developerName}>Сейдалиев А. Э.</p>
        <div className={style.networks}>
          <Link
            href="https://vk.com/justzero09"
            target="_blank"
            className={style.networkLink}
          >
            <VK className={`${global.icon} cursor-pointer w-[32px] h-[26px]`} />
          </Link>
          <Link
            href="https://zero-personal-web.vercal.app"
            target="_blank"
            className={style.networkLink}
          >
            <WWW className={`${global.icon} cursor-pointer`} />
          </Link>
          <Link
            href="https://t.me/AmetWebDev"
            target="_blank"
            className={style.networkLink}
          >
            <Telegram className={`${global.icon} cursor-pointer`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Designed;
