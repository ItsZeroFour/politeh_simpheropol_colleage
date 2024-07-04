'use client'

import style from './Departments.module.scss'

import partTime from '@public/assets/images/home/part_time.png'
import it from '@public/assets/images/home/it.png'
import money from '@public/assets/images/home/money.png'
import full from '@public/assets/images/home/full-deportament.jpg'
import Link from 'next/link'
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


const slides = () => {
  return (
    <>
      {data.map(({ image: source, text, link }) => (
        <SwiperSlide key={text} className={style.slide}>
          <li className={style.card}>
            <Link href={link}>
              <div className={style.image}>
                <img src={source.src} placeholder='blur' />
              </div>
              <p className={style.text}>{text}</p>
            </Link>
          </li>
        </SwiperSlide>
      ))}
    </>
  )
}


function Departments() {
  const isSmallDevice = useMediaQuery('(max-width: 768px)')
  const slidesPerView = isSmallDevice ? 1 : 3

  return (
    <section className={style.departments}>
      <h2 className={style.title}>Отделения</h2>

      <ul className={style.all}>
        <Swiper spaceBetween={30} slidesPerView={slidesPerView}>
          {slides()}
        </Swiper>
      </ul>
    </section>
  )
}

export default Departments
