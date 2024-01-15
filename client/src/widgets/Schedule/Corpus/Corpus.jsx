'use client'

import Pairing from '@entities/Schedule/Pairing/Pairing'
import style from './Corpus.module.scss'
import Pair from '@entities/Schedule/Pair/Pair'
import CorpusSearchBar from '@features/Schedule/CorpusSearchBar/CorpusSearchBar'
import DarkButton from '@shared/buttons/DarkButton/DarkButton'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSchedule } from '@app/store/schedule/schedule.slice'
import { useActions } from '@app/hooks/useActions'


// const onClick = () => {}

// const searchData = [
//   {
//     keywords: ['Специальности', 'Профессии'],
//     onClick,
//     text: 'Специальности для обучения',
//   },
//   {
//     keywords: ['Преподаватели', 'Учителя'],
//     onClick,
//     text: 'Преподаватели колледжа',
//   },
//   {
//     keywords: ['Карта', 'Банковская карта'],
//     onClick,
//     text: 'Информация по банковским картам',
//   },
//   {
//     keywords: ['Италия', 'рим'],
//     onClick,
//     text: 'О великом Риме',
//   },
//   {
//     keywords: ['Документы', 'Бумаги'],
//     onClick,
//     text: 'Документы для поступления',
//   },
//   {
//     keywords: ['Общежитие', 'общага'],
//     onClick,
//     text: 'Информация по общежитию',
//   },
// ]

const Corpus = ({ data, title }) => {
  const scheduleRef = useRef(null)
  const dispatch = useDispatch()

  const scheduleState = useSelector(getSchedule)
  const clicked = scheduleState.clicked
  const dayOfWeek = scheduleState.dayOfWeek
  const { addFavourited } = useActions()

  const _pairs = [...data[dayOfWeek][0][1][1].keys()].map((key) => key + 1)
  const pairs =
    dayOfWeek === 'monday' ? [0, ..._pairs.slice(0, -1)] : _pairs

  const handleAddFavouritedClick = (e) => {
    if (!clicked || !clicked.getAttribute('type')) return

    const type = clicked.getAttribute('type')
    const value = clicked.textContent

    dispatch(addFavourited({ key: type, value }))
    scheduleRef.current.querySelector('.corpus__add-favourite-button')?.classList.add('hidden')
  }

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!scheduleRef.current?.contains(event.target)) {
        scheduleRef.current.querySelector('.corpus__add-favourite-button')?.classList.add('hidden')
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [scheduleRef])

  return (
    <section className={style.corpus}>
      <div className={style.head}>
        <h2 className={style.title}>{title}</h2>
        {/* <CorpusSearchBar data={searchData} /> */}
      </div>

      <div className={style.schedule} ref={scheduleRef}>
        <DarkButton
          text='Добавить в избранное'
          classNames='hidden corpus__add-favourite-button'
          onClick={handleAddFavouritedClick}
        />

        {data[dayOfWeek].map((line, index) => (
          <div key={index} className={style.line}>
            <Pairing numbers={pairs} />
            {line.map(([groupName, scheduleOfGroup], index) => (
              <Pair
                key={index}
                column={index + 1}
                group={groupName}
                schedule={scheduleOfGroup}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Corpus

