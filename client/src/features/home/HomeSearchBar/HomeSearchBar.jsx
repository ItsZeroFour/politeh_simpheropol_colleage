import SearchBar from '@entities/SearchBar/SearchBar'

const searchData = [
  {
    keywords: ['Студенту', 'Расписание'],
    link: '/schedule',
    text: 'Распсиание',
  },
  {
    keywords: ['Преподаватели', 'Учителя'],
    link: '/',
    text: 'Преподаватели колледжа',
  },
  {
    keywords: ['Карта', 'Банковская карта'],
    link: '/',
    text: 'Информация по банковским картам',
  },
  {
    keywords: ['Италия', 'рим'],
    link: '/',
    text: 'О великом Риме',
  },
  {
    keywords: ['Документы', 'Бумаги'],
    link: '/',
    text: 'Документы для поступления',
  },
  {
    keywords: ['Общежитие', 'общага'],
    link: '/',
    text: 'Информация по общежитию',
  },
]

const HomeSearchBar = () => {
  return <SearchBar placeholder={'Поиск по сайту...'} data={searchData} />
}

export default HomeSearchBar
