import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Interviewer() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    name: ''
  });
  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/interview"; 
    if(!checked) {
      toastr.options = {
        positionclassName : 'toast-top-right',
        hideDuration: 300,
        timeOut: 6000,
        newestOnTop: false,
        fontSize: "200px",
      }
      toastr.options.newestOnTop = false;
      toastr.clear()
      toastr.warning('Please allow your camera and mircrophone first');
      return;
    }

    navigate(path);
  }
  const routeChange2 = () =>{ 
    let path = "/HackerTime-Frontend/signup"; 
    navigate(path);
  }
  const routeChange3 = () =>{ 
    let path = "/HackerTime-Frontend/profile"; 
    navigate(path);
  }
  const fn_check = () => {
    if(!checked) {
      navigator.mediaDevices.getUserMedia({video: true, audio: true}).then( stream => {
          window.localStream = stream; // A
          window.localAudio.srcObject = stream; // B
          window.localAudio.autoplay = true; // C
      }).catch( err => {
          console.log("You got error : " + err)
      });
    }
    setChecked(!checked);
  }
  return (
    <div className="App">
         <Form.Field align='right'>
        <Button  type='submit' onClick={routeChange2}>Sign-up</Button>
        </Form.Field>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p align='left'>
        Interviewer Login
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
        <Button type='submit' onClick={routeChange3}>Login</Button>
      </Form>

      <p align='left'>
        Candidate Login
        </p>

    <Form>
        
        <Form.Field align='left'>
          <label>Login Code</label>
          <input placeholder='Code' />
        </Form.Field>
        <Button type='submit' onClick={routeChange}>Start Interview</Button>
      </Form>

    <Form.Field>
        <Checkbox onClick={fn_check} label='Allow Camera and Microphone access' />
      </Form.Field>
      </header>
    </div>
  );
}

export default Interviewer;
