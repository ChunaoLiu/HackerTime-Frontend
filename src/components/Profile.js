import logo from '../logo.svg';
import pPic from '../profile.svg';
import '../App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Profile() {
  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/profile"; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    ///// Add Change pw option 
    let path = "/HackerTime-Frontend/signup"; 
    navigate(path);
  }
  return (
    <div className="App">
      <Form.Field align='right'>
          <Button  type='submit' onClick={routeChange2}>Change Password</Button>
        </Form.Field>
      <header className="App-header">
        
        <img src={pPic} className="Profile-Pic" alt="pPic" width="100"/>
        <p >
        
        </p>
        <p align='center'>Sukriti Rai <br></br>Company: Purdue University</p>
        <Button type='submit' onClick={routeChange}>Start Interview</Button>
    <Form>
{/*         
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
        <Button type='submit' onClick={routeChange}>Create Account</Button> */}
      </Form>
      </header>
    </div>
  );
}

export default Profile;
