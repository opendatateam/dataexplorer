import {
    TOGGLE_SLIDER,
} from '../actions/views'

const initialUiState = {
    slider: false,
}

const uiReducer = (state = initialUiState, { type, payload }) => {
    switch (type) {
        case TOGGLE_SLIDER:
            return {
                ...state,
                slider: !state.slider
            }

        default:
            return state
    }
}

export default uiReducer
