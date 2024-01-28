import style from './../../../widgets/header/header.module.scss'
import Link from 'next/link'
import Triangle from '@public/assets/icons/triangle.svg'
import { linksList } from '../Links/Links'
import { useState } from 'react'

const MobileLinks = () => {
  return linksList.map((link, index) => {
    const [isClicked, setIsClicked] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleClick = () => {
      if (!isClicked) {
        setIsClicked(true)
        return setIsClosing(false)
      }

      setIsClosing(true)
      setTimeout(() => setIsClicked(false), 350)
    }

    return (
      <li key={index} className={link.isCategory ? style.categoryLink : style.link} onClick={handleClick}>
        <Link href={link.url}>{link.text}</Link>
        {link.isCategory && (
          <Triangle
            className={`${style.dropdownIcon} ${
              isClicked && style.dropdownIconActive
            }`}
          />
        )}

        {link.isCategory && (
          <div
            className={`${style.mobileDropdown} ${
              isClicked && style.mobileDropdownActive
            }`}
          >
            <ul className={`overflow-hidden`}>
                <div className={style.mobileDropdownDelimiter}></div>
              {link.links.map((link, index) => (
                <li key={index} className={style.link}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    )
  })
}

export default MobileLinks
