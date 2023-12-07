'use client'

import { configureStore } from '@reduxjs/toolkit'
import undoable from 'redux-undo'
import { headerReducer } from './header/header.slice'
import counterSlice from './pagesAdmin/UndoRendoSlice.js'
import { productApi } from './product/product.api'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		header: headerReducer,
		counter: undoable(counterSlice),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})
