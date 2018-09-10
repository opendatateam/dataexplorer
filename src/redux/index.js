import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import viewReducer from './reducers/views'
import reactTableReducer from './reducers/reactTable'
import graphReducer from './reducers/graph'
import dataReducer from './reducers/data'
import promiseMiddleware from 'redux-promise-middleware'

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose

export const history = createHistory()

const reducers = combineReducers({
    router: routerReducer,
    views: viewReducer,
    reactTable: reactTableReducer,
    graph: graphReducer,
    data: dataReducer
    // ui: uiReducer,
    // data: dataReducer,
})

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        promiseMiddleware(),
    )
)

const Store = createStore(reducers, enhancer)

export default Store
