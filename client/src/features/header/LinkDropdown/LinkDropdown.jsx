import { useActions } from '@app/hooks/useActions'
import Triangle from '@public/assets/icons/triangle.svg'
import axios from 'axios'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import style from './LinkDropdown.module.scss'
const LinkDropdown = ({ data, isClosing }) => {
	const Clicked = url => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getonepage`,
					{ params: { url } }
				)
				console.log('FJFJFJFJFJF', somedata)
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}
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

					{data.nestedObjects.map((link, index) => (
						<li
							onClick={() => Clicked(link.url)}
							className={style.item}
							key={index}
						>
							<Link href={link.url}>{link.text}</Link>
						</li>
					))}
				</div>
			</nav>
		</div>
	)
}

export default LinkDropdown
