import style from './Pairing.module.scss'

const Pairing = ({ numbers }) => {
  return (
    <div className={style.pairing} column={0}>
      <p className={style.title}>№ пары</p>

      {numbers.map((number, i) => (
        <div className={style.pair} key={i} pair={i}>
          <p>{number}</p>
        </div>
      ))}
    </div>
  )
}

export default Pairing
