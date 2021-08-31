import React, { useState } from 'react';
import './App.css';
import Columns from './components/Columns';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function App() {
  const [show, setShow ] = useState(true);
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
    <div className="App">
        <h1>Dashboard</h1>
        <Button className="Button" variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Card
        </Button>
        {show ? (
          <div className="Grid">
            <Columns className="column" answerList={dataList} />
            <Columns className="column" answerList={dataList}/>
            <Columns className="column" answerList={dataList}/>
          </div> 
          
        ) : (
          <div className="Modal">
            <Form className="Form">
                <Form.Group className="mb-3" id="formGroup" controlId="exampleForm.ControlInput1">
                    <Form.Label class="formLabel">Title</Form.Label>
                    <Form.Control class="formControl" type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGroup" controlId="exampleForm.ControlTextarea1">
                    <Form.Label class="formLabel">Description</Form.Label>
                    <Form.Control class="formControl" as="textarea" rows={8} />
                </Form.Group>
                <Form.Select id="formGroup">
                    <option>Column</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
            </Form>
            <Button className="Button" variant="primary" type="submit" onClick={() => setShow(true)}>
                Submit
            </Button>
          </div>
        )}
    </div>
  );
}

export default App;
