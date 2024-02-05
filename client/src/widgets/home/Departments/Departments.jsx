'use client'

import style from './Departments.module.scss'

import partTime from '@public/assets/images/home/part_time.png'
import it from '@public/assets/images/home/it.png'
import money from '@public/assets/images/home/money.png'
import full from '@public/assets/images/home/full-deportament.jpg'
import Image from 'next/image'
import Link from 'next/link'
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '@app/hooks/useMediaQuery'

const data = [
  {
    image: partTime,
    text: 'Заочная форма обучения',
    link: '/remote-departament',
  },
  {
    image: it,
    text: 'Технико-информационное отделение',
    link: '/technical-departament',
  },
  {
    image: money,
    text: 'Отделение пищевых технологий, экономико-бухгалтерского учета и гостиничного дела',
    link: '/economic-departament',
  },

  {
    image: full,
    text: 'Отделение общеобразовательной подготовки',
    link: 'general-education-departament',
  },
]

function Departments() {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

  // const container = {
  //   hidden: { opacity: 1, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // }

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // }

  // const isDesktop = useMediaQuery('(min-width: 960px)')

  return (
    // <section className={style.departments} ref={ref}>
    <section className={style.departments}>
      <h2 className={style.title}>Отделения</h2>

      <ul
        className={style.all}
        // variants={container}
        // initial='hidden'
        // animate='visible'
      >
        <Swiper slidesPerView={3} spaceBetween={30}>
          {data.map(({ image: source, text, link }) => (
            <SwiperSlide key={text} style={{ cursor: 'grab' }}>
              {/* <li className={style.card} variants={item}> */}
              <li className={style.card}>
                <Link href={link}>
                  <div className={style.image}>
                    <Image src={source} />
                  </div>

                  <p className={style.text}>{text}</p>
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  )
}

export default Departments
