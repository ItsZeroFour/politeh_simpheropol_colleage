import styles from '@widgets/NacProject/NacProject.module.scss'
import { arrayDocuments } from './dataDocuments.js'
const NacProjectList = ({ boolKey }) => (
	<ul className={styles.listPol}>
		{boolKey ? (
			arrayDocuments.map(el => (
				<li key={el.item}>
					<a href={el.item}>{el.name}</a>
				</li>
			))
		) : (
			<li>
				<a href={arrayDocuments[0].item}>{arrayDocuments[0].name}</a>
			</li>
		)}
	</ul>
)

export default NacProjectList
