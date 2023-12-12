import React from 'react'
import style from './EssentialLinks.module.scss'
import Link from 'next/link'


const data = [
    {
        text: 'Обучение с применением ЭО и ДОТ',
        url: '/'
    },
    {
        text: 'Пройди бесплатное обучение',
        url: '/'
    },
    {
        text: 'АИС «Электронный журнал»',
        url: '/'
    },
    {
        text: 'Закрытое образовательное пространство для педагогов, учеников и их родителей  Сферум',
        url: '/'
    },
    {
        text: 'Платформа дистанционного обучения ГБПОУ РК «Симферопольский политехнический колледж»',
        url: '/'
    },
    {
        text: 'Вы можете оставить мнение о нашей организации.',
        url: '/'
    },
]


function EssentialLinks() {
  return (
    <>
        <div className={style.delimiter}></div>

        <nav className={style.links}>
            <h2 className={style.title}>Основные ссылки</h2>
            {data.map(({ text, url}) => (
                <li className={style.link}>
                    <Link href={url}>{text}</Link>
                </li>
            ))}
        </nav>
    </>
  )
}

export default EssentialLinks