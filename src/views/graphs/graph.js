import React from 'react'
import { connect } from 'react-redux'

import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryZoomContainer,
    VictoryTooltip,
} from 'victory'

const Graph = ({
    data,
    graph,
}) => {
    function aggregate() {
        let i
        const temp_store = []
        const aggregation = []
        for ( i = 0 ; i < data.length ; i++ )  {
            temp_store[i] = data[i][graph.xAxis]
        }
        const data_min = Math.min.apply(Math, temp_store)
        const step =  (Math.max.apply(Math, temp_store) - data_min) / graph.yAxis 
        for ( i = 0 ; i < graph.yAxis ; i++ ) {
            let count = 0
            const low = data_min + i * step
            const high = low + step
            for ( var j = 0 ; j < data.length ; j++ )  {
                if ( temp_store[j] >= low && temp_store[j] < high) {
                    count++
                }
            }
            aggregation.push({ x : `[${Math.round(low)},${Math.round(high)}[`, y : count})
        }
        return aggregation
    }

    if (graph.xAxis === undefined || graph.yAxis === undefined) {
        return (
            <div>
                Choisissez les axes
            </div>
        )
    }

    return (
        <VictoryChart
            containerComponent={<VictoryZoomContainer />}
            padding={{top:20, bottom:100, left:50, right:50}}
            domainPadding={{x: 40}}
        >
            <VictoryBar
                data={aggregate()}
                x="x"
                y="y"
                labels={(d) => d.y}
                labelComponent={<VictoryTooltip/>}
                style={{ data: { fill: '#3a8fcc' }}}
            />
            
            <VictoryAxis
                style={{
                    tickLabels: {fontSize : 6, angle : 40, textAnchor : 'start'}
                }}
            />

            <VictoryAxis
                dependentAxis
                style={{
                    tickLabels: {fontSize : 6}
                }}
            />
        </VictoryChart>
    )
}

const mapStateToProps = state => ({
    data: state.data.data,
    graph: state.graph,   
})


export default connect(mapStateToProps)(Graph)
