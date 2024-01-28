import axios from 'axios'
import { useState } from 'react'
import HeaderEditorUpdate from './HeaderEditorUpdate'
const HeaderEditor = () => {
	const [url, setUrl] = useState('')
	const [dataUrl, setDataUrl] = useState('')

	const onChangeUrl = e => {
		setUrl(e.target.value)
	}

	const Clicked = async url => {
		try {
			const somedata = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheader`,
				{ params: { url } }
			)
			console.log(somedata)
			setDataUrl(somedata)
		} catch (error) {
			console.log(error)
		}
	}

	const handleSubmit = e => {
		e.preventDefault() // Предотвращаем стандартное поведение отправки формы
		Clicked(url) // Вызываем вашу функцию поиска
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Вставьте url для поиска</label>
				<input
					onChange={onChangeUrl}
					style={{ backgroundColor: '#000' }}
					type='text'
					name=''
					id=''
				/>
				<button
					type='submit' // Указываем тип кнопки "submit"
					style={{
						backgroundColor: '#0066ff',
						padding: '5px 10px 5px 10px',
						marginLeft: 10,
						borderRadius: 10,
					}}
				>
					поиск
				</button>
			</form>
			{dataUrl && <HeaderEditorUpdate data={dataUrl} />}
		</div>
	)
}
export default HeaderEditor
