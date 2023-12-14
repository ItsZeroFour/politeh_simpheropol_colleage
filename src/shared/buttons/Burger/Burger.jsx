import style from './Burger.module.scss'

const Burger = ({ onClick }) => {
  const handleClick = (e) => {
    const element = e.currentTarget
    element.classList.toggle(style.active)

    onClick()
  }

  return (
    <div className={style.burger} onClick={handleClick}>
      <button className={style.toggle}>
        <span className={style.top}></span>
        <span className={style.middle}></span>
        <span className={style.bottom}></span>
      </button>
    </div>
  )
}

export default Burger
