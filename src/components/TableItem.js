import React, { useState } from 'react';


function resolveObject(obj) {
    return Object.entries(obj);
}

function SubTableItem(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <tr>
            <td
                onClick={() => setExpanded(!expanded)}
            >
                <div className="expandable">
                    {props.item[0]}
                    {
                        expanded ?
                        <span>-</span>
                        :
                        <span>+</span>
                    }
                </div>
            </td>
            <td>
                {
                    <>
                    <table className={expanded ? null : 'hide'}>
                        <tbody>
                            { createTable(resolveObject(props.item[1])) }
                        </tbody>
                    </table>
                    <span className={expanded ? 'hide' : null} >...</span>
                    </>
                }
            </td>
        </tr>
    );
}

function createTable(items) {
    let subTable = [];

    items.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            subTable.push(<TableSingleCell item={item} key={`sC${index}`}/>);
        }

        else if (typeof item[1] === 'object') {
            subTable.push(
                <SubTableItem item={item} key={`sT${index}`}/>
            );
        }
    });

    return subTable;
}

function handleSingle(obj) {
    let object = resolveObject(obj);
    let table = [];

    object.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            table.push(
                <TableSingleCell item={item} key={`sC${index}`}/>
            );
        }

        if (typeof item[1] === 'object') {
            table.push(
                <SubTableItem item={item} key={`sT${index}`}/>
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
                {handleSingle(props.table)}
            </tbody>
        </table>
    );
}

