import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Login() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }
  const handleChangePw = event => {
    setPassword(event.target.value);
  }

  const routeChange = () => {
    let path = "/HackerTime-Frontend/interview";
    navigate(path);
  }
  const routeChange2 = () => {
    let path = "/HackerTime-Frontend/signup";
    navigate(path);
  }
  const routeChange3 = () => {
    let path = "/HackerTime-Frontend/profile";
    navigate(path);
  }
  const fn_check = () => {
    if (!checked) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      }).catch(err => {
        console.log("You got error : " + err)
      });
    }
    setChecked(!checked);
  }


  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    console.log(user);

    axios.post('http://localhost:8080/v1/auth/login', {
      email: email,
      password: password
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    routeChange();
  }

  return (
    <div className="App">
      <Form.Field align='right'>
        <Button type='submit' onClick={routeChange2}>Sign-up</Button>
      </Form.Field>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200" />
        
        <p align='left'>
          Interviewer Login
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Field align='left'>
            <label>Email</label>
            <input placeholder='Email' onChange={handleChangeEmail} />
          </Form.Field>
          <Form.Field align='left'>
            <label>Password</label>
            <input placeholder='Passwords' onChange={handleChangePw} />
          </Form.Field>
          <Button type='submit'>Login</Button>
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

export default Login;
