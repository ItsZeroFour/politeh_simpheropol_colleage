import LinkDropdown from '@features/header/LinkDropdown/LinkDropdown'
import { useActions } from '@app/hooks/useActions'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'
import Link from 'next/link'
import { getHeader } from '@app/store/header/header.slice'


const linksList = [
    { url: '/', text: 'Главная' },
    { url: '/', text: 'Наш колледж' },
    { url: '/', text: 'Абитуриенту' },
    { url: '/contacts', text: 'Контакты' },
    { url: '/', text: 'Общежитие' },
    { url: '/', text: 'Студенту' },
]

const Links = () => {
    const linkRef = useRef()
    const { addHovered, removeHovered } = useActions()

    const state = useSelector(getHeader)
    console.log(state)

    const dispatch = useDispatch()


    const handleLinkClick = () => {
        dispatch(addHovered('koole'))
    }

    return linksList.map((link, index) => (
        <li
            key={index}
            className={style.link}
            ref={linkRef}
            onClick={handleLinkClick}
            // onMouseOut={() => removeHovered(lnik)}
        >
            <Link href={link.url}>{link.text}</Link>
        </li>
    ))
}

export default Links

