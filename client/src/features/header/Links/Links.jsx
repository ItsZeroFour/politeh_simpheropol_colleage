import LinkDropdown from '@features/header/LinkDropdown/LinkDropdown'
import { useActions } from '@app/hooks/useActions'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'
import Link from 'next/link'


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
    const state = useSelector((state) => state)


    // return (
    //     <div onClick={() => addHovered('works bitch')}>
    //         ffefeef
    //     </div>
    // )

    return linksList.map((link, index) => (
        <li
            key={index}
            className={style.link}
            ref={linkRef}
            // onMouseOut={() => removeHovered(lnik)}
        >
            <Link href={link.url}>{link.text}</Link>
        </li>
    ))
}

export default Links

