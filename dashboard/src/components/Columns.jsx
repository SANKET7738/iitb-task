import React, { useState } from 'react';
import Card from './SingleCard';
import './Columns.css';

function Columns({answerList}) {
    let dataList = answerList;
    console.log(dataList);
    
    return (
        <div className="column">
            
            <h1>Column</h1>
             {dataList && dataList.map((data) => (
                 <Card
                    cardData={data}
                 />
             ))}
        </div>
    )
}

export default Columns
