import React from 'react'
import TableItem from './TableItem';

import './Table.css'


export default class TableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            counter: 0
        }
    }

	expandAll = () => {
        if(this.state.counter > 0)
            this.setState({expanded: true}, () => {
                this.setState({expanded: false})
            });
        else if(this.state.counter === 0)
            this.setState({expanded: false}, () => {
                this.setState({expanded: true})
            });
    }

    counterHandler = (value) => {
        this.setState((prevState, props) => {
            return { counter: prevState.counter + value }
        });
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
                        counter={this.state.counter}
                        counterHandler={this.counterHandler}/>
                );
        });
    }

    render() {
        return(
            <React.Fragment>
                <button className='expand' onClick={this.expandAll}>
                    {(() => {
                        if(this.state.counter > 0)
                            return 'Collapse All'
                        else return 'Expand All'
                    })()}
                </button>
                { this.processAllInformation() }
            </React.Fragment>
    )};
}
