import Triangle from '@public/assets/icons/triangle.svg'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from './../../../widgets/header/header.module.scss'
const MobileLinks = () => {
	const [linksServer, setLinksServer] = useState([])
	useEffect(() => {
		const fetchingData = async () => {
			try {
				const data = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`
				)
				setLinksServer([...data.data])
			} catch (error) {
				alert('error' + error)
			}
		}
		fetchingData()
	}, [])

	// Move the useState calls outside of the map function
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

	return linksServer.map((link, index) => {
		console.log(link)
		return (
			<li
				key={index}
				className={
					link.nestedObjects.length !== 0 ? style.categoryLink : style.link
				}
				onClick={handleClick}
			>
				<Link href={link.url}>{link.text}</Link>
				{link.nestedObjects.length !== 0 && (
					<Triangle
						className={`${style.dropdownIcon} ${
							isClicked && style.dropdownIconActive
						}`}
					/>
				)}

				{link.nestedObjects.length !== 0 && (
					<div
						className={`${style.mobileDropdown} ${
							isClicked && style.mobileDropdownActive
						}`}
					>
						<ul className={'overflow-hidden'}>
							<div className={style.mobileDropdownDelimiter}></div>
							{link.nestedObjects.map((link, index) => (
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
