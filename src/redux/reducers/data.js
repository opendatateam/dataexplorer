import {
    UPDATE_DATA,
    RESET_PIVOT,
    ADD_RENDER_COLUMNS,
    REMOVE_RENDER_COLUMNS,
    UPDATE_SORTEDDATA,
    ADD_PIVOT,
    REMOVE_PIVOT
} from '../actions/data'

const initialState = {
    data: [],
    columns: [],
    renderedColumns: [],
    sortedData: [],
    pivot: [],
    view: null
}

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case `${UPDATE_DATA}_PENDING`:
            return {
                ...state,
                view: 'loading'
            }

        case `${UPDATE_DATA}_REJECTED`:
            return {
                ...state,
                view: 'error'
            }

        case `${UPDATE_DATA}_FULFILLED`:
            return {
                ...state,
                data: payload.data,
                columns: payload.columns,
                sortedData: payload.data,
                renderedColumns: payload.columns,
                view: 'success'
            }

        // case UPDATE_COLUMNS:
        //     return {
        //         ...state,
        //         columns: payload
        //     }

        // case RESET_SORTEDDATA:
        //     return {
        //         ...state,
        //         sortedData: initialState.sortedData
        //     }

        case RESET_PIVOT:
            return {
                ...state,
                pivot: initialState.pivot
            }

        case ADD_RENDER_COLUMNS:
            return {
                ...state,
                renderedColumns: state.renderedColumns.concat([payload])
            }

        case REMOVE_RENDER_COLUMNS:
            return {
                ...state,
                renderedColumns: state.renderedColumns.filter(item => item !== payload)
            }

        case UPDATE_SORTEDDATA:
            return {
                ...state,
                sortedData: payload
            }

        case ADD_PIVOT:
            return {
                ...state,
                pivot: state.pivot.concat([payload])
            }

        case REMOVE_PIVOT:
            return {
                ...state,
                pivot: state.pivot.filter(item => item !== payload)
            }

        default:
            return state
    }
}

export default Reducer



