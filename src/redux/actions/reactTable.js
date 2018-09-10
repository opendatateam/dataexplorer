export const RESET_ALL = 'RESET_ALL'
export const resetAll = () => ({
    type: RESET_ALL
})

export const RESET_SORTED = 'RESET_SORTED'
export const resetSorted = () => ({
    type: RESET_SORTED
})
export const RESET_PAGE = 'RESET_PAGE'
export const resetPage = () => ({
    type: RESET_PAGE
})
export const RESET_PAGESIZE = 'RESET_PAGESIZE'
export const resetPageSize = () => ({
    type: RESET_PAGESIZE
})
export const RESET_EXPANDED = 'RESET_EXPANDED'
export const resetExpanded = () => ({
    type: RESET_EXPANDED
})
export const RESET_RESIZED = 'RESET_RESIZED'
export const resetResized = () => ({
    type: RESET_RESIZED
})
export const RESET_FILTERED = 'RESET_FILTERED'
export const resetFiltered = () => ({
    type: RESET_FILTERED
})

export const UPDATE_SORTED = 'UPDATE_SORTED'
export const updateSorted = (sorted) => ({
    type: UPDATE_SORTED,
    payload: sorted
})
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const updatePage = (page) => ({
    type: UPDATE_PAGE,
    payload: page
})
export const UPDATE_PAGESIZE = 'UPDATE_PAGESIZE'
export const updatePageSize = (pageSize) => ({
    type: UPDATE_PAGESIZE,
    payload: pageSize
})
export const UPDATE_EXPANDED = 'UPDATE_EXPANDED'
export const updateExpanded = (expanded) => ({
    type: UPDATE_EXPANDED,
    payload: expanded
})
export const UPDATE_RESIZED = 'UPDATE_RESIZED'
export const updateResized = (resized) => ({
    type: UPDATE_RESIZED,
    payload: resized
})
export const UPDATE_FILTERED = 'UPDATE_FILTERED'
export const updateFiltered = (filtered) => ({
    type: UPDATE_FILTERED,
    payload: filtered
})
