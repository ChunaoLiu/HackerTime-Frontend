import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Interviewer() {
  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/interview"; 
    navigate(path);
  }
  return (
    <div className="App">
         <Form.Field align='right'>
        <Button  type='submit' onClick={routeChange}>Sign-up</Button>
        </Form.Field>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p>
        Interviewer Login!
        </p>

    <Form>
        
        <Form.Field align='left'>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field align='left'>
          <label>Password</label>
          <input placeholder='Passwords' />
        </Form.Field>
        <Button type='submit' onClick={routeChange}>Login</Button>
      </Form>
      </header>
    </div>
  );
}

export default Interviewer;
