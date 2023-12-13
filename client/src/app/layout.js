import '@/app/scss/index.scss'
import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'
import { Poppins } from 'next/font/google'
import ClientProvider from './store/ClientProvider'
import { store } from './store/store'

// TODO: fix this shit when we have something like this in the browser

export const metadata = {
	title: 'Симферопольский политехнический колледж',
	description: `Государственное бюджетное профессиональное образовательное учреждение
   Республики Крым «Симферопольский политехнический колледж», создано Советом министров
  Республики Крым на основании распоряжения от 09.12.2014 № 1326-р
  «О создании Государственных бюджетных учреждений Республики Крым»,
  приказа Министерства образования, науки и молодежи Республики Крым
  от 11.12.2014 №349 «О государственных бюджетных учреждениях Республики Крым».`,
}



const poppins = Poppins({
	weight: ['400', '500', '700'],
	style: 'normal',
	subsets: ['latin'],
})


const RootLayout = ({ children }) => {
	return (
		<html len='ru'>
			<body className={poppins.main}>
				<ClientProvider store={store}>
					<div className='page'>
						<div className='container'>
							<Header />
							<main>{children}</main>
						</div>

						<Footer />
					</div>
				</ClientProvider>
			</body>
		</html>
	)
}

export default RootLayout
