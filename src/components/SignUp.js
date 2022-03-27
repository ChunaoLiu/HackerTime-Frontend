import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
// import {Profile} from './components/profile'

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function SignUp() {
  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/profile"; 
    navigate(path);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p align='left'>
        SIGN UP
        </p>

    <Form>
        
        <Form.Field align='left'>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field align='left'>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field align='left'>
          <label>Company Name</label>
          <input placeholder='Company Name' />
        </Form.Field>
        <Form.Field align='left'>
          <label>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Form.Field align='left'>
          <input placeholder='Retype Password' />
          <input type="checkbox" id="scales" name="scales"></input>
         <label>Agree with terms and conditions</label>
        </Form.Field>
        <Button type='submit' onClick={routeChange}>Create Account</Button>
      </Form>
      </header>
    </div>
  );
}

export default SignUp;
