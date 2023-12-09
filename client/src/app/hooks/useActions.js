import { headerActions } from "@app/store/header/header.slice"

const allActions = {
    ...headerActions
}

export const useActions = () => {
    // const dispatch = useDispatch

    // return bindActionCreators(allActions, dispatch)
    return allActions
}
