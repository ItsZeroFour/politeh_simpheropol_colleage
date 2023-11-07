'use client'
import styles from '@widgets/methods-material/methods.module.scss'
import useDownloader from 'react-use-downloader'
const firstPath = '/data/anticor/methodsmaterial/Antikorruptsionny-e-mery-.ppt'
const firstName = 'Antikorruptsionny-e-mery-.ppt'
const secondPath =
	'data/anticor/Beseda-Korruptsiya-yavlenie-polit-ili-e-kon-(1).docx'
const secondName = 'Beseda-Korruptsiya-yavlenie-polit-ili-e-kon-(1).docx'
const MethodsMaterial = () => {
	const { download } = useDownloader()
	return (
		<ul>
			<li
				className={styles.materialElement}
				onClick={() => download(firstPath, firstName)}
			>
				1. Антикоррупционные меры
			</li>{' '}
			<li
				className={styles.materialElement}
				onClick={() => download(secondPath, secondName)}
			>
				2. Беседа Коррупция — явление полит или экон
			</li>
		</ul>
	)
}

export default MethodsMaterial
