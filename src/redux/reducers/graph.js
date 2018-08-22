import {
    ADD_X_AXIS,
    ADD_Y_AXIS,
    SLECT_PLOT_TYPE
} from "../actions/graph";

const initialState = {
    xAxis: undefined,
    yAxis: undefined,
};

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_X_AXIS:
        console.log('x', state);
            return {
                ...state,
                xAxis: payload
            };

        case ADD_Y_AXIS:
            return {
                ...state,
                yAxis: payload
            };

        case SLECT_PLOT_TYPE:
            return {
                ...state,
                plotType: payload
            };

        default:
            return state;
    }
};

export default Reducer;



