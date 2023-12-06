'use client'

import { configureStore } from '@reduxjs/toolkit'
import { headerReducer } from './header/header.slice'
import { UndoRedoSlice } from './pagesAdmin/UndoRendoSlice.js'
import { productApi } from './product/product.api'

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		header: headerReducer,
		pagesAdmin: UndoRedoSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productApi.middleware),
})
