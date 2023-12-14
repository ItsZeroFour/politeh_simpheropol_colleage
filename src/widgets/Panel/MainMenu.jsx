import CreatePage from './CreatePage'
import EditorPage from './EditorPage'
import style from './Panel.module.scss'

const MainMenu = ({ mainPanelType }) => {
	return (
		<section className={style.main__menu}>
			{mainPanelType === 'create-page' && <CreatePage />}
			{mainPanelType === 'edit-page' && <EditorPage />}
		</section>
	)
}

export default MainMenu
