import { headerActions } from "@app/store/header/header.slice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const allActions = {
    ...headerActions
}

export const useActions = () => {
    // const dispatch = useDispatch

    // return bindActionCreators(allActions, dispatch)
    return allActions
}
