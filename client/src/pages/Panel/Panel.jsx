"use client";

import LeftMenu from "@widgets/Panel/LeftMenu";
import MainMenu from "@widgets/Panel/MainMenu";
import { useState } from "react";

const Panel = () => {
  const [mainPanelType, setMainPanelType] = useState("create-page");

  return (
    <main style={{ display: "flex" }}>
      <LeftMenu
        setMainPanelType={setMainPanelType}
        mainPanelType={mainPanelType}
      />
      <MainMenu mainPanelType={mainPanelType} />
    </main>
  );
};

export default Panel;
