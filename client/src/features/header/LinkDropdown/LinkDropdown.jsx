import Link from 'next/link'
import style from './LinkDropdown.module.scss'
import { useDispatch } from 'react-redux'
import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'

const LinkDropdown = ({ data, isRemoving }) => {
  // const dispatch = useDispatch()
  // const { removeClosing } = useActions()

  // if (isClosing) {
  //   setTimeout(() => dispatch(removeClosing(data.id)), 3000)
  // }

  return (
    <div className={style.dropdown}>
      <nav className='overflow-hidden'>
        <div className={`${style.container} ${isRemoving && style.dropdownRemoving}`}>
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
