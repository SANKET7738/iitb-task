import React, { useState } from 'react';
import Card from './SingleCard';
import './Columns.css';

function Columns({answerList}) {
    let dataList = answerList;

    return (
        <div className="column">
            
            <h1>Column</h1>
             {dataList.map((data) => (
                 <Card
                    title={data.title}
                    description={data.description}
                 />
             ))}
        </div>
    )
}

export default Columns
