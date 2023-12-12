import styles from '@widgets/NacProject/NacProject.module.scss'
import { arrayDocuments } from './dataDocuments.js'
const NacProjectList = ({ boolKey }) => (
	<ul className={styles.listPol}>
		{boolKey ? (
			arrayDocuments.map(el => (
				<li   key={el.item}>
					<a target='_blank' rel='norefferer' href={el.item}>
						{el.name}
					</a>
				</li>
			))
		) : (
			<li>
				<a target='_blank' rel='norefferer' href={arrayDocuments[0].item}>
					{arrayDocuments[0].name}
				</a>
			</li>
		)}
	</ul>
)

export default NacProjectList
