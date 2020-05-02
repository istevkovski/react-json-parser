import React from 'react'
import TableItem from './TableItem';

import './Table.css'


export default class TableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            expandedCounter: 0,
            closeAllChilden: false
        }
    }

	expandAll = () => {
        if(this.state.expandedCounter > 0 || this.state.expanded === true)
            this.setState({ closeAllChilden: true }, () => {
                this.setState({expanded: false, closeAllChilden: false, expandedCounter: 0})
            });
        else if (this.state.expandedCounter <= 0 && this.state.expanded === false) this.setState({ expanded: true, expandedCounter: 1});
    }

    counterHandler = (value) => {
        this.setState({ expandedCounter: this.state.expandedCounter + value})
    }

    processAllInformation(data = this.props.dataList) {
        if (!Array.isArray(data)) data = [data];
        return data.map((single, index) => {
            if (typeof single === 'object')
                return(
                    <TableItem
                        table={single}
                        key={`rT${index}`}
                        expanded={this.state.expanded}
                        isAnyExpanded={this.state.closeAllChilden}
                        counter={this.counterHandler}/>
                );
        });
    }

    render() {
        return(
            <React.Fragment>
                <button className='expand' onClick={this.expandAll}>
                    {(() => {
                        if(this.state.expandedCounter > 0 || this.state.expanded === true)
                            return 'Collapse All'
                        else return 'Expand All'
                    })()}
                </button>
                { this.processAllInformation() }
            </React.Fragment>
    )};
}
