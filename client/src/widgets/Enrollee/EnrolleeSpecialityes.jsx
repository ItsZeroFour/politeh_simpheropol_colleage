"use client";

import { useEffect, useState } from "react";
import style from "./Enrollee.module.scss";
import Image from "next/image";
import Link from "next/link";

const Specialityes = () => {
  const [specialityes, setSpecialityes] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpecialities`
      );
      const response = await query.json();
      setSpecialityes(response);
    };

    getData();
  }, []);

  console.log(specialityes);

  return (
    <div className={style.specialityes}>
      <h1 className={style.specialityes__title}>Специальности</h1>
      <ul>
        {specialityes &&
          specialityes.map((item) => {
            const src = `${process.env.NEXT_PUBLIC_SERVER_URL}${item.firstImage}`;

            return (
              <li>
                <Link href={`/speciality/${item._id}`}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt={`${item.title}`}
                    width={488}
                    height={448}
                  />

                  <div className={style.specialityes__main__info}>
                    <h2>{item.specialityCode}</h2>
                    <p>{item.specialityTitle}</p>
                    <p>
                      {item.cvalification &&
                        `Базовый уровень, квалификация – ${item.cvalification}`}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Specialityes;

// export async function getSpecialities() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpecialities`
//   );
//   const specialityes = await res.json();

//   return {
//     props: {
//       specialityes,
//     },

//     revalidate: 10,
//   };
// }
