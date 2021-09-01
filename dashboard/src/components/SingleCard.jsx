import React, { useState } from 'react'
import './SingleCard.css'
import { Card } from 'react-bootstrap';
import FormModal from './FormModal';


function SingleCard({cardData}) {

    const [show, setShow ] = useState(true);

    function UpdateCard() {
        setShow(false)
    }
    

    return (
        <div>
            {show ? (
                <Card className="card"  onClick={UpdateCard}>
                <Card.Body>
                    <Card.Title className="cardTitle">{cardData.title}</Card.Title>
                    <Card.Text>{cardData.description}</Card.Text>
                    {/* <button onClick={(e) => UpdateCard(e)}>edit</button> */}
                </Card.Body>
            </Card>
            ) :(
                <FormModal cardData={cardData} addToColumn={cardData.addToColumn} />
            )}
            
        </div>
    )
}

export default SingleCard;
