import React from "react";
import style from "./Panel.module.scss";
import CreatePage from "./CreatePage";

const MainMenu = ({ mainPanelType }) => {
  return (
    <section className={style.main__menu}>
      {mainPanelType === "create-page" && <CreatePage />}
    </section>
  );
};

export default MainMenu;
