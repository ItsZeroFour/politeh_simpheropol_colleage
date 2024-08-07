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

export const {
	setImages,
	setImages1,
	textValueFunc,
	italics,
	increment,
	decrement,
	incrementByAmount,
	setDataOurCollege,
} = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount))
	}, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// Note: when using redux-undo, you reference state.[sliceName].present.[targetKey]
export const selectCount = state => state.counter.present
export default counterSlice.reducer
