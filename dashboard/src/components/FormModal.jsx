import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik }  from 'formik';

let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().min(25, ({min}) => `Descriptipn must be atleast ${min} characters`),
})

function FormModal({addToColumn, cardData}) {
    const [data, setData ] = useState({
        title: cardData ? cardData.title : "",
        description:cardData ? cardData.description : "",
        column: cardData ? cardData.column : "",
      })

    // useEffect(() => {
    //   if(cardData){
    //     setData(cardData);
    //   }
    // },[])

    
    const handleTitleInputChange = (event) => {
      setData({...data, title: event.target.value})
    }
  
    const handleDescriptionInputChange = (event) => {
      setData({...data, description: event.target.value})
    }
  
    const handleColumnInputChange = (event) => {
      setData({...data, column: event.target.value})
    }
    
    return (
        <div className="Modal">
            <Form className="Form" onSubmit={addToColumn}>
                <Form.Group className="mb-3" id="formGroup" controlId="exampleForm.ControlInput1">
                    <Form.Label class="formLabel">Title</Form.Label>
                    <Form.Control 
                      class="formControl"  
                      type="text" 
                      placeholder="Title" 
                      value={data.title} 
                      onChange={handleTitleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" id="formGroup" controlId="exampleForm.ControlTextarea1">
                    <Form.Label class="formLabel">Description</Form.Label>
                    <Form.Control 
                      class="formControl" 
                      s="textarea" rows={8} 
                      value={data.description}
                      onChange={handleDescriptionInputChange}
                    />
                </Form.Group>
                <Form.Select 
                  id="formGroup" 
                  value={data.column}
                  onChange={handleColumnInputChange}
                >
                    <option>Column</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
                <Button className="Button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </div>
    )
}

export default FormModal
