'use client'

import Image from "next/image"
import search from "@public/assets/icons/search.svg"
import style from './SearchBar.module.scss'
import Link from "next/link"
import { useState } from "react"

const searchData = [
  {
    keywords: ['Специальности', 'Профессии'],
    link: '/',
    text: 'Специальности для обучения'
  },
  {
    keywords: ['Преподаватели', 'Учителя'],
    link: '/',
    text: 'Преподаватели колледжа'
  },
  {
    keywords: ['Карта', 'Банковская карта'],
    link: '/',
    text: 'Информация по банковским картам'
  },
  {
    keywords: ['Италия', 'рим'],
    link: '/',
    text: 'О великом Риме'
  },
  {
    keywords: ['Документы', 'Бумаги'],
    link: '/',
    text: 'Документы для поступления'
  },
  {
    keywords: ['Общежитие', 'общага'],
    link: '/',
    text: 'Информация по общежитию'
  },
]

const getDropdownElement = () => {
  return document.body.querySelector('.' + style.dropdown)
}

const getInputElement = () => {
  return document.body.querySelector('.' + style.input)
}

const openDropdown = () => {
  const dropdown = getDropdownElement()
  dropdown.classList.add(style.dropdown_active)
}

const closeDropdown = () => {
  const dropdown = getDropdownElement()
  dropdown.classList.remove(style.dropdown_active)
}

const handleInput = () => {
  const input = getInputElement()
  const value = input.value.toLocaleLowerCase()

  const resultSearch = []

  for (let data of searchData) {
    data.keywords.forEach(word => {
      word = word.toLocaleLowerCase()
      //word.match(//gui)
    })
  }
}


const SearchBar = () => {
  let points, setPoints = useState([])
  return (
  <>
    <div className={style.searchBar}>
      <Image src={search} alt="Иконка поиска" />
      <input onFocus={openDropdown} onInput={handleInput} onBlur={closeDropdown} className={style.input} type="text" placeholder="Поиск по сайту..." />
    </div>

    <div className={style.dropdown}>
      <ul>
        <div className={style.verticalSpace}></div>
        <div className={style.verticalSpace}></div>
      </ul>
    </div>
  </>
  )
}

export default SearchBar
