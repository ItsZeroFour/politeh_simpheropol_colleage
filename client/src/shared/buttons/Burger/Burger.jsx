import style from './Burger.module.scss'

const Burger = ({ onClick, isActive }) => {
  const handleClick = (e) => {
    const element = e.currentTarget

    console.log(isActive);
    if (isActive && !element.classList.contains(style.active)) element.classList.add(style.active)
    else if (!isActive && element.classList.contains(style.active)) element.classList.remove(style.active)

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
