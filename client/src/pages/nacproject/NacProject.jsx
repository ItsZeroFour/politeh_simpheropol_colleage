import S12 from '@public/assets/images/nationproject/1S-2.png'
import S13 from '@public/assets/images/nationproject/1S3.png'
import doRemonta2 from '@public/assets/images/nationproject/Do-remonta-aud-1.png'
import doRemonta1 from '@public/assets/images/nationproject/Do-remonta-aud.png'
import classroom from '@public/assets/images/nationproject/V-processe-remonta309.png'
import Web5 from '@public/assets/images/nationproject/Veb-5.png'
import Image from 'next/image'

import doRemonta from '@public/assets/images/nationproject/do-remonta-aud.png'
import Web3 from '@public/assets/images/nationproject/veb-3.png'
import Web4 from '@public/assets/images/nationproject/veb-4.png'
import Web2 from '@public/assets/images/nationproject/veb2.png'

import styles from '@widgets/NacProject/NacProject.module.scss'
import { items } from '@widgets/NacProject/NacProjectArticlesData.js'
const NacProject = () => {
	const [firstArticle, ...otherArticles] = items

	return (
		<div className={styles.rootNacProject}>
			<div className={styles.NacProjectTitle}>
				<div className={styles.NacProjectFirst}>
					<span>НацПроект</span>
					<div>
						<p className={styles.articles}>{firstArticle.article}</p>
					</div>
				</div>
				<div className={styles.NacProjectArticlesMap}>
					{otherArticles.map(el => {
						return (
							<p key={el.article} className={styles.articles}>
								{el.article}
							</p>
						)
					})}
				</div>
			</div>
			<div className={styles.NacProjectTitle}>
				<span>Аудитории до ремонта</span>
				<div>
					<div className={styles.gridRooms}>
						<Image
							className={styles.gridRoomsElement}
							src={classroom}
							alt='classroom-do-remonta'
						/>
						<Image
							className={styles.gridRoomsElement}
							src={doRemonta}
							alt='parti'
						/>
						<Image
							className={styles.gridRoomsElement}
							src={doRemonta1}
							alt='parti'
						/>
						<Image
							className={styles.gridRoomsElement}
							src={doRemonta2}
							alt='parti'
						/>
						<Image />
					</div>
				</div>
			</div>
			<div className={styles.NacProjectTitle}>
				<span>Мастерская Веб-технологии</span>
				<div>
					<div className={styles.doubleWeb}>
						<Image src={Web5} />
						<Image src={Web3} />
					</div>
					<div>
						<Image src={Web4} />
					</div>
				</div>
			</div>
			<div className={styles.NacProjectTitle}>
				<span>
					Мастерская ИТ-решения для бизнеса на платформе 1С Предприятие 8
				</span>
				<div>
					<div className={styles.doubleWeb}>
						<Image src={S13} />
						<Image src={Web2} />
					</div>
					<div>
						<Image src={S12} />
					</div>
				</div>
			</div>
			<div className={styles.block_desc}>
				<p>
					Положение о деятельности мастерских, созданных на базе ГБПОУ РК
					«Симферопольский политехнический колледж»
				</p>
				<p>Веб-технологии 1.1</p>
				<div className={styles.centered}>
					<button className={styles.buttonPolygon}>
						<span>Смотреть все</span>
						<div className={styles.poligon}></div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default NacProject
