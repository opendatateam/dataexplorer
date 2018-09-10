import React, { Component } from 'react'
import { Accordion, Menu, Sidebar, Checkbox } from 'semantic-ui-react'
import { connect } from "react-redux"
import { addPivot, removePivot, addRenderColumns, removeRenderColumns } from './../../redux/actions/data'

const classes = {
    checkbox: {
        paddingTop: 5
    }
}

const PivotComponent = (columns, pivot, addPivot, removePivot) => (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        {
            columns.map((col, index) => {
                return pivot.indexOf(col) === -1 ?
                (
                    <Checkbox
                        key={index}
                        label={col}
                        style={classes.checkbox}
                        onClick={() => addPivot(col)}
                    />
                ) : (
                    <Checkbox
                        checked
                        key={index}
                        label={col}
                        style={classes.checkbox}
                        onClick={() => removePivot(col)}
                    />
                )
            })
        }
    </div>
)

const ColumnViewComponent = (columns, renderedColumns, addRenderColumns, removeRenderColumns) => (
    <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        {
            columns.map((col, index) => {
                return renderedColumns.indexOf(col) === -1 ?
                (
                    <Checkbox
                        key={index}
                        label={col}
                        style={classes.checkbox}
                        onClick={() => addRenderColumns(col)}
                    />
                ) : (
                    <Checkbox
                        checked
                        key={index}
                        label={col}
                        style={classes.checkbox}
                        onClick={() => removeRenderColumns(col)}
                    />
                )
            })
        }
    </div>
)

class AccordionExampleMenu extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const {
            slider,
            columns,
            renderedColumns,
            pivot,
            addPivot,
            removePivot,
            addRenderColumns,
            removeRenderColumns,
        } = this.props

        return (
            <Sidebar
                animation='overlay'
                width='wide'
                direction='right'
                icon='labeled'
                visible={slider}
            >
            <Accordion as={Menu} vertical style={{borderRadius: 0, width: '100%'}}>
                <Menu.Item>
                    <Accordion.Title
                        active
                        content='Variables visibles'
                        index={1}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content
                        active
                        content={ColumnViewComponent(columns, renderedColumns, addRenderColumns, removeRenderColumns)}
                    />
                </Menu.Item>
                <Menu.Item>
                    <Accordion.Title
                        active
                        content='Agréger par'
                        index={0}
                        onClick={this.handleClick}
                    />
                    <Accordion.Content
                        active
                        content={PivotComponent(columns, pivot, addPivot, removePivot)}
                    />
                </Menu.Item>
            </Accordion>
        </Sidebar>
        )
    }
}

const mapStateToProps = state => ({
    columns: state.data.columns,
    renderedColumns: state.data.renderedColumns,
    pivot: state.data.pivot,
    slider: state.views.slider
})

const mapDispatchToProps = {
    addPivot: addPivot,
    removePivot: removePivot,
    addRenderColumns: addRenderColumns,
    removeRenderColumns: removeRenderColumns
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionExampleMenu)
