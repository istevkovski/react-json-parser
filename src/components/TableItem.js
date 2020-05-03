import React from 'react';


function resolveObject(obj) {
    return Object.entries(obj);
}

class SubTableItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        }
    }

    componentDidUpdate(prevProps) {
        if(this.state.isExpanded !== this.props.expanded && this.props.expanded !== prevProps.expanded){
            this.setState({ isExpanded: this.props.expanded }, () => {
                this.props.counterHandler(this.state.isExpanded > 0 ? 1 : -1);
            });
        }
    }

    render() {
        return (
            <tr>
                <td
                    onClick={() => {
                        this.setState({ isExpanded: !this.state.isExpanded }, () => {
                            this.props.counterHandler(this.state.isExpanded ? 1 : -1);
                        });
                    }}
                >
                    <div className="expandable">
                        {this.props.item[0]}
                        {
                            this.state.isExpanded ?
                            <span>-</span>
                            :
                            <span>+</span>
                        }
                    </div>
                </td>
                <td>
                    {
                        <>
                        <table className={this.state.isExpanded ? null : 'hide'}>
                            <tbody>
                                { createTable(resolveObject(this.props.item[1]), this.props.expanded, this.props.counterHandler, this.props.counter) }
                            </tbody>
                        </table>
                        <span className={this.state.isExpanded ? 'hide' : null} >...</span>
                        </>
                    }
                </td>
            </tr>
    )};
}

function createTable(items, expandedProp, counterHandler, counter) {
    let subTable = [];

    items.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            subTable.push(<TableSingleCell item={item} key={`sC${index}`}/>);
        }

        else if (typeof item[1] === 'object') {
            subTable.push(
                <SubTableItem
                    item={item}
                    key={`sT${index}`}
                    expanded={expandedProp}
                    counterHandler={counterHandler}
                    counter={counter}
                    />
            );
        }
    });
    
    return subTable;
}

function TableSingleCell(props) {
    return(
        <tr className="table-item">
            <td>{props.item[0]}</td>
            <td>{props.item[1]}</td>
        </tr>
    )
}

function handleSingle(obj, props) {
    let object = resolveObject(obj);
    let table = [];

    object.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            table.push(
                <TableSingleCell item={item} key={`sC${index}`}/>
            );
        }

        else if (typeof item[1] === 'object') {
            table.push(
                <SubTableItem
                    item={item}
                    key={`sT${index}`}
                    expanded={props.expanded}
                    counterHandler={props.counterHandler}
                    counter={props.counter}/>
            );
        }
    });

    return table;
}

export default function TableItem(props) {
    return(
        <table>
            <tbody id="table-body">
                {handleSingle(props.table, props)}
            </tbody>
        </table>
    );
}

