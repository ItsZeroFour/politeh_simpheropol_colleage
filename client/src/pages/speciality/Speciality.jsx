"use client";

import SpecialityDisciplines from "@/widgets/Speciality/SpecialityDisciplines";
import SpecialityMainInfo from "@/widgets/Speciality/SpecialityMainInfo";
import SpecialityQuestionAnswer from "@/widgets/Speciality/SpecialityQuestionAnswer";
import SpecialityResume from "@/widgets/Speciality/SpecialityResume";
import SpecialityTop from "@/widgets/Speciality/SpecialityTop";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "./style.module.scss";

const Speciality = ({ specialityId }) => {
  const [speciality, setSpeciality] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpeciality/${specialityId}`
      );
      const response = await query.json();
      setSpeciality(response);
    };

    getData();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section>
      {speciality && speciality.length !== 0 ? (
        <>
          <SpecialityTop speciality={speciality} />
          <SpecialityMainInfo speciality={speciality} />
          <SpecialityDisciplines speciality={speciality} />
          <SpecialityQuestionAnswer speciality={speciality} />
          <SpecialityResume speciality={speciality} />
        </>
      ) : (
        <article>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton className={style.speciality__loading} />

            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <Skeleton
                  key={item}
                  className={style.speciality__loading__text}
                />
              ))}
            </div>
          </SkeletonTheme>
        </article>
      )}
    </section>
  );
};

export default Speciality;
