'use client'
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

const Polozenye = '/data/NacProject/Polozhenie.pdf'

import styles from '@widgets/NacProject/NacProject.module.scss'
import { items } from '@widgets/NacProject/NacProjectArticlesData.js'
import NacProjectList from '@widgets/NacProject/NacProjectList.jsx'
import { useState } from 'react'
const NacProject = () => {
	const [firstArticle, ...otherArticles] = items
	const [isopened, setIsOpened] = useState(false)
	const openAllList = () => {
		setIsOpened(prevState => (prevState == false ? true : false))
	}

	return (
		<div className={styles.rootNacProject}>
			<div className={styles.NacProjectTitle}>
				<div className={styles.NacProjectFirst}>
					<div>
						<span className={styles.textTitle}>НацПроект</span>
					</div>
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
				<span className={styles.textTitle}>Аудитории до ремонта</span>
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
					</div>
				</div>
			</div>
			<div className={styles.NacProjectTitle}>
				<span className={styles.textTitle}>Мастерская Веб-технологии</span>
				<div>
					<div className={styles.doubleWeb}>
						<Image
							src={Web5}
							className={styles.doubleWebElement}
							alt='cabinet'
						/>
						<Image
							src={Web3}
							alt='cabinet'
							className={styles.doubleWebElement}
						/>
					</div>
					<div>
						<Image src={Web4} alt='cabinet' />
					</div>
				</div>
			</div>
			<div className={styles.NacProjectTitle}>
				<span className={styles.textTitle}>
					Мастерская ИТ-решения для бизнеса на платформе 1С Предприятие 8
				</span>
				<div>
					<div className={styles.doubleWeb}>
						<Image
							src={S13}
							alt='cabinet'
							className={styles.doubleWebElement}
						/>
						<Image
							src={Web2}
							alt='cabinet'
							className={styles.doubleWebElement}
						/>
					</div>
					<div>
						<Image src={S12} alt='img' />
					</div>
				</div>
			</div>
			<div className={styles.block_desc}>
				<a
					href={Polozenye}
					target='_blank'
					rel='norefferer'
					className={styles.block_desc_article}
				>
					Положение о деятельности мастерских, созданных на базе ГБПОУ РК
					«Симферопольский политехнический колледж»
				</a>
				{<NacProjectList boolKey={isopened} />}
				<div className={styles.centered}>
					<button
						onClick={() => openAllList()}
						className={styles.buttonPolygon}
					>
						<span>{!isopened ? 'Смотреть все' : 'Закрыть все'}</span>
						<div
							className={!isopened ? styles.poligon : styles.reversedPoligon}
						></div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default NacProject
