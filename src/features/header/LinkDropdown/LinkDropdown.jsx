import Link from 'next/link'
import style from './LinkDropdown.module.scss'
import { useDispatch } from 'react-redux'
import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'

const LinkDropdown = ({ data, isClosing }) => {
  const dispatch = useDispatch()
  const { removeClosing } = useActions()

  if (isClosing) {
    setTimeout(() => dispatch(removeClosing(data.id)), 300)
  }

  return (
    <div className={`${style.dropdown} ${isClosing && style.dropdownClosing}`}>
      <nav>
        <div className={style.container}>
          <p className={style.title}>
            {data.text}
            <Triangle className={`${style.icon} ${isClosing && style.iconClosing}`} />
          </p>

          <div className={style.border}></div>

          {data.links.map((link, index) => (
            <li className={style.item} key={index}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}

        </div>
      </nav>
    </div>
  )
}

export default LinkDropdown
