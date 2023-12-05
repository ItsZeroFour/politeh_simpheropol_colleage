'use client'

import { Provider } from "react-redux"

const ClientProvider = ({ children, store }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ClientProvider
