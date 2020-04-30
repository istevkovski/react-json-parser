import React from 'react'
import TableItem from './TableItem';

import './Table.css'

export default function TableList(props) {

    function processAllInformation(data = props.dataList) {
        return data.map((single, index) => {
            if(index < 1) {
                if (typeof single === 'object')
                    return <TableItem table={single} />;
            }
        });
    }

    return(
        <React.Fragment>
            { processAllInformation() }
        </React.Fragment>
    );
}
