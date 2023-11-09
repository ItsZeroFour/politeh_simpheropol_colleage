import Image from 'next/image'
import style from './ButtonIcon.module.scss'

const ButtonIcon = ({ iconPath, text, onClick, className }) => {
  const resultClass = style.button + ' ' + (className ? className : '')

  return <div className={resultClass} onClick={onClick}>
    <p>
      <Image src={iconPath} alt="button icon" />
      {text}
    </p>
  </div>
}


export default ButtonIcon



