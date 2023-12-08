import axios from 'axios'
import { Interweave } from 'interweave'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
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
		return (
			<div>
				<Interweave content={dataPage.data.pageImage + ''} />
				<p>{dataPage.data.pageTitle}</p>
				<span>{dataPage.data.pageDate}</span>
			</div>
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
			<Checker dataPage={dataPage} />
		</form>
	)
}
