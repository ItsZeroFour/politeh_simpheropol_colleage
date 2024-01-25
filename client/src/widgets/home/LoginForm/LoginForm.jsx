import { useInput } from "@app/hooks/useInput";
import Designed from "@features/global/Designed/Designed";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import style from "./LoginForm.module.scss";
import { useState } from "react";

const links = [
  {
    text: "Структура и органы управления образовательной организацией",
    href: "/structure",
  },
  { text: "Документы", href: "/", isList: true },
  { text: "Образование", href: "/", isList: true },
  {
    text: "Образовательные стандарты и требования",
    href: "/",
    isList: true,
  },
  {
    text: "Руководство. Педагогический (научно-педагогический) состав",
    href: "/",
    isList: true,
  },
  {
    text: "Материально-техническое обеспечение и оснащённость образовательного процесса",
    href: "/logistics",
  },
  { text: "Стипендии и меры поддержки обучающихся", href: "/", isList: true },
  { text: "Платные образовательные услуги", href: "/paid" },
  { text: "Финансово-хозяйственная деятельность", href: "/financial-economic" },
  {
    text: "Вакантные места для приёма (перевода) обучающихся",
    href: "/vacancies",
  },
  { text: "Доступная среда", href: "/", isList: true },
  { text: "Международное сотрудничество", href: "/international" },
  {
    text: "Организация питания в образовательной организации",
    href: "/nutrition",
  },
];

const LoginForm = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(
    Array(links.length).fill("")
  );

  const handleMouseEnter = (linkText, index) => {
    setActiveSubMenu((prevActiveSubMenu) => {
      const newActiveSubMenu = [...prevActiveSubMenu];
      newActiveSubMenu[index] = linkText;
      return newActiveSubMenu;
    });
  };

  const handleMouseLeave = (index) => {
    setActiveSubMenu((prevActiveSubMenu) => {
      const newActiveSubMenu = [...prevActiveSubMenu];
      newActiveSubMenu[index] = "";
      return newActiveSubMenu;
    });
  };

  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    if (!login || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          email: login,
          password,
        }
      );
      if (res.status == 200) {
        console.log("200", res.data.token);
        Cookies.set("token", res?.data?.token);
        console.log(Cookies.get("token"));
      }
      alert(" успешно вошли!");
      resetLogin();
      resetPassword();
      router.push("/panel");
    } catch (error) {
      alert("Произошла ошибка", error);
      console.log(error);
    }
    // Clear input values
  };

  const { value: login, bind: loginBind, reset: resetLogin } = useInput();
  const {
    value: password,
    bind: passwordBind,
    reset: resetPassword,
  } = useInput();

  return (
    <div className={style.loginForm}>
      <div className={style.container}>
        <form>
          <input
            className={style.input}
            {...loginBind}
            type="text"
            placeholder="Логин"
          />
          <input
            {...passwordBind}
            className={style.input}
            type="password" // Changed to type='password' for security
            placeholder="Пароль"
          />
          <button onClick={(e) => submitForm(e)} className={style.submit}>
            Войти
          </button>
        </form>

        <div>
          <ul className={style.links}>
            {links.map((link, index) => (
              <li
                key={index}
                className={style.link}
                onMouseEnter={() => handleMouseEnter(link.text, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {link.isList ? (
                  <>
                    <Link href={link.href}>{link.text}</Link>

                    {activeSubMenu[index] === "Документы" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/charter">
                            Устав образовательной организации
                          </Link>
                        </li>

                        <li>
                          <Link href="/accreditation">
                            Свидетельство о государственной аккредитации (с
                            приложениями)
                          </Link>
                        </li>

                        <li>
                          <Link href="/routine-rules">
                            Правила внутреннего распорядка обучающихся
                          </Link>
                        </li>

                        <li>
                          <Link href="/labor-regulations">
                            Правила внутреннего трудового распорядка
                          </Link>
                        </li>

                        <li>
                          <Link href="/collective-agreement">
                            Коллективный договор
                          </Link>
                        </li>

                        <li>
                          <Link href="/self-examination-report">
                            Отчет о результатах самообследования
                          </Link>
                        </li>

                        <li>
                          <Link href="/authority-regulations">
                            Предписания органов, осуществляющих государственный
                            контроль
                          </Link>
                        </li>

                        <li>
                          <Link href="/local-act">
                            Локальные нормативные акты образовательной
                            организации
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] === "Образование" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/realized-programs">
                            Реализуемые образовательные программы
                          </Link>
                        </li>

                        <li>
                          <Link href="/desc-programs">
                            Описание образовательных программ
                          </Link>
                        </li>

                        <li>
                          <Link href="/students-count">
                            Численность обучающихся
                          </Link>
                        </li>

                        <li>
                          <Link href="/admission-results">
                            Сведения о результатах приема
                          </Link>
                        </li>

                        <li>
                          <Link href="/translation-results">
                            Сведения о результатах перевода
                          </Link>
                        </li>

                        <li>
                          <Link href="/results-reinstatement-expulsion">
                            Сведения о результатах восстановления и отчисления
                          </Link>
                        </li>

                        <li>
                          <Link href="/license">
                            Лицензия на осуществление образовательной
                            деятельности
                          </Link>
                        </li>

                        <li>
                          <Link href="/union">
                            Учебно-методические объединения
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] ===
                      "Образовательные стандарты и требования" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/education-standarts">
                            Федеральные государственные образовательные
                            стандарты
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] ===
                      "Руководство. Педагогический (научно-педагогический) состав" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/management">Руководство</Link>
                        </li>

                        <li>
                          <Link href="/pedagogical-staff">
                            Педагогический (научно-педагогический) состав
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] ===
                      "Стипендии и меры поддержки обучающихся" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/scholarship">
                            О наличии и условиях предоставления обучающимся
                            стипендий
                          </Link>
                        </li>

                        <li>
                          <Link href="/social-support">
                            О мерах социальной поддержки
                          </Link>
                        </li>

                        <li>
                          <Link href="/availability-hostel">
                            О наличии общежития
                          </Link>
                        </li>

                        <li>
                          <Link href="/dormitory-rooms-count">
                            О количестве жилых помещений в общежитии
                          </Link>
                        </li>

                        <li>
                          <Link href="/dormitory-pay">
                            О формировании платы за проживание в общежитии
                          </Link>
                        </li>

                        <li>
                          <Link href="/employment">
                            О трудоустройстве выпускников
                          </Link>
                        </li>
                      </ul>
                    ) : activeSubMenu[index] === "Доступная среда" ? (
                      <ul
                        onMouseEnter={() => handleMouseEnter(link.text, index)}
                      >
                        <li>
                          <Link href="/limited-opportunities">
                            Условия обучения инвалидов и лиц с ограниченными
                            возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/classrooms">
                            О специально оборудованных учебных кабинетах
                          </Link>
                        </li>

                        <li>
                          <Link href="/practice-classes">
                            Об объектах для проведения практических занятий,
                            приспособленных для использования инвалидами и
                            лицами с ограниченными возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/library">
                            О библиотеке, приспособленных для использования
                            инвалидами и лицами с ограниченными возможностями
                            здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/limited-opportunities-sport">
                            Об объектах спорта, приспособленных для
                            использования инвалидами и лицами с ограниченными
                            возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/education-limited-opportunities">
                            О средствах обучения и воспитания, приспособленных
                            для использования инвалидами и лицами с
                            ограниченными возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/access-to-classes">
                            Об обеспечении беспрепятственного доступа в здания
                            образовательной организации
                          </Link>
                        </li>

                        <li>
                          <Link href="/nutritional-conditions">
                            О специальных условиях питания
                          </Link>
                        </li>

                        <li>
                          <Link href="/life-security">
                            О специальных условиях охраны здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/limited-opportunities-info">
                            О доступе к информационным системам и
                            информационно-телекоммуникационным сетям,
                            приспособленным для использования инвалидами и
                            лицами с ограниченными возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/limited-opportunities-resources">
                            Об электронных образовательных ресурсах, к которым
                            обеспечивается доступ инвалидов и лиц с
                            ограниченными возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/special-technical-means">
                            О наличии специальных технических средств обучения
                            коллективного и индивидуального пользования
                          </Link>
                        </li>

                        <li>
                          <Link href="/unhindered-access">
                            О наличии условий для беспрепятственного доступа в
                            общежитие, интернат
                          </Link>
                        </li>

                        <li>
                          <Link href="/number-of-places">
                            О количестве жилых помещений в общежитии, интернате,
                            приспособленных для использования инвалидами и
                            лицами с ограниченными возможностями здоровья
                          </Link>
                        </li>

                        <li>
                          <Link href="/in-demand-professions">
                            ИНФОРМАЦИЯ О ВОСТРЕБОВАННЫХ ПРОФЕССИЯХ И
                            СПЕЦИАЛЬНОСТЯХ В СУБЪЕКТАХ РФ, ГДЕ ВОЗМОЖНО ПОЛУЧИТЬ
                            ДАННУЮ ПРОФЕССИЮ / СПЕЦИАЛЬНОСТЬ ДЛЯ ЛЮДЕЙ С
                            ИНВАЛИДНОСТЬЮ И ОГРАНИЧЕННЫМИ ВОЗМОЖНОСТЯМИ ЗДОРОВЬЯ
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <Link href={link.href}>{link.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Designed />
      </div>
    </div>
  );
};

export default LoginForm;
