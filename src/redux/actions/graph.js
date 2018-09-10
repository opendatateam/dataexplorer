export const ADD_X_AXIS = 'ADD_X_AXIS'
export const addXAxis = (axis) => ({
    type: ADD_X_AXIS,
    payload: axis
})

export const ADD_Y_AXIS = 'ADD_Y_AXIS'
export const addYAxis = (axis) => ({
    type: ADD_Y_AXIS,
    payload: axis
})

export const SLECT_PLOT_TYPE = 'SLECT_PLOT_TYPE'
export const selectPlotType = (plotType) => ({
    type: SLECT_PLOT_TYPE,
    payload: plotType
})
