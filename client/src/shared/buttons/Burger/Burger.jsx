import style from './Burger.module.scss'

const Burger = ({ onClick }) => {
  return (
    <div className={style.burger} onClick={onClick}>
      <input className={style.checkbox} type='checkbox' />
    </div>
  )
}

export default Burger
