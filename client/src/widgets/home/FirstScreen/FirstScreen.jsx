import Image from 'next/image'
import style from './Firstscreen.module.scss'
import bubbles from '@public/assets/images/home/bubbles.png'

const FirstScreen = () => {
    return (
        <div>
            <Image src={bubbles} />
            <h1 className={style.title}>Политехнический колледж<br/>Симферополя</h1>
        </div>
    )
}

export default FirstScreen

