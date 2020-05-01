import React, { useState } from 'react'
import TableItem from './TableItem';

import './Table.css'

export default function TableList(props) {
    const [expanded, setExpanded] = useState(false);

	const expandAll = () => {
		setExpanded(!expanded);
	}

    function processAllInformation(data = props.dataList) {
        return data.map((single, index) => {
            if (typeof single === 'object')
                return <TableItem table={single} key={`rT${index}`} expanded={expanded}/>;
        });
    }

    return(
        <React.Fragment>
            <button className='expand' onClick={expandAll}>{expanded ? 'Collapse All' : 'Expand All'}</button>
            { processAllInformation() }
        </React.Fragment>
    );
}
