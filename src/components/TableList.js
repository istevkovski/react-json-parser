import React from 'react'
import TableItem from './TableItem';

import './Table.css'

export default function TableList(props) {

    function resolveObject(obj) {
        return Object.entries(obj);
    }

    function createSubTable(item) {
        return (
            <tr>
                <td>{item[0]}</td>
                <td>
                    <table>
                        <tbody>
                            { createTable(resolveObject(item[1])) }
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }

    function createTable(items) {
        let subTable = [];

        items.map((item, index) => {
            if ( typeof item[1] === 'string' || typeof item[1] === 'number') {
                subTable.push(<TableItem item={item} />);
            }

            else if (typeof item[1] === 'object') {
                subTable.push(
                    createSubTable(item)
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
                    <TableItem item={item} />
                );
            }

            if (typeof item[1] === 'object') {
                table.push(
                    createSubTable(item)
                );
            }
        });

        return table;
    }

    function processAllInformation(data = props.dataList) {
        return data.map((single, index) => {
            if(index < 1) {
                if (typeof single === 'object')
                    return(
                        <table>
                            <tbody id="table-body">
                                {handleSingle(single)}
                            </tbody>
                        </table>
                    );
            }
        });
    }

    return(
        <React.Fragment>
            { processAllInformation() }
        </React.Fragment>
    );
}
