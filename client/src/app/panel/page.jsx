'use client'
import Panel from '@pages/Panel/Panel'
import { Provider } from 'react-redux'
import { store } from '../store/store.js'
const page = () => {
	return (
		<Provider store={store}>
			<Panel />
		</Provider>
	)
}

export default page
