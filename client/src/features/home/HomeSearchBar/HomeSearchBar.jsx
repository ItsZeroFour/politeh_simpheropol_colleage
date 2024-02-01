import SearchBar from "@entities/SearchBar/SearchBar";

const searchData = [
  {
    keywords: ["Студенту", "Расписание"],
    link: "/schedule",
    text: "Распсиание",
  },

  {
    keywords: ["ДПО", "LGJ"],
    link: "/our-colleage/dpo_",
    text: "ДПО",
  },

  {
    keywords: [
      "Условия обучения инвалидов и лиц с ограниченными возможностями здоровья",
      "Инвалиды",
      "Ограниценный возможности",
    ],
    link: "/our-colleage/limited-opportunities",
    text: "Условия обучения инвалидов и лиц с ограниченными возможностями здоровья",
  },

  {
    keywords: ["Абитуриенту", "Специальности"],
    link: "/enrollee",
    text: "Абитуриенту, Специальности",
  },

  {
    keywords: ["Контакты", "Связаться"],
    link: "/contacts",
    text: "Контакты",
  },

  {
    keywords: ["Устав"],
    link: "/our-colleage/charter",
    text: "Устав",
  },

  {
    keywords: [
      "Правила",
      "Правила распорядка",
      "Правила внутреннего распорядка",
    ],
    link: "/our-colleage/routine-rules",
    text: "Правила внутреннего распорядка обучающихся",
  },

  {
    keywords: [
      "Лицензия",
      "Лизенция на осуществление образовательной деятельности",
    ],
    link: "/our-colleage/license",
    text: "Лизенция на осуществление образовательной деятельности",
  },

  {
    keywords: ["Сведения", "Сведения о результатах приема", "Прием"],
    link: "/our-colleage/admission-results",
    text: "Сведения о результатах приема",
  },

  {
    keywords: ["Сведения", "Сведения о результатх перевода", "Перевод"],
    link: "/our-colleage/translation-results",
    text: "Сведения о результатх перевода",
  },

  {
    keywords: ["Руководство"],
    link: "/our-colleage/management",
    text: "Руководство",
  },

  {
    keywords: [
      "О наличии и условиях предоставления обучающимся стипендии",
      "Стипендия",
    ],
    link: "/our-colleage/scholarship",
    text: "О наличии и условиях предоставления обучающимся стипендии",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },

  {
    keywords: ["", ""],
    link: "/",
    text: "",
  },
];

const HomeSearchBar = () => {
  return <SearchBar placeholder={"Поиск по сайту..."} data={searchData} />;
};

export default HomeSearchBar;
