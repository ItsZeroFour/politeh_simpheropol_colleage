'use client'

import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './product/product.api'
import { headerReducer } from './header/header.slice'

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, header: headerReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
