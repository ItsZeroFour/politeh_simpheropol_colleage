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
      <li key={index} className={style.link} onClick={handleClick}>
        <Link href={link.url}>{link.text}</Link>
        {link.isCategory && (
          <Triangle
            className={`${style.dropdownIcon} ${
              isClicked && style.dropdownIconActive
            }`}
          />
        )}

        {link.isCategory && isClicked && (
          <div className={`${style.mobileDropdown} ${isClosing && style.mobileDropdownClosing}`}>
            {link.links.map((link, index) => (
              <li className={'3'} key={index}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </div>
        )}
      </li>
    )
  })
}

export default MobileLinks
