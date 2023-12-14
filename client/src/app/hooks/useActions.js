import { headerActions } from '@app/store/header/header.slice'
import { counterSliceActions } from '@app/store/pagesAdmin/UndoRendoSlice'

const allActions = {
	...headerActions,
	counterSliceActions,
}

export const useActions = () => {
	return allActions
}
