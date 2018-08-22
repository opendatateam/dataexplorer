import React from 'react'
import { connect } from "react-redux"
import Loading from './loading'
import Fail from './fail'
import Header from './header'
import SwitchViews from './switchviews'
import { withRouter } from 'react-router'
import { Sidebar, Segment } from 'semantic-ui-react'
import SidebarData from './../datatable/sidebar'

const Skeleton = ({ view, slider }) => {

    if(view === 'success') {
        return (
            <div>
                <Header />
                <Sidebar.Pushable
                    as={Segment}
                    style={{
                        margin:0,
                        padding: 0,
                        border: 'none',
                        borderRadius: 0
                    }}
                >
                    <SidebarData />
                    <Sidebar.Pusher>
                        <SwitchViews />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    } else if (view === 'error') {
        return <Fail />
    } else {
        return <Loading />
    }

}

const mapStateToProps = state => ({
    view: state.data.view,
    slider: state.views.slider
});

export default withRouter(connect(mapStateToProps)(Skeleton))