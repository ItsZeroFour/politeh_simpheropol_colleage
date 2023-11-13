'use client'

import Image from 'next/image'
import search from '@public/assets/icons/search.svg?url'
import style from './SearchBar.module.scss'
import Link from 'next/link'
import { useState } from 'react'

// TODO: добавить запрос на получение данных для поиска

const searchData = [
  {
    keywords: ['Специальности', 'Профессии'],
    link: '/',
    text: 'Специальности для обучения',
  },
  {
    keywords: ['Преподаватели', 'Учителя'],
    link: '/',
    text: 'Преподаватели колледжа',
  },
  {
    keywords: ['Карта', 'Банковская карта'],
    link: '/',
    text: 'Информация по банковским картам',
  },
  {
    keywords: ['Италия', 'рим'],
    link: '/',
    text: 'О великом Риме',
  },
  {
    keywords: ['Документы', 'Бумаги'],
    link: '/',
    text: 'Документы для поступления',
  },
  {
    keywords: ['Общежитие', 'общага'],
    link: '/',
    text: 'Информация по общежитию',
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


// TODO: добавить проверку на начилие клбючевых слов

const handleInput = (setItems) => {
  const input = getInputElement()
  const value = input.value.toLocaleLowerCase()

  const resultSearch = []

  if (value === '') return setItems([])

  for (let data of searchData) {
    for (let word of [...data.keywords, ...data.text.split(' ')]) {
      word = word.toLocaleLowerCase()
      const isCompared = word.match(new RegExp(`${value}`, 'gui'))

      if (isCompared) {
        resultSearch.push(data)
        break
      }
    }
  }

  setItems(resultSearch)
}

const dropdownItems = items => {
  return items.map((item, index) => (
    <li key={index} className={style.item}>
      <Link href={item.link}>{item.text}</Link>
    </li>
  ))
}

const notFound = () => {
  return <li className={style.item + ' ' + style.notFound}>
    Ничего не найдено...
  </li>
}

const searchBarHandleClick = () => {
  const input = getInputElement()
  input.focus()
}

const SearchBar = () => {
  const [items, setItems] = useState([])

  console.log(items)

  return (
    <>
      <div className={style.searchBar} onClick={searchBarHandleClick}>
        <Image src={search} alt='Иконка поиска' />
        <input
          onFocus={openDropdown}
          onInput={() => {
            handleInput(setItems)
          }}
          onBlur={closeDropdown}
          className={style.input}
          type='text'
          placeholder='Поиск по сайту...'
        />
      </div>

      <div className={style.dropdown}>
        <ul>
          <div className={style.verticalSpace}></div>
          {items.length ? dropdownItems(items) : notFound()}
          <div className={style.verticalSpace}></div>
        </ul>
      </div>
    </>
  )
}

export default SearchBar
