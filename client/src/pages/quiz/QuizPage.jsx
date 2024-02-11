"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import IMG from "../../../public/assets/images/quiz/quiz-1.svg";

const QuizPage = () => {
  const [currentQuizItem, setCurrentQuizItem] = useState(0);
  const [itemChoosed, setItemChoosed] = useState(null);
  const [itemIdChoosed, setItemIdChoosed] = useState(null);
  const [quizItemsAnimation, setQuizItemsAnimation] = useState("visible");

  const [humanBiology, setHumanBiology] = useState([]);
  const [humanIndustry, setHumanIndustry] = useState([]);
  const [humanHuman, setHumanHuman] = useState([]);
  const [humanSystem, setHumanSystem] = useState([]);
  const [humanArt, setHumanArt] = useState([]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVarian = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const quizItems = [
    [
      {
        title: "Ухаживать за животными",
        image: "../../../public/assets/images/quiz/quiz-1.svg",
        id: 1,
      },

      {
        title: "Обслуживать машины, приборы (следить, регулировать)",
        image: "../../../public/assets/images/quiz/quiz-2.svg",
        id: 2,
      },
    ],

    [
      {
        title: "Помогать больным",
        image: "../../../public/assets/images/quiz/quiz-3.svg",
        id: 3,
      },

      {
        title: "Составлять таблицы, схемы, программы для вычислительных машин",
        image: "../../../public/assets/images/quiz/quiz-4.svg",
        id: 4,
      },
    ],

    [
      {
        title:
          "Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок",
        image: "../../../public/assets/images/quiz/quiz-5.svg",
        id: 5,
      },

      {
        title: "Следить за состоянием и развитием растений",
        image: "../../../public/assets/images/quiz/quiz-6.svg",
        id: 1,
      },
    ],

    [
      {
        title:
          "Обрабатывать материалы (дерево, ткань, металл, пластмассу и др.)",
        image: "../../../public/assets/images/quiz/quiz-7.svg",
        id: 2,
      },

      {
        title: "Доводить товары до потребителя, рекламировать, продавать",
        image: "../../../public/assets/images/quiz/quiz-8.svg",
        id: 3,
      },
    ],

    [
      {
        title: "Обсуждать научно-популярные книги, статьи",
        image: "../../../public/assets/images/quiz/quiz-9.svg",
        id: 4,
      },

      {
        title: "Обсуждать художественные книги (или пьесы, концерты)",
        image: "../../../public/assets/images/quiz/quiz-10.svg",
        id: 5,
      },
    ],

    [
      {
        title: "Выращивать молодняк (животных  какой-либо породы)",
        image: "../../../public/assets/images/quiz/quiz-11.svg",
        id: 1,
      },

      {
        title:
          "Тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)",
        image: "../../../public/assets/images/quiz/quiz-12.svg",
        id: 3,
      },
    ],

    [
      {
        title: "Копировать рисунки, или настраивать музыкальные инструменты",
        image: "../../../public/assets/images/quiz/quiz-13.svg",
        id: 5,
      },

      {
        title: "Управлять подъёмным краном, трактором, тепловозом и т.п",
        image: "../../../public/assets/images/quiz/quiz-14.svg",
        id: 2,
      },
    ],

    [
      {
        title:
          "Сообщить, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)",
        image: "../../../public/assets/images/quiz/quiz-15.svg",
        id: 3,
      },

      {
        title:
          "Оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)",
        image: "../../../public/assets/images/quiz/quiz-16.svg",
        id: 5,
      },
    ],

    [
      {
        title: "Ремонтировать вещи, изделия (одежду, технику), жилище",
        image: "../../../public/assets/images/quiz/quiz-17.svg",
        id: 2,
      },

      {
        title: "Искать и исправлять ошибки в текстах, таблицах, рисунках",
        image: "../../../public/assets/images/quiz/quiz-18.svg",
        id: 4,
      },
    ],

    [
      {
        title: "Лечить животных",
        image: "../../../public/assets/images/quiz/quiz-19.svg",
        id: 1,
      },

      {
        title: "Выполнять вычисления, расчёты",
        image: "../../../public/assets/images/quiz/quiz-20.svg",
        id: 4,
      },
    ],

    [
      {
        title: "Выводить новые сорта растений",
        image: "../../../public/assets/images/quiz/quiz-21.svg",
        id: 1,
      },

      {
        title:
          "Конструировать, новые виды промышленных изделий (машины, одежду, дома, продукты питания и т.п.)",
        image: "../../../public/assets/images/quiz/quiz-22.svg",
        id: 2,
      },
    ],

    [
      {
        title:
          "Разбирать споры, ссоры между людьми, убеждать, разъяснять, наказывать, поощрять",
        image: "../../../public/assets/images/quiz/quiz-23.svg",
        id: 3,
      },

      {
        title:
          "Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)",
        image: "../../../public/assets/images/quiz/quiz-24.svg",
        id: 4,
      },
    ],

    [
      {
        title:
          "Наблюдать, изучать работу кружков художественной самодеятельности",
        image: "../../../public/assets/images/quiz/quiz-25.svg",
        id: 5,
      },

      {
        title: "Наблюдать, изучать жизнь микробов",
        image: "../../../public/assets/images/quiz/quiz-26.svg",
        id: 1,
      },
    ],

    [
      {
        title: "Обслуживать, налаживать медицинские приборы, аппараты",
        image: "../../../public/assets/images/quiz/quiz-27.svg",
        id: 2,
      },

      {
        title:
          "Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.",
        image: "../../../public/assets/images/quiz/quiz-28.svg",
        id: 3,
      },
    ],

    [
      {
        title:
          "Художественно описывать, изображать события (наблюдаемые и представляемые)",
        image: "../../../public/assets/images/quiz/quiz-29.svg",
        id: 4,
      },

      {
        title:
          "Составлять точные описания-отчёты о наблюдаемых явлениях, событиях",
        image: "../../../public/assets/images/quiz/quiz-30.svg",
        id: 5,
      },
    ],

    [
      {
        title: "Делать лабораторные анализы в больнице",
        image: "../../../public/assets/images/quiz/quiz-31.svg",
        id: 1,
      },

      {
        title:
          "Принимать, осматривать больных, беседовать с ними, назначать лечение",
        image: "../../../public/assets/images/quiz/quiz-32.svg",
        id: 3,
      },
    ],

    [
      {
        title: "Красить или расписывать стены помещений, поверхность изделий",
        image: "../../../public/assets/images/quiz/quiz-33.svg",
        id: 5,
      },

      {
        title: "Осуществлять монтаж или сборку машин, приборов",
        image: "../../../public/assets/images/quiz/quiz-34.svg",
        id: 2,
      },
    ],

    [
      {
        title:
          "Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п.",
        image: "../../../public/assets/images/quiz/quiz-35.svg",
        id: 3,
      },

      {
        title: "Играть на сцене, принимать участие в концертах",
        image: "../../../public/assets/images/quiz/quiz-36.svg",
        id: 5,
      },
    ],

    [
      {
        title:
          "Изготовлять по чертежам детали, изделия (машины, одежду), строить здания",
        image: "../../../public/assets/images/quiz/quiz-37.svg",
        id: 2,
      },

      {
        title: "Заниматься черчением, копировать чертежи, карты",
        image: "../../../public/assets/images/quiz/quiz-38.svg",
        id: 4,
      },
    ],

    [
      {
        title: "Вести борьбу с болезнями растений, с вредителями леса, сада.",
        image: "../../../public/assets/images/quiz/quiz-39.svg",
        id: 1,
      },

      {
        title:
          "Работать на клавишных машинах (пишущей машинке, телетайпе, наборной машине и др.)",
        image: "../../../public/assets/images/quiz/quiz-40.svg",
        id: 4,
      },
    ],
  ];

  const handleNextQuizItem = () => {
    if (itemIdChoosed === 1) {
      setHumanBiology((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 2) {
      setHumanIndustry((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 3) {
      setHumanHuman((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 4) {
      setHumanSystem((prev) => [...prev, "1"]);
    } else {
      setHumanArt((prev) => [...prev, "1"]);
    }

    setCurrentQuizItem(currentQuizItem + 1);
    setItemChoosed(null);

    setQuizItemsAnimation("hidden");
    setTimeout(() => setQuizItemsAnimation("visible"), 200);
  };

  const handleResult = () => {
    const maxLengthElement = Math.max(
      humanBiology.length,
      humanIndustry.length,
      humanHuman.length,
      humanSystem.length,
      humanArt.length
    );

    if (maxLengthElement === humanBiology.length) {
      console.log("Biology", humanBiology);
    } else if (maxLengthElement === humanHuman.length) {
      console.log("humanHuman", humanHuman);
    } else if (maxLengthElement === humanIndustry.length) {
      console.log("humanIndustry", humanIndustry);
    } else if (maxLengthElement === humanSystem.length) {
      console.log("humanSystem", humanSystem);
    } else if (maxLengthElement === humanArt.length) {
      console.log("humanArt", humanArt);
    } else {
      console.log("Универсал");
    }
  };

  return (
    <main className={style.quiz}>
      <section className={style.quiz__wrapper}>
        <motion.ul
          variants={container}
          initial={quizItemsAnimation}
          animate={quizItemsAnimation}
        >
          {quizItems[currentQuizItem].map(({ title, image, id }, index) => (
            <motion.li
              key={index}
              variants={itemVarian}
              onClick={() => {
                setItemIdChoosed(id);
                setItemChoosed(index);
              }}
              style={
                itemChoosed === index
                  ? { background: "#0066ff" }
                  : { background: "rgba(0, 85, 255, 0.3)" }
              }
            >
              <LazyLoadImage src={image} alt={title} />
              <img src={image} alt="" />
              <IMG />
              <p>{title}</p>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <button
        onClick={
          itemChoosed !== null && currentQuizItem + 1 !== quizItems.length
            ? handleNextQuizItem
            : itemChoosed !== null && currentQuizItem + 1 === quizItems.length
            ? handleResult
            : handleResult
        }
        disabled={itemChoosed === null}
        style={itemChoosed === null ? { opacity: 0.5 } : { opacity: 1 }}
      >
        Следующий вопрос
      </button>
    </main>
  );
};

export default QuizPage;
