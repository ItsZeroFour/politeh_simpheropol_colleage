
import { useActions } from '@app/hooks/useActions'
import { getHeader } from '@app/store/header/header.slice'
import LinkDropdown from '@features/header/LinkDropdown/LinkDropdown'
import Triangle from '@public/assets/icons/triangle.svg'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './../../../widgets/header/header.module.scss'


const Links = () => {
	const [linksServer, setLinksServer] = useState([])
	const [closingLinks, setClosingLinks] = useState([])
	useEffect(() => {
		const fetchingData = async () => {
			try {
				const data = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`
				)
				setLinksServer([...data.data])
			} catch (error) {
				alert.error('error' + error)
			}
		}
		fetchingData()
	}, [])

	const { addHovered, removeHovered, addClosing } = useActions()
	const dispatch = useDispatch()

	const hovered = useSelector(getHeader).hovered
	const closing = useSelector(getHeader).closing

	const handleOnMouseEnter = e => {
		dispatch(addHovered(e.currentTarget.id))
	}

	const handleOnMouseLeave = e => {
		const id = e.currentTarget.id
		dispatch(removeHovered(id))
		dispatch(addClosing(id))
		setClosingLinks(prev => [...prev, id])
	}

	return linksServer.map((link, index) => {
		const id = style.link + index
		link.id = id
		return (
			<li
				key={index}
				className={style.link}
				id={id}
				onMouseEnter={link.nestedObjects.length !== 0 && handleOnMouseEnter}
				onMouseLeave={link.nestedObjects.length !== 0 && handleOnMouseLeave}
			>
				<Link href={link.url}>{link.text}</Link>
				{link.nestedObjects.length !== 0 && (
					<Triangle className={style.dropdownIcon} />
				)}
				{link.nestedObjects.length !== 0 && hovered.includes(id) && (
					<LinkDropdown data={link} />
				)}
				{link.nestedObjects.length !== 0 && closing.includes(id) && (
					<LinkDropdown isClosing={true} data={link} />
				)}
			</li>
		)
	})

	return memoizedLinks
}

export default Links

