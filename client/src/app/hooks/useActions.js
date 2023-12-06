import { headerActions } from '@app/store/header/header.slice'
import { counterSliceActions } from '@app/store/pagesAdmin/UndoRendoSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const allActions = {
	...headerActions,
	...counterSliceActions,
}

export const useActions = () => {
	const dispatch = useDispatch

	return bindActionCreators(allActions, dispatch)
}
