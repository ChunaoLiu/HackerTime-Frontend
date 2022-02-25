import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Candidate (){
  const navigate = useNavigate();
  
  const [state, setState] = useState({
    name: ''
  });
  
  const routeChange = () =>{ 
    
    let path = "/HackerTime-Frontend/interview"; 
    navigate(path);
  }


  const handleOnSubmit = (event) => {
    event.preventDefault()
    
    let path = "/HackerTime-Frontend/interview"; 
    console.log(event.target.name.value);
    console.log("HEY");
    navigate(path, event.target.name.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p>
          Welcome Candidate!
        </p>
        {/* <TextField id="name" 
        label="Filled" variant="filled" /> */}

    {<Form onSubmit={handleOnSubmit}>
        <Form.Field align='left'>
          <label>First Name</label>
          <input placeholder='First Name' id="fName"/>
          
        </Form.Field>
        <Form.Field align='left'>
          <label>Last Name</label>
          <input placeholder='Last Name' id="lName" name="name"/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='Allow Camera and Microphone access' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form> }




      {/* <h1>Welcome Candidate</h1>
      <Form className="Candidate" onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>  
      <Form.Field>
          <Checkbox label='Allow Camera and Microphone access' />
        </Form.Field>
        <Button type='submit'>Submit</Button> */}
      </header>
    </div>
  );
}

export default Candidate;
