import React from 'react'
import { connect } from 'react-redux'

import { addXAxis, addYAxis } from './../../redux/actions/graph'


const SelectAxes = ({
    columns,
    addXAxis,
    addYAxis,
    data
}) => {
    const listItemsX = columns.filter(col => typeof data[0][col] === 'number')
                              .map((col, index) => <option key={index} value={col}>{col}</option>)
    const listItemsY = [2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => 
        <option key={index} value={index}>
            {index}
        </option>
    )

    // default
    addXAxis(columns[0])
    addYAxis(10)

    return (
        <div>
            <br/>
            <strong>
                <font face="helvetica"> &nbsp; Variable quantitative : &nbsp; </font>
            </strong>
            <select onChange={(col) => addXAxis(col.target.value)}>
                {listItemsX}
            </select>

            <br/>
            <br/>

            <strong>
                <font face="helvetica"> &nbsp; Nombre de classes : &nbsp; </font>
            </strong>
            <select onChange={(col) => addYAxis(col.target.value)}>
                {listItemsY}
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    columns: state.data.columns,
    x: state.x,
    y: state.y,
    data: state.data.data
})

const mapDispatchToProps = {
    addXAxis: addXAxis,
    addYAxis: addYAxis,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAxes)
