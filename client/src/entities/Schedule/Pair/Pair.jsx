'use client'

import { useEffect, useRef, useState } from 'react'
import style from './Pair.module.scss'
import corpusStyle from '@widgets/Schedule/Corpus/Corpus.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSchedule } from '@app/store/schedule/schedule.slice'
import { useActions } from '@app/hooks/useActions'
import { useFavouritedButton } from '@app/hooks/useFavouriteButton'

const Pair = ({ group, schedule, column }) => {
  const dispatch = useDispatch()

  const scheduleState = useSelector(getSchedule)
  const clicked = scheduleState.clicked
  const { setClicked } = useActions()

  const pairRef = useRef(null)

  const elements = []
  let favouriteButton

  useEffect(() => {
    favouriteButton = useFavouritedButton(pairRef.current)
  }, [scheduleState])

  const handleHover = (e) => {
    const element = e.currentTarget
    const pair = element.getAttribute('pair')
    const column = element.closest('.' + style.pair).getAttribute('column')
    const line = element.closest('.' + corpusStyle.line)

    for (let i = column; i >= 0; i--) {
      const columnElement = line.querySelector(`[column="${i}"]`)
      const target = columnElement.querySelector(`[pair="${pair}"]`)

      target.classList.add(style.hovered)
      elements.push(target)
    }
  }

  const handeMouseLeave = (e) => {
    elements.forEach((element) => element.classList.remove(style.hovered))
  }


  const getClickHandler = () => {
    return (e) => {
      const element = e.currentTarget

      if (!favouriteButton) return
      if (clicked && clicked !== element) {
        favouriteButton.classList.add('hidden')
      }

      favouriteButton.style.left = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft + 'px'
      favouriteButton.style.top = e.clientY + document.body.scrollTop + document.documentElement.scrollTop + 'px'

      favouriteButton.classList.remove('hidden')
      dispatch(setClicked(element))
    }
  }

  const handleGroupClick = getClickHandler()
  const handleLecturerClick = getClickHandler()
  const handleCabinetClick = getClickHandler()

  return (
    <div className={style.pair} column={column} ref={pairRef}>
      <p
        className={style.title}
        type='group'
        onClick={handleGroupClick}
        onContextMenu={(e) => {
          e.preventDefault()
          handleGroupClick(e)
        }}
      >
        {group}
      </p>

      {schedule.map((lesson, i) => (
        <div
          key={i}
          pair={i}
          className={style.item}
          onMouseEnter={handleHover}
          onMouseLeave={handeMouseLeave}
        >

          {(lesson && lesson.name) ? (
            <>
              <p>{lesson.name}</p>

              <div className={style.lecture}>
                <p type='lecturer' className={style.lecturer} onClick={handleLecturerClick}>{lesson.lecturer}</p>
                <p type='cabinet' className={style.cabinet} onClick={handleCabinetClick}>{lesson.cabinet}</p>
              </div>
            </>
          ) : (
            <div className={style.noPair}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Pair
