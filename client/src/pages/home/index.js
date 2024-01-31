import "react-loading-skeleton/dist/skeleton.css";

import FirstScreen from "@/widgets/home/FirstScreen/FirstScreen";
import LoginForm from "@/widgets/home/LoginForm/LoginForm";
import Posts from "@/widgets/home/Posts/Posts";
import HomeSearchBar from "@features/home/HomeSearchBar/HomeSearchBar";
import Background from "@entities/home/Background/Background";
import ContactForm from "@widgets/home/ContactForm/ContactForm";
import Departments from "@widgets/home/Departments/Departments";
import EssentialLinks from "@widgets/home/EssentialLinks/EssentialLinks";
import Ministries from "@widgets/home/Ministries/Ministries";
import style from "./home.module.scss";
import Link from "next/link";

export const Home = () => {
  return (
    <section>
      <Background />
      <FirstScreen />
      <div className={style.home__search}>
        <HomeSearchBar />
      </div>
      <div className={style.home__main}>
        <LoginForm />
        <Posts />
      </div>
      <ContactForm />
      <EssentialLinks />

      <Departments />
      <Ministries />
    </section>
  );
};
