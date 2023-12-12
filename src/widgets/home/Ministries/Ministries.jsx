'use client'

import style from './Ministries.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Navigation.scss'

import ArrowLeft from '@public/assets/icons/arrow_left.svg'
import ArrowRight from '@public/assets/icons/arrow_right.svg'

import krymGerbImage from '@public/assets/images/home/gerb_krym.png'
import rightsImage from '@public/assets/images/home/pravo.png'
import educationImage from '@public/assets/images/home/mineducation.png'
import rknImage from '@public/assets/images/home/rkn.png'
import krippoImage from '@public/assets/images/home/krippo.png'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const handleSlideHover = (e) => {
  const element = e.currentTarget
  const popup = element.querySelector('.' + style.popupCard)

  popup.classList.add(style.popupCardActive)
}

const handleSlideMouseOut = (e) => {
  const element = e.currentTarget
  const popup = element.querySelector('.' + style.popupCard)

  if (!popup.classList.contains(style.popupCard)) return

  popup.classList.remove(style.popupCardActive)
}

const data = [
  {
    url: '/',
    text: 'Республика Крым',
    sourceImage: krymGerbImage,
  },
  {
    url: '/',
    text: 'Официальный интрернет портал правовой информации',
    sourceImage: rightsImage,
  },
  {
    url: '/',
    text: 'Министерство образования науки и молодежи респ. Крым',
    sourceImage: educationImage,
  },
  {
    url: '/',
    text: 'Роскомнадзор',
    sourceImage: rknImage,
  },
  {
    url: '/',
    text: 'Крымский республиканский институт постдипломного педагогического образования',
    sourceImage: krippoImage,
  },
]

const slides = () => {
  return data.map(({ url, text, sourceImage }) => (
    <SwiperSlide
      onMouseEnter={handleSlideHover}
      onMouseLeave={handleSlideMouseOut}
      className={style.slide}
    >

      <Image className={style.popupImage} src={sourceImage} alt='Логотип партнёра' />

      <Link href={url}>
        <div className={style.popupCard}>
          <div className={style.popupText}>{text}</div>
        </div>
      </Link>
    </SwiperSlide>
  ))
}

function Ministries() {
  const sliderNavigationLeft = useRef(null)
  const sliderNavigationRight = useRef(null)

  return (
    <>
      <div className={style.delimiter}></div>

      <div className={style.ministries}>
        <ArrowLeft className={style.sliderLeft} ref={sliderNavigationLeft} />

        <Swiper
          className={style.slider}
          navigation={{
            prevEl: '.' + style.sliderLeft,
            nextEl: '.' + style.sliderRight,
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
        >
          {slides()}

        </Swiper>

        <ArrowRight className={style.sliderRight} ref={sliderNavigationRight} />
      </div>
    </>
  )
}

export default Ministries
