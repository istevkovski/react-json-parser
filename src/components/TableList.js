import React from 'react'
import TableItem from './TableItem';

import './Table.css'

export default function TableList(props) {

    function processAllInformation(data = props.dataList) {
        console.log(data);
        return data.map((single) => {
            if (typeof single === 'object')
                return <TableItem table={single} />;
        });
    }

    return(
        <React.Fragment>
            { processAllInformation() }
        </React.Fragment>
    );
}
