import React, { useState } from 'react';


function resolveObject(obj) {
    return Object.entries(obj);
}

function SubTableItem(props) {
    const [expanded, setExpanded] = useState(true);

    return (
        <tr>
            <td
                onClick={() => setExpanded(!expanded)}
            >
                {props.item[0]}
            </td>
            <td>
                {
                    expanded ?
                    <table>
                        <tbody>
                            { createTable(resolveObject(props.item[1])) }
                        </tbody>
                    </table>
                    :
                    "..."
                }
            </td>
        </tr>
    );
}

function createTable(items) {
    let subTable = [];

    items.map((item, index) => {
        if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
            subTable.push(<TableSingleCell item={item} />);
        }

        else if (typeof item[1] === 'object') {
            subTable.push(
                <SubTableItem item={item} />
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
                <TableSingleCell item={item} />
            );
        }

        if (typeof item[1] === 'object') {
            table.push(
                <SubTableItem item={item} />
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

