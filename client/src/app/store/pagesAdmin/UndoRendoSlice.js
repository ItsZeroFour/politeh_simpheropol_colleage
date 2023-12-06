import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
	italic: '',
	textValue: '',
	images: [],
	images1: '',
	dataOurCollege: [],
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,

	reducers: {
		setDataOurCollege: (state, action) => {
			state.dataOurCollege = action.payload
		},
		setImages1: (state, action) => {
			state.images1 = action.payload
		},
		setImages: (state, action) => {
			state.images = action.payload
		},
		textValueFunc: (state, action) => {
			state.textValue = action.payload
		},
		italics: (state, action) => {
			state.italic = action.payload
		},
		increment: state => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

// setImages,
// setImages1,
// textValueFunc,
// italics,
// increment,
// decrement,
// incrementByAmount,
// setDataOurCollege,
export const counterSliceActions = counterSlice.actions

export const UndoRedoSlice = counterSlice.reducer
