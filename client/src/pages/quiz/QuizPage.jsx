'use client'

import React, { useState } from 'react'
import style from './style.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

// import dynamic from 'next/dynamic';

// const QuizImage1 = dynamic(() => import('@public/assets/images/quiz/quiz-1.svg'));
// const QuizImage2 = dynamic(() => import('@public/assets/images/quiz/quiz-2.svg'));
// const QuizImage3 = dynamic(() => import('@public/assets/images/quiz/quiz-3.svg'));
// const QuizImage4 = dynamic(() => import('@public/assets/images/quiz/quiz-4.svg'));
// const QuizImage5 = dynamic(() => import('@public/assets/images/quiz/quiz-5.svg'));
// const QuizImage6 = dynamic(() => import('@public/assets/images/quiz/quiz-6.svg'));
// const QuizImage7 = dynamic(() => import('@public/assets/images/quiz/quiz-7.svg'));
// const QuizImage8 = dynamic(() => import('@public/assets/images/quiz/quiz-8.svg'));
// const QuizImage9 = dynamic(() => import('@public/assets/images/quiz/quiz-9.svg'));
// const QuizImage10 = dynamic(() => import('@public/assets/images/quiz/quiz-10.svg'));
// const QuizImage11 = dynamic(() => import('@public/assets/images/quiz/quiz-11.svg'));
// const QuizImage12 = dynamic(() => import('@public/assets/images/quiz/quiz-12.svg'));
// const QuizImage13 = dynamic(() => import('@public/assets/images/quiz/quiz-13.svg'));
// const QuizImage14 = dynamic(() => import('@public/assets/images/quiz/quiz-14.svg'));
// const QuizImage15 = dynamic(() => import('@public/assets/images/quiz/quiz-15.svg'));
// const QuizImage16 = dynamic(() => import('@public/assets/images/quiz/quiz-16.svg'));
// const QuizImage17 = dynamic(() => import('@public/assets/images/quiz/quiz-17.svg'));
// const QuizImage18 = dynamic(() => import('@public/assets/images/quiz/quiz-18.svg'));
// const QuizImage19 = dynamic(() => import('@public/assets/images/quiz/quiz-19.svg'));
// const QuizImage20 = dynamic(() => import('@public/assets/images/quiz/quiz-20.svg'));
// const QuizImage21 = dynamic(() => import('@public/assets/images/quiz/quiz-21.svg'));
// const QuizImage22 = dynamic(() => import('@public/assets/images/quiz/quiz-22.svg'));
// const QuizImage23 = dynamic(() => import('@public/assets/images/quiz/quiz-23.svg'));
// const QuizImage24 = dynamic(() => import('@public/assets/images/quiz/quiz-24.svg'));
// const QuizImage25 = dynamic(() => import('@public/assets/images/quiz/quiz-25.svg'));
// const QuizImage26 = dynamic(() => import('@public/assets/images/quiz/quiz-26.svg'));
// const QuizImage27 = dynamic(() => import('@public/assets/images/quiz/quiz-27.svg'));
// const QuizImage28 = dynamic(() => import('@public/assets/images/quiz/quiz-28.svg'));
// const QuizImage29 = dynamic(() => import('@public/assets/images/quiz/quiz-29.svg'));
// const QuizImage30 = dynamic(() => import('@public/assets/images/quiz/quiz-30.svg'));
// const QuizImage31 = dynamic(() => import('@public/assets/images/quiz/quiz-31.svg'));
// const QuizImage32 = dynamic(() => import('@public/assets/images/quiz/quiz-32.svg'));
// const QuizImage33 = dynamic(() => import('@public/assets/images/quiz/quiz-33.svg'));
// const QuizImage34 = dynamic(() => import('@public/assets/images/quiz/quiz-34.svg'));
// const QuizImage35 = dynamic(() => import('@public/assets/images/quiz/quiz-35.svg'));
// const QuizImage36 = dynamic(() => import('@public/assets/images/quiz/quiz-36.svg'));
// const QuizImage37 = dynamic(() => import('@public/assets/images/quiz/quiz-37.svg'));
// const QuizImage38 = dynamic(() => import('@public/assets/images/quiz/quiz-38.svg'));
// const QuizImage39 = dynamic(() => import('@public/assets/images/quiz/quiz-39.svg'));
// const QuizImage40 = dynamic(() => import('@public/assets/images/quiz/quiz-40.svg'));

// import QuizImage1 from "@public/assets/images/quiz/quiz-1.svg";
// import QuizImage2 from "@public/assets/images/quiz/quiz-2.svg";

// import QuizImage3 from "@public/assets/images/quiz/quiz-3.svg";
// import QuizImage4 from "@public/assets/images/quiz/quiz-4.svg";

// import QuizImage5 from "@public/assets/images/quiz/quiz-5.svg";
// import QuizImage6 from "@public/assets/images/quiz/quiz-6.svg";

// import QuizImage7 from "@public/assets/images/quiz/quiz-7.svg";
// import QuizImage8 from "@public/assets/images/quiz/quiz-8.svg";

// import QuizImage9 from "@public/assets/images/quiz/quiz-9.svg";
// import QuizImage10 from "@public/assets/images/quiz/quiz-10.svg";

// import QuizImage11 from "@public/assets/images/quiz/quiz-11.svg";
// import QuizImage12 from "@public/assets/images/quiz/quiz-12.svg";

// import QuizImage13 from "@public/assets/images/quiz/quiz-13.svg";
// import QuizImage14 from "@public/assets/images/quiz/quiz-14.svg";

// import QuizImage15 from "@public/assets/images/quiz/quiz-15.svg";
// import QuizImage16 from "@public/assets/images/quiz/quiz-16.svg";

// import QuizImage17 from "@public/assets/images/quiz/quiz-17.svg";
// import QuizImage18 from "@public/assets/images/quiz/quiz-18.svg";

// import QuizImage19 from "@public/assets/images/quiz/quiz-19.svg";
// import QuizImage20 from "@public/assets/images/quiz/quiz-20.svg";

// import QuizImage21 from "@public/assets/images/quiz/quiz-21.svg";
// import QuizImage22 from "@public/assets/images/quiz/quiz-22.svg";

// import QuizImage23 from "@public/assets/images/quiz/quiz-23.svg";
// import QuizImage24 from "@public/assets/images/quiz/quiz-24.svg";

// import QuizImage25 from "@public/assets/images/quiz/quiz-25.svg";
// import QuizImage26 from "@public/assets/images/quiz/quiz-26.svg";

// import QuizImage27 from "@public/assets/images/quiz/quiz-27.svg";
// import QuizImage28 from "@public/assets/images/quiz/quiz-28.svg";

// import QuizImage29 from "@public/assets/images/quiz/quiz-29.svg";
// import QuizImage30 from "@public/assets/images/quiz/quiz-30.svg";

// import QuizImage31 from "@public/assets/images/quiz/quiz-31.svg";
// import QuizImage32 from "@public/assets/images/quiz/quiz-32.svg";

// import QuizImage33 from "@public/assets/images/quiz/quiz-33.svg";
// import QuizImage34 from "@public/assets/images/quiz/quiz-34.svg";

// import QuizImage35 from "@public/assets/images/quiz/quiz-35.svg";
// import QuizImage36 from "@public/assets/images/quiz/quiz-36.svg";

// import QuizImage37 from "@public/assets/images/quiz/quiz-37.svg";
// import QuizImage38 from "@public/assets/images/quiz/quiz-38.svg";

// import QuizImage39 from "@public/assets/images/quiz/quiz-39.svg";
// import QuizImage40 from "@public/assets/images/quiz/quiz-40.svg";

const QuizPage = () => {
  const [currentQuizItem, setCurrentQuizItem] = useState(0)
  const [itemChoosed, setItemChoosed] = useState(null)
  const [itemIdChoosed, setItemIdChoosed] = useState(null)
  const [quizItemsAnimation, setQuizItemsAnimation] = useState('visible')

  const [humanBiology, setHumanBiology] = useState([])
  const [humanIndustry, setHumanIndustry] = useState([])
  const [humanHuman, setHumanHuman] = useState([])
  const [humanSystem, setHumanSystem] = useState([])
  const [humanArt, setHumanArt] = useState([])

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
  }

  const itemVarian = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const quizItems = [
    [
      {
        title: 'Ухаживать за животными',
        id: 1,
      },

      {
        title: 'Обслуживать машины, приборы (следить, регулировать)',
        id: 2,
      },
    ],

    [
      {
        title: 'Помогать больным',
        id: 3,
      },

      {
        title: 'Составлять таблицы, схемы, программы для вычислительных машин',
        id: 4,
      },
    ],

    [
      {
        title:
          'Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок',
        id: 5,
      },

      {
        title: 'Следить за состоянием и развитием растений',
        id: 1,
      },
    ],

    [
      {
        title:
          'Обрабатывать материалы (дерево, ткань, металл, пластмассу и др.)',
        id: 2,
      },

      {
        title: 'Доводить товары до потребителя, рекламировать, продавать',
        id: 3,
      },
    ],

    [
      {
        title: 'Обсуждать научно-популярные книги, статьи',
        id: 4,
      },

      {
        title: 'Обсуждать художественные книги (или пьесы, концерты)',
        id: 5,
      },
    ],

    [
      {
        title: 'Выращивать молодняк (животных  какой-либо породы)',
        id: 1,
      },

      {
        title:
          'Тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)',
        id: 3,
      },
    ],

    [
      {
        title: 'Копировать рисунки, или настраивать музыкальные инструменты',
        id: 5,
      },

      {
        title: 'Управлять подъёмным краном, трактором, тепловозом и т.п',
        id: 2,
      },
    ],

    [
      {
        title:
          'Сообщить, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)',
        id: 3,
      },

      {
        title:
          'Оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)',
        id: 5,
      },
    ],

    [
      {
        title: 'Ремонтировать вещи, изделия (одежду, технику), жилище',
        id: 2,
      },

      {
        title: 'Искать и исправлять ошибки в текстах, таблицах, рисунках',
        id: 4,
      },
    ],

    [
      {
        title: 'Лечить животных',
        id: 1,
      },

      {
        title: 'Выполнять вычисления, расчёты',
        id: 4,
      },
    ],

    [
      {
        title: 'Выводить новые сорта растений',
        id: 1,
      },

      {
        title:
          'Конструировать, новые виды промышленных изделий (машины, одежду, дома, продукты питания и т.п.)',
        id: 2,
      },
    ],

    [
      {
        title:
          'Разбирать споры, ссоры между людьми, убеждать, разъяснять, наказывать, поощрять',
        id: 3,
      },

      {
        title:
          'Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)',
        id: 4,
      },
    ],

    [
      {
        title:
          'Наблюдать, изучать работу кружков художественной самодеятельности',
        id: 5,
      },

      {
        title: 'Наблюдать, изучать жизнь микробов',
        id: 1,
      },
    ],

    [
      {
        title: 'Обслуживать, налаживать медицинские приборы, аппараты',
        id: 2,
      },

      {
        title:
          'Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.',
        id: 3,
      },
    ],

    [
      {
        title:
          'Художественно описывать, изображать события (наблюдаемые и представляемые)',
        id: 4,
      },

      {
        title:
          'Составлять точные описания-отчёты о наблюдаемых явлениях, событиях',
        id: 5,
      },
    ],

    [
      {
        title: 'Делать лабораторные анализы в больнице',
        id: 1,
      },

      {
        title:
          'Принимать, осматривать больных, беседовать с ними, назначать лечение',
        id: 3,
      },
    ],

    [
      {
        title: 'Красить или расписывать стены помещений, поверхность изделий',
        id: 5,
      },

      {
        title: 'Осуществлять монтаж или сборку машин, приборов',
        id: 2,
      },
    ],

    [
      {
        title:
          'Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п.',
        id: 3,
      },

      {
        title: 'Играть на сцене, принимать участие в концертах',
        id: 5,
      },
    ],

    [
      {
        title:
          'Изготовлять по чертежам детали, изделия (машины, одежду), строить здания',
        id: 2,
      },

      {
        title: 'Заниматься черчением, копировать чертежи, карты',
        id: 4,
      },
    ],

    [
      {
        title: 'Вести борьбу с болезнями растений, с вредителями леса, сада.',
        id: 1,
      },

      {
        title:
          'Работать на клавишных машинах (пишущей машинке, телетайпе, наборной машине и др.)',
        id: 4,
      },
    ],
  ]

  const handleNextQuizItem = () => {
    if (itemIdChoosed === 1) {
      setHumanBiology((prev) => [...prev, '1'])
    } else if (itemIdChoosed === 2) {
      setHumanIndustry((prev) => [...prev, '1'])
    } else if (itemIdChoosed === 3) {
      setHumanHuman((prev) => [...prev, '1'])
    } else if (itemIdChoosed === 4) {
      setHumanSystem((prev) => [...prev, '1'])
    } else {
      setHumanArt((prev) => [...prev, '1'])
    }

    setCurrentQuizItem(currentQuizItem + 1)
    setItemChoosed(null)

    setQuizItemsAnimation('hidden')
    setTimeout(() => setQuizItemsAnimation('visible'), 200)
  }

  const handleResult = () => {
    const maxLengthElement = Math.max(
      humanBiology.length,
      humanIndustry.length,
      humanHuman.length,
      humanSystem.length,
      humanArt.length
    )

    if (maxLengthElement === humanBiology.length) {
      console.log('Biology', humanBiology)
    } else if (maxLengthElement === humanHuman.length) {
      console.log('humanHuman', humanHuman)
    } else if (maxLengthElement === humanIndustry.length) {
      console.log('humanIndustry', humanIndustry)
    } else if (maxLengthElement === humanSystem.length) {
      console.log('humanSystem', humanSystem)
    } else if (maxLengthElement === humanArt.length) {
      console.log('humanArt', humanArt)
    } else {
      console.log('Универсал')
    }
  }

  return (
    <main className={style.quiz}>
      <section className={style.quiz__wrapper}>
        <motion.ul
          variants={container}
          initial={quizItemsAnimation}
          animate={quizItemsAnimation}
        >
          {quizItems[currentQuizItem].map(({ title, QuizImage, id }, index) => (
            <motion.li
              key={index}
              variants={itemVarian}
              onClick={() => {
                setItemIdChoosed(id)
                setItemChoosed(index)
              }}
              style={
                itemChoosed === index
                  ? { background: '#0066ff' }
                  : { background: 'rgba(0, 85, 255, 0.3)' }
              }
            >
              <div className={style.quizImage}>
                <Image
                  layout='fill'
                  src={
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/quiz/quiz-${id}.` +
                    'svg'
                  }
                />
              </div>
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
  )
}

export default QuizPage
