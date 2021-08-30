import React, { useState } from 'react';
import Card from './SingleCard';
import './Columns.css';

function Columns() {
    let dataList = [];
    dataList = [
        {
            title: "Title-1",
            description: `Some quick example text to build on the card title and make up the bulk of
            the card's content.`
        },
        {
            title: "Title-2",
            description: `Some quick example text to build on the card title and make up the bulk of
            the card's content.`
        },
        {
            title: "Title-3",
            description: `Some quick example text to build on the card title and make up the bulk of
            the card's content.`
        },
    ]
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
