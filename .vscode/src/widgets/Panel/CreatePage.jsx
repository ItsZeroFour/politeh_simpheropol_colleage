'use client'
import { textValueFunc } from '@app/store/pagesAdmin/UndoRendoSlice.js'
import AlignRight from '@public/assets/icons/adminicons/ALignRight'
import AddIcon from '@public/assets/icons/adminicons/AddIcon'
import AlignCenter from '@public/assets/icons/adminicons/AlignCenter'
import AlignLeft from '@public/assets/icons/adminicons/AlignLeft'
import BIcon from '@public/assets/icons/adminicons/BIcon'
import ImageIcon from '@public/assets/icons/adminicons/ImageIcon.jsx'
import ItalicIcon from '@public/assets/icons/adminicons/ItalicIcon'
import LinkIcon from '@public/assets/icons/adminicons/LinkIcon'
import ListNumberIcon from '@public/assets/icons/adminicons/ListNumberIcon'
import NormalTextIcon from '@public/assets/icons/adminicons/NormalTextIcon'
import StrikeIcon from '@public/assets/icons/adminicons/StrikeIcon'
import UnderlineIcon from '@public/assets/icons/adminicons/UnderlineIcon'
import Vector from '@public/assets/icons/adminicons/Vector'
import axios from 'axios'
import { Interweave, Markup } from 'interweave'
import Cookies from 'js-cookie'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import style from './Panel.module.scss'
import { Counter } from './UndoRendoUI.jsx'
const CreatePage = () => {
	const [isPage, setIsPage] = useState(true)
	const [dataUrl, setDataUrl] = useState('')
	const state = useSelector(state => state)
	const [imageUrl, setImageUrl] = useState('')

	const [imageContentUrl, setImageContentUrl] = useState('')
	const images1 = useSelector(state => state.counter.present.images1)
	const textValue = useSelector(state => state.counter.present.textValue)
	const images = useSelector(state => state.counter.present.images)
	const count = useSelector(state => state.counter.present.value)
	const [postImage, setPostImage] = useState({ myFile: '' })
	const [selectedText, setSelectedText] = useState('')
	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const [image1, setImage1] = useState(null)
	const [netImage, setNewImage] = useState([])
	const [netImage1, setNewImage1] = useState('')
	const [postImage1, setPostImage1] = useState({})
	const [localrenderImage, setLocalrenderImage] = useState('')
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [isForm, setIsForm] = useState('default')
	const [typePage, setTypePage] = useState('')
	const [URLPage, setURLPage] = useState('')
	const [data, setdata] = useState('')
	const [titlePage, setTitlePage] = useState('')
	const searchEvent = e => {}
	let tmp = '../../app/testing'
	const [dataFetch, setDataFetch] = useState(null)
	const [mainPanelType, setMainPanelType] = useState('create-page')

	useEffect(() => {
		const fetchingData = async () => {
			try {
				const token = await Cookies.get('token')

				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)

				setDataFetch(data)
			} catch (error) {
				console.warn(error)
			}
		}
		fetchingData()
	}, [isForm])

	const RenderAll = () => {
		return <Interweave content={textValue} />
	}
	const RenderPredImage = ({ imageUrl }) => {
		return (
			<Interweave
				content={`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${imageUrl}`
				}  alt="name"/>`}
			/>
		)
	}

	const handleAddHeadingThree = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h3>' + selectedText + '</h3>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const handleAddHeadingTwo = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			// Adipiscens index verbi finis
			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h2>' + selectedText + '</h2>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addStrong = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<b>' + selectedText + '</b>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addParagraphOne = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<p style=" text-indent: 20px;" >' + selectedText + '</p>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addUnderline = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<u>' + selectedText + '</u>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addListNum = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const newSelectedArr = selectedText.split('<br/>')

			if (initium_index !== -1) {
				const elements = newSelectedArr
					.map((el, index) => `<li>${index + 1}. ${el}</li>`)
					.join('')
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ol>' +
						elements +
						'</ol>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addList = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const newSelectedArr = selectedText.split('<br/>')

			if (initium_index !== -1) {
				// Create an array of React elements
				const elements = newSelectedArr
					.map(
						(el, index) => `<li style="display: list-item;
						list-style: disc" >
					
					${el}
			</li>`
					)
					.join('')

				console.log('ELEMENTS', elements)
				// Save JSX elements directly
				const NewString = () => {
					return (
						textValue.substring(0, initium_index) +
						'<ul>' +
						elements +
						'</ul>' +
						textValue.substring(finis_index + 1)
					)
				}
				dispatch(textValueFunc(NewString()))
			} else {
				console.log('substring not found')
			}
		}
	}
	let linkHref = ''
	let linkName = ''
	const addLink = e => {
		linkHref = e.target.value
	}
	const addNameLink = e => {
		console.log('addNameLink', e.target.value)
		linkName = e.target.value
	}

	const addLinkElement = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					`<a  style="text-decoration: underline" target="_blank" href=${linkHref}>` +
					selectedText +
					'</a>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)

				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addLinkFile = somelink => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					`<a   target="_blank" href=${somelink}>` + selectedText + '</a>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addStrike = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<s>' + selectedText + '</s>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			dispatch(textValueFunc(textValue + '<br/>'))
			// Выводим значение напрямую вместо добавления его в массив
			console.log('enter')
			// Очищаем поле ввода после нажатия Enter
		}
		if (e.keyCode == 32) {
			// dispatch(textValueFunc(textValue + ' ')) //default add space
			console.log('spacebar')
		}
	}
	const handleAddHeadingOne = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<h1>' + selectedText + '</h1>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addCenterText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<p style="text-align:center" >' + selectedText + '</p>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addLeftText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="text-align:left">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addRightText = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="text-align:right">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const addRight = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-left: 90%">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addLeft = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="margin-right: 90%">' + selectedText + '</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const addCenter = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString =
					'<div style="display:block; width: 50%; margin: 0 auto">' +
					selectedText +
					'</div>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const MarkItalics = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			if (initium_index !== -1) {
				let newSubString = '<i>' + selectedText + '</i>'
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}

	const handleFocus = e => {
		const activeTextarea = document.activeElement
		const selection = activeTextarea.value.substring(
			activeTextarea.selectionStart,
			activeTextarea.selectionEnd
		)
		setSelectedText(selection)
		console.log(selection)
	}

	const wrapWithTag = () => {
		textValue.map(el => {
			console.log(el)
			if (el == selectedText) {
				el = `<h1>${el}</h1>`
			}
		})
	}
	const MarkedElement = ({ italic }) => {
		return <Markup content={italic} />
	}

	const handleDeleteTegs = () => {
		const isExtend = textValue.includes(selectedText)

		if (isExtend) {
			let initium_index = textValue.indexOf(selectedText)

			let finis_index = initium_index + selectedText.length - 1

			const deleteHTMLTegs = word => {
				return word.replace(/<[^>]*>/g, '')
			}
			let newSubString = deleteHTMLTegs(selectedText)
			if (initium_index !== -1) {
				let newString =
					textValue.substring(0, initium_index) +
					newSubString +
					textValue.substring(finis_index + 1)
				console.log(newString)
				dispatch(textValueFunc(newString))
			} else {
				console.log('substring not found')
			}
		}
	}
	const [file, setFile2] = useState(null)

	const addImagesArr = () => {
		dispatch(textValueFunc(textValue + `${imageContentUrl}`))
	}
	// const handleImageChange = async (event) => {
	//   try {
	//     const file = event.target.files[0];
	//     const formData = new FormData();
	//     formData.append("image", file);
	//     const token = await Cookies.get("token")
	//     console.log(formData);
	//     const { data } = await axios.post(
	//       `${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
	//         formData,     {headers: { "Access-Control-Allow-Origin": "*", Authorization: `Bearer ${token}` }}

	//     );
	//     console.log(data.imagelink);
	//     setDataUrl(data.imagelink);
	//     console.log(dataUrl);
	//     setImageContentUrl(
	//       `<img style="max-width:100%, height: auto;" src=${data.imagelink}  alt="name"/>`
	//     );
	//   } catch (err) {
	//     console.log(err);
	//   }
	// };
	const handleImageChange = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			const token = await Cookies.get('token')
			console.log(formData)
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			console.log(data.imagelink)
			setDataUrl(data.imagelink)
			setImageContentUrl(
				`<img style="max-width:100%, height: auto;" src=${
					`${process.env.NEXT_PUBLIC_SERVER_URL}` + `${data.imagelink}`
				}  alt="name"/>`
			)
		} catch (err) {
			console.log(err)
			alert('не удалось загрузить изображение')
		}
	}
	const handleFileChange = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('file', file)

			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/uploadpdf`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			addLinkFile(`${process.env.NEXT_PUBLIC_SERVER_URL}${data.pdflink}`)
		} catch (err) {
			console.log(err)
		}
	}

	const nameRef = useRef(null)
	const filesRef = useRef(null)
	const submitForm = e => {
		e.preventDefault()

		addImagesArr()
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		if (data.URLPage.includes('/') || data.URLPage.includes(' ')) {
			alert('Данный url создается без "/" и не может содержать пробелов.')
		}
		setTypePage(data.TypePage)
		setURLPage(data.URLPage)
		setTitlePage(data.titlePage)
	}
	const addPageInServer = async () => {
		try {
			let newUrl = ''
			const token = await Cookies.get('token')
			const sometext = textValue
			function removeLocalhostURL(text) {
				// Используем регулярное выражение для замены ссылки на пустую строку с использованием переменной link
				const link = process.env.NEXT_PUBLIC_SERVER_URL
				return text.replace(new RegExp(link, 'g'), '')
			}
			function removeLocalhostFromHref(htmlString) {
				const link = process.env.NEXT_PUBLIC_FRONTEND_URL
				return htmlString.replace(new RegExp(link, 'g'), '')
			}

			const resultText = removeLocalhostURL(sometext)
			console.log('resultText', resultText)

			const cleanedHtml = removeLocalhostFromHref(resultText)
			const someDate = await axios.put(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/topublic`,
				{ URLPage, typePage, textValue: cleanedHtml, titlePage },
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${token}`,
					},
				}
			)

			if (someDate.status == 208) {
				console.log(someDate.data.message)
			}
			if (someDate.status == 200) {
				dispatch(textValueFunc(''))
			}
		} catch (error) {
			console.log(error)
			alert(
				`${error.response.data.message}. Текущий статус:${error.response.status}`
			) // Handle any errors
		}
	}

	const handleSubmit22 = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)

			const token = await Cookies.get('token')
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			setImageUrl(data.imagelink)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<div>
				{isPage && (
					<div>
						{isForm == 'false' && (
							<div style={{ color: '#D73636' }}>
								Форма не заполнена либо одно из полей не было заполнено!
							</div>
						)}

						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<input
									className={style.createpage__input}
									type='text'
									placeholder='пишите адрес без пробелов и без "/":'
									{...register('URLPage')}
								/>
							</div>

							<div>
								<Popup
									trigger={
										<button
											style={{
												marginTop: 10,
												marginBottom: 10,
												padding: 10,
												fontSize: 18,
												borderRadius: 10,
												fontWeight: 500,
												backgroundColor: '#0066FF',
											}}
										>
											Загрузить обложку
										</button>
									}
									position='right center'
								>
									<div>
										<input
											id='create-post-img'
											type='file'
											accept='.jpg, .png, .jpeg, .webp'
											onChange={handleSubmit22}
											hidden
										/>
										<label htmlFor='create-post-img'>
											Загрузить изображение
										</label>
									</div>
								</Popup>
							</div>
							<div>
								<input
									type='text'
									className={style.createpage__input}
									placeholder='Заголовок страницы:'
									{...register('titlePage')}
								/>
							</div>
							<div
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 10,
									fontSize: 15,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#131313',
									width: 200,
								}}
							>
								<label>Наш колледж</label>
								<input {...register('TypePage')} type='radio' value='own' />
							</div>
							<div
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 10,
									fontSize: 15,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#131313',
									width: 200,
								}}
							>
								<label>Посты</label>
								<input {...register('TypePage')} type='radio' value='post' />
							</div>
							<input
								type='submit'
								style={{
									marginTop: 10,
									marginBottom: 10,
									padding: 20,
									width: '100%',
									fontSize: 20,
									borderRadius: 10,
									fontWeight: 500,
									backgroundColor: '#0066FF',
								}}
							/>
						</form>
						<button
							onClick={async () => {
								try {
									if (typePage != '' && URLPage != '' && titlePage != '') {
										setIsForm('true')

										function getCurrentDate() {
											const today = new Date()
											const date = new Date()
											const options = { weekday: 'long' }
											const dayOfWeek = date.toLocaleString('ru-RU', options)

											const day = today.getDate().toString().padStart(2, '0') // add leading zero if needed
											const month = (today.getMonth() + 1)
												.toString()
												.padStart(2, '0') // month is zero-based, so add 1
											const year = today.getFullYear()
											return `${dayOfWeek}, ${day}.${month}.${year}`
										}
										if (dataFetch !== null) {
											console.log('is not null')
											const token = await Cookies.get('token')
											await axios
												.post(
													`${process.env.NEXT_PUBLIC_SERVER_URL}/page/create`,
													{
														data,
														URLPage,
														pageTypePublish: false,
														pageDate: getCurrentDate(),
														titlePage,
														pageImage: imageUrl,
														typePage,
													},
													{
														headers: {
															'Access-Control-Allow-Origin': '*',
															Authorization: `Bearer ${token}`,
														},
													}
												)
												.then(response => {
													//console.log(response.data)
													setIsPage(false)
												})
												.catch(error => {
													alert(
														`${error.response.data.message}. Текущий статус:${error.response.status}`
													) // Handle any errors

													setIsPage(true)
													// You can display an error message or perform other actions based on the error
												})
										}
									} else if (
										typePage == '' ||
										URLPage == '' ||
										titlePage == '' ||
										(data == '' && URLPage == '' && titlePage == '')
									) {
										console.log('не заполнены поля!')

										setIsForm('false')
										console.log(isForm)
									} else if (
										typePage == null ||
										URLPage == '' ||
										titlePage == '' ||
										(data == null && URLPage == '' && titlePage == '')
									) {
										console.log('не заполнены поля')
										setIsForm('false')
									}
								} catch (error) {
									console.log(error)
									setIsForm('false')
									console.log(isForm)
								}
							}}
							style={{
								marginTop: 10,
								marginBottom: 10,
								padding: 20,
								fontSize: 20,
								width: '100%',
								borderRadius: 10,
								fontWeight: 500,
								backgroundColor: '#131313',
							}}
						>
							Загрузить страницу
						</button>

						<RenderPredImage imageUrl={imageUrl} />
					</div>
				)}
			</div>
			<div>
				{!isPage && (
					<div className='flex flex-col'>
						<div>
							<Counter />
							<Popup
								trigger={
									<button>
										{' '}
										<NormalTextIcon />
									</button>
								}
								position='bottom center'
							>
								<div
									style={{
										backgroundColor: 'gray',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<button onClick={() => handleDeleteTegs()}>
										Normal text
									</button>
									<button>
										<h1 onClick={() => handleAddHeadingOne()}>Heading 1</h1>
									</button>
									<button onClick={() => handleAddHeadingTwo()}>
										<h2>Heading 2</h2>
									</button>
									<button onClick={() => handleAddHeadingThree()}>
										<h3>Heading 3</h3>
									</button>
								</div>
							</Popup>
							<button
								onClick={() => addParagraphOne()}
								style={{
									display: 'inline-block',
									marginLeft: '5px',
								}}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									fill='#fff'
									className='icon flat-color'
									data-name='Flat Color'
									viewBox='0 0 24 24'
								>
									<path
										fill='#fff'
										d='M20 2H7.5a5.5 5.5 0 000 11H12v7h-1a1 1 0 000 2h8a1 1 0 000-2h-1V4h2a1 1 0 000-2zM7.5 11a3.5 3.5 0 010-7H12v7zm8.5 9h-2V4h2z'
									></path>
								</svg>
							</button>
							<Popup
								trigger={
									<button
										onClick={() => setIsButtonClicked(true)}
										style={{ marginLeft: 10 }}
									>
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<AlignLeft /> <Vector />
										</div>
									</button>
								}
								position='bottom center'
							>
								<div
									style={{
										backgroundColor: 'gray',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<button onClick={() => addRight()}>
										<div style={{ display: 'flex', flexDirection: 'row' }}>
											<AlignRight />
											<span style={{ marginLeft: '10px' }}>в право</span>
										</div>
									</button>
									<button onClick={() => addCenter()}>
										<div style={{ display: 'flex', flexDirection: 'row' }}>
											<AlignCenter />
											<span style={{ marginLeft: '10px' }}>центр</span>
										</div>
									</button>
									<button onClick={() => addLeft()}>
										<div style={{ display: 'flex', flexDirection: 'row' }}>
											<AlignLeft />
											<span style={{ marginLeft: '10px' }}>в лево</span>
										</div>
									</button>
								</div>
							</Popup>
							<Popup
								trigger={
									<button style={{ marginLeft: 10 }}>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
											}}
										>
											<AlignLeft />
											текст
											<div style={{ marginLeft: 5 }}>
												<Vector />
											</div>
										</div>
									</button>
								}
								position='bottom center'
							>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										backgroundColor: 'gray',
										padding: 10,
									}}
								>
									<button onClick={() => addRightText()}>right</button>
									<button onClick={() => addCenterText()}>center</button>
									<button onClick={() => addLeftText()}>left</button>
								</div>
							</Popup>
							<button style={{ marginLeft: 10 }} onClick={() => addStrong()}>
								<BIcon />
							</button>
							<button style={{ marginLeft: 10 }} onClick={() => MarkItalics()}>
								<ItalicIcon />
							</button>
							<button style={{ marginLeft: 10 }} onClick={() => addUnderline()}>
								<UnderlineIcon />
							</button>
							<button style={{ marginLeft: 10 }} onClick={() => addStrike()}>
								<StrikeIcon />
							</button>
							<button style={{ marginLeft: 10 }} onClick={() => addList()}>
								{/* <ListIcon /> */}
								<svg
									width='32'
									height='32'
									viewBox='0 0 32 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M7 12C8.65685 12 10 10.6569 10 9C10 7.34315 8.65685 6 7 6C5.34315 6 4 7.34315 4 9C4 10.6569 5.34315 12 7 12Z'
										fill='#fff'
									/>
									<path
										d='M7 26C8.65685 26 10 24.6569 10 23C10 21.3431 8.65685 20 7 20C5.34315 20 4 21.3431 4 23C4 24.6569 5.34315 26 7 26Z'
										fill='#fff'
									/>
									<path d='M16 22H30V24H16V22ZM16 8H30V10H16V8Z' fill='#fff' />
								</svg>
							</button>
							<button style={{ marginLeft: 10 }} onClick={() => addListNum()}>
								<ListNumberIcon />
							</button>
							<Popup
								trigger={
									<button style={{ marginLeft: 10 }}>
										<LinkIcon />
									</button>
								}
								position='right center'
							>
								<div
									style={{
										backgroundColor: 'gray',
										width: 300,
									}}
								>
									<label htmlFor=''>
										<input
											style={{
												backgroundColor: 'black',
											}}
											type='text'
											value={selectedText}
											onChange={e => addNameLink(e)}
											placeholder='заголовок ссылки'
										/>
										<input
											style={{
												backgroundColor: 'black',
												fontSize: 14,
											}}
											onChange={e => addLink(e)}
											type='text'
											placeholder='ссылка'
										/>
										<button onClick={() => addLinkElement()}>добавить</button>
									</label>
								</div>
							</Popup>
							<Popup
								trigger={
									<button
										style={{
											marginLeft: 10,
											padding: 0,
											border: 'none',
											font: 'inherit',
											color: 'inherit',
											backgroundColor: 'transparent',
										}}
									>
										<ImageIcon />
									</button>
								}
								position='right center'
							>
								<div>
									<form onSubmit={submitForm}>
										<input
											style={{
												backgroundColor: 'gray',
											}}
											id='files'
											ref={filesRef}
											multiple
											type='file'
											accept='.jpg, .png, .jpeg, .webp'
											className='image-button'
											onChange={handleImageChange}
										/>
										<button
											style={{ backgroundColor: 'white', color: 'black' }}
											type='submit'
											handleImageChange
										>
											Загрузить
										</button>
									</form>
								</div>
							</Popup>
							<Popup
								trigger={
									<button>
										{' '}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='#fff'
											class='w-6 h-6'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
											/>
										</svg>
									</button>
								}
								position='right center'
							>
								<div>
									<form onSubmit={submitForm}>
										<input
											style={{
												backgroundColor: 'gray',
											}}
											id='files'
											ref={filesRef}
											multiple
											type='file'
											accept='.pdf'
											className='image-button'
											onChange={handleFileChange}
										/>
									</form>
								</div>
							</Popup>

							<Popup
								trigger={
									<button style={{ marginLeft: 10 }}>
										<AddIcon />
									</button>
								}
								position='right center'
							>
								<div>
									<label htmlFor=''>
										<button onClick={() => addPageInServer()}>
											ОПУБЛИКОВАТЬ
										</button>
									</label>
								</div>
							</Popup>
						</div>

						<textarea
							onChange={e => dispatch(textValueFunc(e.target.value))}
							onMouseUp={e => handleFocus(e)}
							value={textValue.toString()}
							onKeyDown={handleKeyPress}
							style={{
								width: '100%',
								height: '200px',
								backgroundColor: 'black',
							}}
							type='text'
							placeholder='Начните писать...'
						/>

						<RenderAll />
					</div>
				)}
			</div>
		</div>
	)
}

export default CreatePage
