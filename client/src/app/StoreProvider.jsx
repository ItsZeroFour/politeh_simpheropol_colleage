'use client'
import { makeStore } from '@redux/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({ count, children }) {
	const storeRef = useRef(null)
	if (!storeRef.current) {
		storeRef.current = makeStore()
		storeRef.current.dispatch(initializeCount(count))
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
