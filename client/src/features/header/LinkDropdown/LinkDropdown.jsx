'use client'
import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import style from './LinkDropdown.module.scss'
const LinkDropdown = ({ data, isClosing }) => {
	const router = useRouter()
	const Clicked = async url => {
		try {
			const somedata = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getonepage`,
				{ params: { url } }
			)

			if (somedata.status == 200) {
				console.log(somedata.data.message.pageUrl)
				router.push('/our-colleage/' + somedata.data.message.pageUrl)
			}
		} catch (error) {
			router.push(`${url}`)
		}
	}
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
						<Triangle
							className={`${style.icon} ${isClosing && style.iconClosing}`}
						/>
					</p>

					<div className={style.border}></div>

					{data.nestedObjects.map((link, index) => (
						<li
							//	onClick={() => Clicked(link.url)}
							className={style.item}
							key={index}
						>
							{/* {dataFetching.status == 200 && (
								<Link href={'/our-colleage/' + link.url}>{link.text}</Link>
							)}
							{dataFetching.status == 400 && (
								<Link href={link.url}>{link.text}</Link>
							)} */}

							<div
								style={{ cursor: 'pointer' }}
								onClick={() => Clicked(link.url)}
							>
								{link.text}
							</div>
						</li>
					))}
				</div>
			</nav>
		</div>
	)
}

export default LinkDropdown
