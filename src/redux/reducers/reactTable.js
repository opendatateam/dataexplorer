import {
    RESET_ALL,
    RESET_SORTED, UPDATE_SORTED,
    RESET_PAGE, UPDATE_PAGE,
    RESET_PAGESIZE, UPDATE_PAGESIZE,
    RESET_EXPANDED, UPDATE_EXPANDED,
    RESET_RESIZED, UPDATE_RESIZED,
    RESET_FILTERED, UPDATE_FILTERED
} from '../actions/reactTable'

const initialState = {
    sorted: [],
    page: 0,
    pageSize: 50,
    expanded: {},
    resized: [],
    filtered: [],
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case RESET_ALL:
            return initialState

        case RESET_SORTED:
            return {
                ...state,
                sorted: initialState.sorted
            }

        case RESET_PAGE:
            return {
                ...state,
                page: initialState.page
            }

        case RESET_PAGESIZE:
            return {
                ...state,
                pageSize: initialState.pageSize
            }

        case RESET_EXPANDED:
            return {
                ...state,
                expanded: initialState.expanded
            }

        case RESET_RESIZED:
            return {
                ...state,
                resized: initialState.resized
            }

        case RESET_FILTERED:
            return {
                ...state,
                filtered: initialState.filtered
            }


        case UPDATE_SORTED:
            return {
                ...state,
                sorted: payload
            }

        case UPDATE_PAGE:
            return {
                ...state,
                page: payload
            }

        case UPDATE_PAGESIZE:
            return {
                ...state,
                pageSize: payload
            }

        case UPDATE_EXPANDED:
            return {
                ...state,
                expanded: payload
            }

        case UPDATE_RESIZED:
            return {
                ...state,
                resized: payload
            }

        case UPDATE_FILTERED:
            return {
                ...state,
                filtered: payload
            }

        default:
            return state
    }
}

export default Reducer



