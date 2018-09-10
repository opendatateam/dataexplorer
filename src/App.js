import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux'
import Skeleton from './views/skeleton'

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Skeleton />
        </ConnectedRouter>
    </Provider>
)

export default App
