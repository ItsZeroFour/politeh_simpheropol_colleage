'use client'
import styles1 from '@widgets/NacProject/NacProject.module.scss'
import styles from '@widgets/anti-corruption/Anticorruption.module.scss'
import { useState } from 'react'
import AntiCorruptionImages from './AntiCorruptionImages'
import AntiCorruptionList from './AntiCorruptionList.jsx'
const Anticorruption = () => {
	const [isopened, setIsOpened] = useState(false)
	const openAllList = () => {
		setIsOpened(prevState => (prevState == false ? true : false))
	}
	console.log(<AntiCorruptionList />)
	return (
		<div className={styles.root}>
			<span className={styles.titleFirst}>Противодействие коррупции</span>
			<div className={styles.line}></div>
			<div className={styles.BlackBlock}>
				<AntiCorruptionList boolKey={isopened} />
				<div className={styles1.block_desc}>
					<div className={styles1.centered}>
						<button
							onClick={() => openAllList()}
							className={styles1.buttonPolygon}
						>
							<span>{!isopened ? 'Смотреть все' : 'Закрыть все'}</span>
							<div
								className={!isopened ? styles.poligon : styles1.reversedPoligon}
							></div>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.rootWrapperParagraph}>
				<div className={styles.wrapperParagraph}>
					<span className={styles.paragraph}>Методические материалы</span>
				</div>
				<div className={styles.wrapperParagraph}>
					<span className={styles.paragraph}>
						Планы по антикоррупционной политике
					</span>
				</div>
				<div className={styles.wrapperParagraph}>
					<span className={styles.paragraph}>
						Сведения о доходах, расходах, об имуществе и обязательствах
						имущественного характера
					</span>
				</div>
			</div>
			<div className={styles.BlackBlock}>
				<span className={styles.titleCorruption}>
					О фактах коррупции можете сообщить
				</span>
				<div className={styles.itemCorruption}>
					<p>Комитет по противодействию коррупции Республики Крым</p>
					<p>
						Почтовый адрес: Республика Крым, 295005, г. Симферополь, пр. Кирова,
						13
					</p>
					<p>Телефоны: 8 (3652) 27-61-47</p>
					<p>Электронный адрес: kom.korrup@rk.gov.ru</p>
				</div>
				<div className={styles.itemCorruption}>
					<p>
						Телефон доверия» Министерства образования, науки и молодежи
						Республики Крым по вопросам противодействия коррупции в сфере
						деятельности Министерства
					</p>
					<p>Телефоны: 8 (3652) 27-52-32</p>
				</div>
				<div>
					<p>
						Антикоррупционная рабочая группа ГБПОУ РК «Симферопольский
						политехнический колледж
					</p>
					<p>ВРЕМЯ ПРИЁМА ГРАЖДАН: Вторник, пятница с 09.00 до 12.00</p>
					<p>МЕСТО ПРИЁМА: ул.Гаспринского, 3 – кабинет №314</p>
					<p>Телефон: +7978-7060516</p>
				</div>
			</div>
			<div>
				<AntiCorruptionImages />
			</div>
		</div>
	)
}

export default Anticorruption
