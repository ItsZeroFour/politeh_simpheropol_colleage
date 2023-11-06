import { arrayDocuments } from './dataDocuments.js'

const NacProjectList = ({ boolKey }) => (
	<ul>
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
