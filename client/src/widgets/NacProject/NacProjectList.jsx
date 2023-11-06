import { arrayDocuments } from './dataDocuments.js'
import styles from '@widgets/NacProject/NacProject.module.scss'
const NacProjectList = ({ boolKey }) => (
	<ul className={styles.listPol}>
		{boolKey ? (
			arrayDocuments.map(el => (
				<li>
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
