import style from "./Departments.module.scss";

import partTime from "@public/assets/images/home/part_time.png";
import it from "@public/assets/images/home/it.png";
import money from "@public/assets/images/home/money.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    image: partTime,
    text: "Заочная форма обучения",
    link: "/remote-departament",
  },
  {
    image: it,
    text: "Технико-информационное отделение",
    link: "/technical-departament",
  },
  {
    image: money,
    text: "Отделение пищевых технологий, экономико-бухгалтерского учета и гостиничного дела",
    link: "/economic-departament",
  },

  {
    text: "Отделение общеобразовательной подготовки",
    link: "",
  },
];

function Departments() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className={style.departments} ref={ref}>
      <h2 className={style.title}>Отделения</h2>

      {inView && (
        <motion.ul
          className={style.all}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Swiper slidesPerView={3} spaceBetween={30}>
            {data.map(({ image: source, text, link }) => (
              <SwiperSlide key={text} style={{ cursor: "grab" }}>
                <motion.li className={style.card} variants={item}>
                  <Link href={link}>
                    <div className={style.image}>
                      <Image src={source} />
                    </div>

                    <p className={style.text}>{text}</p>
                  </Link>
                </motion.li>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.ul>
      )}
    </section>
  );
}

export default Departments;
