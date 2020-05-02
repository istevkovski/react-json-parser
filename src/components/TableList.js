import React, { useState, useEffect } from 'react';
import TableItem from './TableItem';

import './Table.css';


export default function TableList(props) {
    const [expanded, setExpanded] = useState(false);
    const [counter, setCounter] = useState(0);
    const [closeAllChildren, setCloseAllChildren] = useState(false);

    useEffect(() => {
        setCloseAllChildren(false);
    }, [closeAllChildren]);

    const expandAll = () => {
        if(counter > 0) {
            setCloseAllChildren(true)
            setExpanded(false);
            setCounter(0);
        }
        else if (counter === 0) {
            setExpanded(true);
            setCounter(1);
        }
    }

    const counterHandler = (value) => {
        setCounter(counter + value);
    }

    function processAllInformation(data = props.dataList) {
        if (!Array.isArray(data)) data = [data];
        return data.map((single, index) => {
            if (typeof single === 'object')
                return(
                    <TableItem
                        table={single}
                        key={`rT${index}`}
                        expanded={expanded}
                        isAnyExpanded={closeAllChildren}
                        counterHandler={counterHandler}/>
                );
        });
    }

    return(
        <React.Fragment>
            <button className='expand' onClick={expandAll}>
                {counter > 0 ? 'Collapse All' : 'Expand All'}
            </button>
            { processAllInformation() }
        </React.Fragment>
    );
}
