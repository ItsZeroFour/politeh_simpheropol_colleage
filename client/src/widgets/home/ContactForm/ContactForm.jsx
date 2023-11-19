import style from './ContactForm.module.scss'

const ContactForm = () => {
  return <div className={style.contact}>
    <p>Свяжитесь с нами!</p>
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>Отправить</button>
    </form>
  </div>
}

export default ContactForm

