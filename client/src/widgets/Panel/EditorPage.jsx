'use client'
import {
	setImages1,
	textValueFunc,
} from '@app/store/pagesAdmin/UndoRendoSlice.js'
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
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import { Counter } from './UndoRendoUI'
export default function App() {
	const [isPage, setIsPage] = useState(true)
	const state = useSelector(state => state)
	console.log(state)
	const images1 = useSelector(state => state.counter.present.images1)
	const textValue = useSelector(state => state.counter.present.textValue)
	const images = useSelector(state => state.counter.present.images)
	const [isFound, setIsFound] = useState(false)
	const count = useSelector(state => state.counter.present.value)
	const [postImage, setPostImage] = useState({ myFile: '' })
	const [checkerForPanel, setCheckerForPanel] = useState(false)
	const [selectedText, setSelectedText] = useState('')
	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const [image1, setImage1] = useState(null)
	const [netImage, setNewImage] = useState([])
	const [netImage1, setNewImage1] = useState('')
	const [postImage1, setPostImage1] = useState({})
	const [localrenderImage, setLocalrenderImage] = useState('')
	const [titleHandler, setTitleHandler] = useState('')
	const [isButtonClicked, setIsButtonClicked] = useState(false)
	const [imageContentUrl, setImageContentUrl] = useState('')
	const [replaceTitle, setReplaceTitle] = useState('')
	const [dataUrl, setDataUrl] = useState('')
	const [isForm, setIsForm] = useState('default')
	const [typePage, setTypePage] = useState('')
	const [URLPage, setURLPage] = useState('')
	const [data, setdata] = useState('')
	const [titlePage, setTitlePage] = useState('')
	const searchEvent = e => {}
	let tmp = '../../app/testing'
	const [dataPage, setDataPage] = useState([])
	const [urlPage, setUrlPage] = useState('')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data1 => {
		setUrlPage(data1.url)
	}
	const RenderAll = () => {
		return <Interweave content={textValue} />
	}
	const RenderPredImage = ({ localrenderImage }) => {
		return <Interweave content={localrenderImage} />
	}
	function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result)
			}
			fileReader.onerror = error => {
				reject(error)
			}
		})
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
						(
							el,
							index
						) => `<li style="display: flex; flex-direction: row; align-items: center; text-align: center; margin: 10px ">
					<div style="width: 10px; height: 10px; background: white; border-radius: 50%; margin-right:10px"></div>
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
		console.log('addLink', e.target.value)
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
				let newSubString = `<a href=${linkHref}>` + linkName + '</a>'
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
					'<div style="text-align:center">' + selectedText + '</div>'
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
					'<div style="display: block; margin-left: auto;margin-right: auto; width: 50%;">' +
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
	const handleTitleChange = event => {
		setTitleHandler(event.target.value)
		console.log(titleHandler)
	}

	const addImagesArr1 = () => {
		setLocalrenderImage(`<img src=${images1}  alt="name"/>`)
	}
	const addImagesArr = () => {
		dispatch(textValueFunc(textValue + `${imageContentUrl}`))
	}
	const handleImageChange = async event => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			console.log(formData)
			const { data } = await axios.post(
				'http://localhost:5000/upload',
				formData
			)
			console.log(data.imagelink)
			setDataUrl(data.imagelink)
			console.log(dataUrl)
			setImageContentUrl(
				`<img style="max-width:100%, height: auto;" src=${data.imagelink}  alt="name"/>`
			)
			console.log(imageContentUrl)
		} catch (err) {
			console.log(err)
		}
	}

	const handleImageChange1 = async e => {
		const file = e.target.files[0]
		const reader = new FileReader()
		const base64 = await convertToBase64(file)
		setPostImage1({ ...postImage1, base64 })
		setNewImage1(postImage1)
		reader.onloadend = () => {
			setImage1(reader.result)

			dispatch(setImages1(reader.result))
			console.log(images1)
		}

		if (file) {
			reader.readAsDataURL(file)
		}
	}

	const nameRef = useRef(null)
	const filesRef = useRef(null)
	const submitForm = e => {
		e.preventDefault()

		addImagesArr()
	}
	const submitForm1 = e => {
		e.preventDefault()
		addImagesArr1()
	}
	const addPageInServer = async () => {
		try {
			let newUrl = ''
			console.log('FFFF', URLPage)
			const someDate = await axios.put(
				'http://localhost:5000/page/topublic',

				{ URLPage, typePage, textValue, titlePage }
			)
			console.log(someDate)
		} catch (error) {
			console.log(error)
		}
	}
	const Search = async () => {
		try {
			const somedata = await axios.get(
				'http://localhost:5000/page/takecollege',
				{ params: { urlPage } },
				{
					headers: { 'Access-Control-Allow-Origin': '*' },
				}
			)
			console.log('Search', somedata)
			setDataPage(somedata)
		} catch (error) {
			setDataPage([null])
			console.log(error.response.status)
		}
	}
	const DataObj = ({ dataPage }) => {
		console.log(dataPage.data.pageTitle)
		return (
			dataPage.status == 200 && (
				<div
					onClick={() => {
						setCheckerForPanel(true)
					}}
				>
					{dataPage.data.PageTitle}
				</div>
			)
		)
	}

	const Checker = ({ dataPage }) => {
		console.log(dataPage)
		if (dataPage.status === 200) {
			return <DataObj dataPage={dataPage} />
		}
		if (dataPage.includes(null)) {
			return <div>Not found 404</div>
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				style={{ backgroundColor: 'black' }}
				type='text'
				placeholder='First name'
				{...register('url', { required: true, maxLength: 500 })}
			/>

			<input type='submit' />
			<button style={{ marginLeft: 10 }} onClick={() => Search()}>
				Поиск
			</button>
			{dataPage.status == 200 && !isFound && (
				<div>
					<button
						onClick={() => {
							setIsFound(true)
							dispatch(textValueFunc(dataPage.data.pageContent))
							setURLPage(dataPage.data.pageUrl)
							setTitlePage(dataPage.data.pageTitle)
							setTypePage(dataPage.data.pageType)
						}}
					>
						<h1>{dataPage.data.pageTitle}</h1>
					</button>
					<Interweave content={dataPage.data.pageImage} />
					<div>{dataPage.data.pageDate}</div>
				</div>
			)}
			{isFound && (
				<div>
					{
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
								<button
									style={{ marginLeft: 10 }}
									onClick={() => MarkItalics()}
								>
									<ItalicIcon />
								</button>
								<button
									style={{ marginLeft: 10 }}
									onClick={() => addUnderline()}
								>
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
										<path
											d='M16 22H30V24H16V22ZM16 8H30V10H16V8Z'
											fill='#fff'
										/>
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
									<div>
										<label htmlFor=''>
											<input
												type='text'
												onChange={e => addNameLink(e)}
												placeholder='заголовок ссылки'
											/>
											<input
												onChange={e => addLink(e)}
												type='text'
												placeholder='ссылка'
											/>
											<button onClick={() => addLinkElement()}>+</button>
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
												className='image-button'
												onChange={handleImageChange}
											/>
											<button
												style={{ backgroundColor: 'white', color: 'black' }}
												type='submit'
											>
												Загрузить
											</button>
										</form>
									</div>
								</Popup>
								<div>
									<input
										onChange={handleTitleChange}
										placeholder='заголовок страницы'
										style={{ backgroundColor: '#000', marginBottom: 10 }}
										type='text'
										value={titleHandler}
									/>
									<button
										type='button'
										onClick={() => {
											console.log('titleHandler', titleHandler)
											let somef = titleHandler
											setTitlePage(somef)
											console.log('hh', titlePage)
										}}
									>
										изменить
									</button>
								</div>

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
								value={textValue}
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
					}
				</div>
			)}
		</form>
	)
}
