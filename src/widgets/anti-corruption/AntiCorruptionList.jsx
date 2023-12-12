'use client'
import styles from '@widgets/NacProject/NacProject.module.scss'
import { firstData } from './antiCorruptionData.js'
const AntiCorruptionList = ({ boolKey }) => {
	return (
		<ul className={styles.listPol}>
			{boolKey ? (
				firstData.map(el => (
					<li className={styles.antiCorList} key={el.index}>
						<a target='_blank' rel='norefferer' href={el.link}>
							{el.index + '. '}
							{el.item}
						</a>
					</li>
				))
			) : (
				<li>
					<a
						target='_blank'
						rel='norefferer'
						className={styles.antiCorList}
						href={firstData[0].link}
					>
						{firstData[0].index + '. '}
						{firstData[0].item}
					</a>
				</li>
			)}
		</ul>
	)
}

export default AntiCorruptionList
