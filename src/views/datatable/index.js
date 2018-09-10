import React from 'react'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import {
    updateSorted,
    updatePage,
    updatePageSize,
    updateExpanded,
    updateResized,
    updateFiltered,
} from './../../redux/actions/reactTable'
import { updateSortedData } from './../../redux/actions/data'
import 'react-table/react-table.css'

function filterCaseInsensitive(filter, row) {
    const id = filter.pivotId || filter.id
    if (row[id] !== undefined && typeof(row[id]) === 'string')  {
        return String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
    }
    else if (row[id] !== undefined && typeof(row[id]) !== 'string')  {
        return String(row[id]).includes(String(filter.value))
    }
    else {
        return true
    }
}

const TableComponent = ({
    data,
    columns,
    reactTable,
    updateSorted,
    updatePage,
    updatePageSize,
    updateExpanded,
    updateResized,
    updateFiltered,
    updateSortedData,
    pivot,
    renderedColumns,
    ...other
}) => {

    const cols = renderedColumns.map(column => ({
        Header: column,
        accessor: column,
        style: { fontFamily: 'Helvetica'},
        headerStyle: { fontSize: '16px',
                       fontWeight: 'bold',
                       fontFamily: 'Helvetica'}
    }))

    return (
        <ReactTable
            ref={(table) => table ? updateSortedData(table.state.sortedData) : null }
            filterable
            noDataText='Aucune donnée'
            previousText='Précédent'
            nextText='Suivant'
            loadingText='Chargement...'
            ofText='sur'
            rowsText='données'
            defaultFilterMethod={filterCaseInsensitive}
            pivotBy={pivot}
            data={data}
            style={{
                height: 'calc(100vh - 74px)',
            }}

            sorted={reactTable.sorted}
            page={reactTable.page}
            pageSize={reactTable.pageSize}
            expanded={reactTable.expanded}
            resized={reactTable.resized}
            filtered={reactTable.filtered}

            onSortedChange={sorted => updateSorted(sorted)}
            onPageChange={page => updatePage(page)}
            onPageSizeChange={(pageSize, page) => {
                updatePageSize(pageSize)
                updatePage(page)
            }}
            onExpandedChange={expanded => updateExpanded(expanded)}
            onResizedChange={resized => updateResized(resized)}
            onFilteredChange={filtered => updateFiltered(filtered)}

            className='-striped -highlight'
            columns={cols}
        />
    )
}

const mapStateToProps = state => ({
    data: state.data.data,
    columns: state.data.columns,
    reactTable: state.reactTable,
    pivot: state.data.pivot,
    renderedColumns: state.data.renderedColumns,
})

const mapDispatchToProps = {
    updateSorted: updateSorted,
    updatePage: updatePage,
    updatePageSize: updatePageSize,
    updateExpanded: updateExpanded,
    updateResized: updateResized,
    updateFiltered: updateFiltered,
    updateSortedData: updateSortedData,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)
