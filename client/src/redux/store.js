import { counterSlice } from '@app/features/UndoRendoSlice'
import { configureStore } from '@reduxjs/toolkit'
export const makeStore = () => {
	return configureStore({
		reducer: { counterSlice },
	})
}
