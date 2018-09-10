import React from 'react'
import { 
    Icon, 
    Menu,
    Segment,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DataHeader from './../datatable/header'

const Header = ({ path, history, toggleSlider, search }) => (
    <Segment inverted style={{borderRadius: 0, margin: 0, background: 'linear-gradient(45deg,#1b71af,#55a9e5)'}}>
        <Menu inverted pointing secondary style={{borderColor: 'rgba(0, 0, 0, 0)'}}>
            <Menu.Item
                active={path === '/data'}
                onClick={() => history.push('/data' + search)}
            >
                <Icon name='database' />
                Données
            </Menu.Item>
            <Menu.Item
                active={path === '/graphs'}
                onClick={() => history.push('/graphs' + search)}
            >
                <Icon name='pie chart' />
                Graphiques
            </Menu.Item>
            <DataHeader />
        </Menu>
    </Segment>
)

export const mapStateToProps = state => ({
    path: state.router.location.pathname,
    search: state.router.location.search
})

const RoutedHeader = withRouter(Header)

export default connect(mapStateToProps)(RoutedHeader)
