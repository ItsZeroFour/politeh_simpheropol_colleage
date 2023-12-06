'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'api/product',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: build => ({
        getProducts: build.query({ query: (limit = 5) => `products?limit=${limit}`})
    })
})


export const { useGetProductsQuery } = productApi

