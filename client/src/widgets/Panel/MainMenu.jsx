import CreatePage from './CreatePage'
import EditorPage from './EditorPage'
import ScheduleEditor from './ScheduleEditor/ScheduleEditor'
import style from './Panel.module.scss'

const MainMenu = ({ mainPanelType }) => {
	return (
		<section className={style.main__menu}>
			{mainPanelType === 'create-page' && <CreatePage />}
			{mainPanelType === 'edit-page' && <EditorPage />}
			{mainPanelType === 'edit-schedule' && <ScheduleEditor />}
		</section>
	)
}

export default MainMenu
