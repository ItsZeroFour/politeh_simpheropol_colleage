'use client'

import React from 'react'
import style from './LinkDropdown.module.scss'
import Link from 'next/link'

const LinkDropdown = React.memo(function LinkDropdown({ data, isRemoving }) {
  const isOurColleage = data.text === 'Наш колледж'

  return (
    <div className={style.dropdown}>
      <nav className='overflow-hidden'>
        <div className={`${style.container} ${isRemoving && style.dropdownRemoving}`}>
          {data.nestedObjects.map((link, index) => {
			const url = isOurColleage ? '/our-colleage/' + link.url : link.url

            return <li className={style.item} key={index}>
              <Link href={url} style={{ cursor: 'pointer' }}>
                {link.text}
              </Link>
            </li>
          })}
        </div>
      </nav>
    </div>
  )
})

export default LinkDropdown
