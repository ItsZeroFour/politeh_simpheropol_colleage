import photo_2024 from '@public/assets/icons/photo_20240714.jpg'
import Link from 'next/link'
import style2 from '../Enrollee.module.scss'
import style from './EnrolleImg.module.scss'
const EnrolleImg = () => {
	console.log('photo', photo_2024)
	return (
		<div className={style.wrapperEnrolleIMGWrapper}>
			<img src={photo_2024.src} alt='kk' />

                              <div className={style.enrollee__announcement}>
        <h2>Внимание объявление!!!</h2>
        <p>
          ВСЕМ, кто предоставлял справки для зачисления в первоочередном порядке
          (СВО), ПРОСИМ ПРЕДОСТАВИТЬ СПРАВКИ СОГЛАСНО ФОРМЕ В СРОК ДО 15 АВГУСТА
          2024 ГОДА.
        </p>

        <Link href="/assets/announcement.docx">Скачать файл</Link>
      </div>
                         
			<section className={style2.enrollee__order__link}>
				<Link href='/our-colleage/order-of-admission'>Приказ о зачислении</Link>
				<Link href='/admission'>
					Рейтинговый список на зачисление
				</Link>
			</section>
		</div>
	)
}

export default EnrolleImg
