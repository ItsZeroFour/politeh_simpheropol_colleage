import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import style from './LinkDropdown.module.scss'

const LinkDropdown = ({ data, isClosing }) => {
	console.log(data)
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

					{data.map((link, index) => (
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
