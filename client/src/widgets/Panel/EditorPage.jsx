'use client'
import {
	setImages,
	setImages1,
	textValueFunc,
} from '@app/store/pagesAdmin/UndoRendoSlice.js'
import axios from 'axios'
import { Interweave, Markup } from 'interweave'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
	const [isPage, setIsPage] = useState(true)
	const state = useSelector(state => state)
	console.log(state)
	const images1 = useSelector(state => state.counter.present.images1)
	const textValue = useSelector(state => state.counter.present.textValue)
	const images = useSelector(state => state.counter.present.images)
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
	const [isButtonClicked, setIsButtonClicked] = useState(false)
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
					'<div style=" margin-left: 40%">' + selectedText + '</div>'
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

	const addImagesArr = () => {
		const list = images.map(el => {
			return `<img  src=${el} alt="name" />`
		})
		dispatch(textValueFunc(textValue + `${list}`))
	}
	const addImagesArr1 = () => {
		setLocalrenderImage(`<img src=${images1}  alt="name"/>`)
	}
	const handleImageChange = async e => {
		const file = e.target.files[0]
		const reader = new FileReader()
		const base64 = await convertToBase64(file)
		setPostImage({ ...postImage, myFile: base64 })
		setNewImage([postImage])
		reader.onloadend = () => {
			setImage(reader.result)
			dispatch(setImages([reader.result]))
		}
		if (file) {
			reader.readAsDataURL(file)
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
		let newUrl = ''
		const someDate = await axios.put(
			'http://localhost:5000/page/topublic',

			{ URLPage, typePage, textValue, titlePage }
		)

		if (someDate.status == 208) {
			console.log(someDate.data.message)
		}
		if (someDate.status == 200) {
			newUrl = someDate.data.pageUrl
			console.log(someDate.data.pageContent)
			console.log(someDate.data.pageUrl)
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
			{dataPage.status == 200 && <div>{dataPage.data.pageTitle}</div>}
		</form>
	)
}
