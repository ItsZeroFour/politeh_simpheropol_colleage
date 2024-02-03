"use client";

import style from "./DPO.module.scss";
import dpoImage from "../../../public/assets/images/dpo/dpo.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const DPO = () => {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get`,
          {
            params: { forPage: "dpo" },
          }
        );

        setFiles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={style.dpo}>
      <h1>Дополнительное профессиональное образование</h1>

      <Image src={dpoImage} alt="dpo image" />

      <ul className={style.dpo__order}>
        {files ? (
          files.map(({ file, name }) => (
            <li key={name}>
              <Link
                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
                target="_blank"
                rel="norefferer"
              >
                {name}
              </Link>
            </li>
          ))
        ) : (
          <p>Загрузка...</p>
        )}
      </ul>

      <p>
        Контактное лицо — Кондратенко Ирина Владимировна, заместитель директора
        по учебно-производственной работе, каб.206 моб.{" "}
        <Link href="tel:+7(3652)27-62-20">+7(3652)27-62-20</Link>
      </p>
    </section>
  );
};

export default DPO;
