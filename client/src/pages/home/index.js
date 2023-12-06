import FirstScreen from '@/widgets/home/FirstScreen/FirstScreen'
import { store } from '@app/store/store'
import { Provider } from 'react-redux'
export const Home = () => {
	return (
		<Provider store={store}>
			<section>
				<FirstScreen />
			</section>
		</Provider>
	)
}
