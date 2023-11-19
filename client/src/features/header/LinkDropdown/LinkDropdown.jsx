import Link from 'next/link'
import style from './LinkDropdown.module.scss'


const LinkDropdown = () => {
  return (
    <div className={style.dropdown}>
      <nav>
        <div className={style.container}>

          <div className={style.border}></div>

          <li className={style.item}>
            <Link href='/'>Ссылка</Link>
          </li>
          <li className={style.item}>
            <Link href='/'>
              Какие-то там документы, необходимые для поступления
            </Link>
          </li>
          <li className={style.item}>
            <Link href='/'>А это еще, что такое, а?</Link>
          </li>
          <li className={style.item}>
            <Link href='/'>Ссылка</Link>
          </li>

        </div>
      </nav>
    </div>
  )
}

export default LinkDropdown
