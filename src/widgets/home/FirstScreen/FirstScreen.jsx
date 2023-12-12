import Image from 'next/image'
import style from './FirstScreen.module.scss'
import bubbles from '@public/assets/images/home/bubbles.png'
import ButtonIcon from '@/shared/buttons/ButtonIcon/ButtonIcon'
import door from '@public/assets/icons/door.svg?url'

const FirstScreen = () => {
    return (
        <div className={style.firstScreen}>
            <Image className={style.bubbles} src={bubbles} />
            <h1 className={style.title} data-img={bubbles.src}>Симферопольский<br/>Политехнический колледж</h1>
            <p className={style.description}>Государственное бюджетное профессиональное образовательное учреждение Республики Крым «Симферопольский политехнический колледж», создано Советом министров Республики Крым на основании распоряжения от 09.12.2014 № 1326-р «О создании Государственных бюджетных учреждений Республики Крым»,  приказа Министерства образования, науки и молодежи Республики Крым от 11.12.2014 №349 «О государственных бюджетных учреждениях Республики Крым».</p>
            <ButtonIcon text='День открытых дверей' iconPath={door} className={style.button} />
        </div>
    )
}

export default FirstScreen

