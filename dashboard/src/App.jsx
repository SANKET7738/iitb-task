import React, { useState, useEffect } from 'react';
import './App.css';
import Columns from './components/Columns';
import { Button } from 'react-bootstrap';
import FormModal from './components/FormModal';

function App() {
  const [show, setShow ] = useState(true);
 
  let dataList = [
    {
        title: "Demo Card",
        description: `Some quick example text to build on the card title and make up the bulk of
        the card's content.`
    },
  ]

  const [column1, setColumn1 ] = useState(dataList);
  const [column2, setColumn2 ] = useState([]);
  const [column3, setColumn3 ] = useState([]);

  useEffect(() => {
    const column1Data = localStorage.getItem('column-1');
    if(column1Data){
      setColumn1(JSON.parse(column1Data));
    }
  }, []);

  useEffect(() => {
    const column2Data = localStorage.getItem('column-2');
    if(column2Data){
      setColumn2(JSON.parse(column2Data));
    }
  }, []);

  useEffect(() => {
    const column3Data = localStorage.getItem('column-3');
    if(column3Data){
      setColumn3(JSON.parse(column3Data));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('column-1', JSON.stringify(column1));
  })

  useEffect(() => {
    localStorage.setItem('column-2', JSON.stringify(column2));
  })

  useEffect(() => {
    localStorage.setItem('column-3', JSON.stringify(column3));
  })

  function addToColumn(data) {
    data.preventDefault();
    let cardData = {
      title: data.target[0].value,
      description: data.target[1].value,
      column : data.target[2].value,
      addToColumn: {addToColumn},
    }
    
    if(cardData.column==="1"){
      column1.push(cardData)
      setColumn1(column1);
    }
    else if(cardData.column==="2"){
      column2.push(cardData)
      setColumn2(column2);
    }
    else if(cardData.column==="3"){
      column3.push(cardData)
      setColumn3(column3);
    }
    setShow(true);
  }
  

  return (
    <div className="App">
        <h1>Dashboard</h1>
        <Button className="Button" variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Card
        </Button>
        {show ? (
          <div className="Grid">
            <Columns className="column" answerList={column1} />
            <Columns className="column" answerList={column2}/>
            <Columns className="column" answerList={column3}/>
          </div> 
          
        ) : (
              <FormModal addToColumn={addToColumn} />
        )}
    </div>
  );
}

export default App;
