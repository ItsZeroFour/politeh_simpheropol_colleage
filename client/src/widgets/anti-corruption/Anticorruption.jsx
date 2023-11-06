import styles from '@widgets/anti-corruption/Anticorruption.module.scss'
import { firstData } from '@widgets/anti-corruption/antiCorruptionData.js'
import AntiCorruptionImages from './AntiCorruptionImages'
const Anticorruption = () => {
	return (
		<div className={styles.root}>
			<span className={styles.titleFirst}>Противодействие коррупции</span>
			<div className={styles.line}></div>
			<div className={styles.BlackBlock}>
				<ol>
					{firstData.map(el => {
						return (
							<li key={el.index}>
								<a href={el.link}>{el.index + '. ' + el.item}</a>
							</li>
						)
					})}
				</ol>
				<div clssassName={styles.centered}>
					<button className={styles.buttonPolygon}>
						<span>Смотреть все</span>
						<div className={styles.poligon}></div>
					</button>
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
