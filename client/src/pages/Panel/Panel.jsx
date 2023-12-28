import LeftMenu from '@widgets/Panel/LeftMenu'
import MainMenu from '@widgets/Panel/MainMenu'
import Cookies from 'js-cookie'
import { useState } from 'react'

const Panel = () => {
	const [mainPanelType, setMainPanelType] = useState('create-page')

	return (
		<>
			{Cookies.get('token') ? (
				<main style={{ display: 'flex' }}>
					<LeftMenu
						setMainPanelType={setMainPanelType}
						mainPanelType={mainPanelType}
					/>
					<MainMenu mainPanelType={mainPanelType} />
				</main>
			) : (
				<div style={{ color: 'white' }}>Войдите в аккаунт, пожалуйста.</div>
			)}
		</>
	)
}

export default Panel
