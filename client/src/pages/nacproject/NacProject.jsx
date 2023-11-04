import { items } from '../../widgets/NacProject/NacProjectArticles'
const NacProject = () => {
	const { firstArticle, otherArticles } = items

	console.log(firstArticle)
	return (
		<div>
			{/* <div className={styles.NacProjectTitle}>
				<span>НацПроект</span>
				<p className={styles.articles}>{firstArticle.article}</p>
			</div>
			<div style={{ marginTop: 38 }}>
				{otherArticles.map(el => {
					return (
						<p key={el.article} className={styles.articles}>
							{el.article}
						</p>
					)
				})}
			</div> */}
		</div>
	)
}

export default NacProject
