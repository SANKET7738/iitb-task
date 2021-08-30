import React, { useState } from 'react'
import './SingleCard.css'
import { Card } from 'react-bootstrap';

function SingleCard({title, description }) {

    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="cardTitle">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleCard;
