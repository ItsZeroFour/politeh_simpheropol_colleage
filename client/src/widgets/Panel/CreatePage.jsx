import { AiOutlinePlus } from "react-icons/ai";
import style from "./Panel.module.scss";
import { useState } from "react";

const CreatePage = () => {
  const [openTitleInput, setOpenTitleInput] = useState(false);
  const [openTextInput, setOpenTextInput] = useState(false);
  const [openImageInput, setOpenImageInput] = useState(false);
  const [openListInput, setOpenListInput] = useState(false);
  const [openBlockInput, setOpenBlockInput] = useState(false);
  const [openLinksInput, setOpenLinksInput] = useState(false);

  const buttonsList = [
    { text: "Добавить зогаловок", type: "title" },
    { text: "Добавить текст", type: "text" },
    { text: "Добавить изображение", type: "image" },
    { text: "Добавить список", type: "list" },
    { text: "Добавить блок с текстом", type: "block" },
    { text: "Добавить ссылки", type: "links" },
  ];

  return (
    <section className={style.create__page}>
      <form>
        <input type="text" placeholder="Введите url страницы формата /page" />

        {openTitleInput && (
          <input type="text" placeholder="Введите заголовок страницы" />
        )}

        {openImageInput && (
          <input type="text" placeholder="Вставьте изображение на страницу" />
        )}

        {openTextInput && (
          <input type="text" placeholder="Введите текст страницы" />
        )}
        {openListInput && <input type="text" placeholder="Введите список" />}

        {openBlockInput && (
          <input type="text" placeholder="Введите текст для блока" />
        )}

        {openLinksInput && (
          <input type="text" placeholder="Введите ссылки страницы" />
        )}
      </form>

      <ul className={style.create__page__buttons}>
        {buttonsList.map(({ text, type }) => (
          <li>
            <button
              type="button"
              onClick={() => {
                type === "title"
                  ? setOpenTitleInput(true)
                  : type === "links"
                  ? setOpenLinksInput(true)
                  : type === "image"
                  ? setOpenImageInput(true)
                  : type === "list"
                  ? setOpenListInput(true)
                  : type === "block"
                  ? setOpenBlockInput(true)
                  : setOpenTextInput(true);
              }}
            >
              <AiOutlinePlus /> {text}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CreatePage;
