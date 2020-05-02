import React, { useState, useEffect } from 'react';


function resolveObject(obj) {
    return Object.entries(obj);
}

function SubTableItem(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if(isExpanded !== props.expanded)
            setIsExpanded(props.expanded);
            
        else if(props.isAnyExpanded === true)
            setIsExpanded(false);
    }, [props.expanded, props.isAnyExpanded]);

    useEffect(() => {
        if(isExpanded !== props.expanded)
            props.counter(isExpanded ? 1 : -1)
    }, [isExpanded])

    return (
        <tr>
            <td
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="expandable">
                    {props.item[0]}
                    {
                        isExpanded ?
                        <span>-</span>
                        :
                        <span>+</span>
                    }
                </div>
            </td>
            <td>
                {
                    <>
                    <table className={isExpanded ? null : 'hide'}>
                        <tbody>
                            { createTable(resolveObject(props.item[1]), props.expanded, props.isAnyExpanded, props.counter) }
                        </tbody>
                    </table>
                    <span className={isExpanded ? 'hide' : null} >...</span>
                    </>
                }
            </td>
        </tr>
    );
}

function createTable(items, expandedProp, isAnyExpanded, counterHandler) {
    let subTable = [];

    items.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            subTable.push(<TableSingleCell item={item} key={`sC${index}`}/>);
        }

        else if (typeof item[1] === 'object') {
            subTable.push(
                <SubTableItem item={item} key={`sT${index}`} expanded={expandedProp} isAnyExpanded={isAnyExpanded} counter={counterHandler}/>
            );
        }
    });

    return subTable;
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
                <SubTableItem item={item} key={`sT${index}`} expanded={props.expanded} isAnyExpanded={props.isAnyExpanded} counter={props.counterHandler}/>
            );
        }
    });

    return table;
}

function TableSingleCell(props) {
    return(
        <tr className="table-item">
            <td>{props.item[0]}</td>
            <td>{props.item[1]}</td>
        </tr>
    )
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

