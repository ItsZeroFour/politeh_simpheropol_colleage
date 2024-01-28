import React from "react";
import style from "./style.module.scss";
import achive1 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive2 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive3 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive4 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive5 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive6 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive7 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive8 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive9 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive10 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive11 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive12 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive13 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive14 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive15 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive16 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive17 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive18 from "@public/assets/images/colleage-history/achives/1.jpg";
import Image from "next/image";

const Achives = () => {
  const achives = [
    { achiveImg: achive1, name: "Достижение" },

    { achiveImg: achive2, name: "Достижение" },

    { achiveImg: achive3, name: "Достижение" },

    { achiveImg: achive4, name: "Достижение" },

    { achiveImg: achive5, name: "Достижение" },

    { achiveImg: achive6, name: "Достижение" },

    { achiveImg: achive7, name: "Достижение" },

    { achiveImg: achive8, name: "Достижение" },

    { achiveImg: achive9, name: "Достижение" },

    { achiveImg: achive10, name: "Достижение" },

    { achiveImg: achive11, name: "Достижение" },

    { achiveImg: achive12, name: "Достижение" },

    { achiveImg: achive13, name: "Достижение" },

    { achiveImg: achive14, name: "Достижение" },

    { achiveImg: achive15, name: "Достижение" },

    { achiveImg: achive16, name: "Достижение" },

    { achiveImg: achive17, name: "Достижение" },

    { achiveImg: achive18, name: "Достижение" },
  ];

  return (
    <main>
      <ul className={style.achive__list}>
        {achives.mapp(({ achiveImg, name }, index) => (
          <li key={index}>
            <Image src={achiveImg} alt={name} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Achives;
