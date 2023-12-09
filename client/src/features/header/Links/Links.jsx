import LinkDropdown from '@features/header/LinkDropdown/LinkDropdown'
import { useActions } from '@app/hooks/useActions'
import { useDispatch, useSelector } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'
import Link from 'next/link'
import { getHeader } from '@app/store/header/header.slice'
import Triangle from '@public/assets/icons/triangle.svg'

const linksList = [
  { url: '/', text: 'Главная' },
  { url: '/', text: 'Наш колледж' },
  { url: '/', text: 'Абитуриенту' },
  { url: '/contacts', text: 'Контакты' },
  { url: '/', text: 'Общежитие', isCategory: true, links: [
    {url: '/', text: 'Ссылка'},
    {url: '/', text: 'Приём каких-то документов'},
    {url: '/', text: 'Информация касательно планирущих проживать в общежитии'},
    {url: '/', text: 'Привет'},
  ]},
  { url: '/', text: 'Студенту', isCategory: true, links: [
    {url: '/', text: ''},
    {url: '/', text: ''},
    {url: '/', text: ''},
    {url: '/', text: ''},
  ] },
]

const Links = () => {
  const { addHovered, removeHovered, addClosing } = useActions()
  const dispatch = useDispatch()

  const hovered = useSelector(getHeader).hovered
  const closing = useSelector(getHeader).closing


  const handleOnMouseEnter = (e) => {
    dispatch(addHovered(e.currentTarget.id))
  }

  const handleOnMouseLeave = (e) => {
    const id = e.currentTarget.id

    dispatch(removeHovered(id))
    dispatch(addClosing(id))
  }

  return linksList.map((link, index) => {
    const id = style.link + index
    link.id = id

    return (
      <li
        key={index}
        className={style.link}
        id={id}
        onMouseEnter={link.isCategory && handleOnMouseEnter}
        onMouseLeave={link.isCategory && handleOnMouseLeave}
      >
        <Link href={link.url}>{link.text}</Link>
        {link.isCategory && <Triangle className={style.dropdownIcon} />}

        {link.isCategory && hovered.includes(id) && <LinkDropdown data={link} />}
        {link.isCategory && closing.includes(id) && <LinkDropdown isClosing={true} data={link} />}
      </li>
    )
  })
}

export default Links
