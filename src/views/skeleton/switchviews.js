import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DataTable from './../datatable'
import Graphs from './../graphs'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({
    location: state.router.location,
})

const Default = ({location}) => <Redirect to={'/data' + location.search} />

const ConnectedDefault = connect(mapStateToProps)(Default)

const SwitchViews = () => (
    <div
        style={{
            height: 'calc(100vh - 74px)'
        }}
    >
    <Switch>
        <Route
            exact
            strict
            path={'/data'}
            component={DataTable}
        />
        <Route
            exact
            strict
            path={'/graphs'}
            component={Graphs}
        />
        <Route
            component={ConnectedDefault}
        />
    </Switch>
    </div>
)

export default SwitchViews
