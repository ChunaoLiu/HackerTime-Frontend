import logo from '../logo.svg';
import '../App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useRef, useState, useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = "/HackerTime-Frontend/profile";
    navigate(path);
  }
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [password, setPassword] = useState();

  const handleChangeName = event => {
    setName(event.target.value);
  }
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }
  const handleChangeCName = event => {
    setCompanyName(event.target.value);
  }
  const handleChangePw = event => {
    setPassword(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
      companyName: companyName
    };
    console.log(user);

    axios.post('http://localhost:8080/v1/auth/signup', {
      name: name,
      email: email,
      password: password,
      companyName: companyName
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      routeChange();
  }
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200" />
        <p align='left'>
          SIGN UP
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Field align='left'>
            <label>Name</label>
            <input placeholder='Name' onChange={handleChangeName} />
          </Form.Field>
          <Form.Field align='left'>
            <label>Email</label>
            <input placeholder='Email' onChange={handleChangeEmail} />
          </Form.Field>
          <Form.Field align='left'>
            <label>Company Name</label>
            <input placeholder='Company Name' onChange={handleChangeCName} />
          </Form.Field>
          <Form.Field align='left'>
            <label>Password</label>
            <input placeholder='Password' onChange={handleChangePw} />
          </Form.Field>
          <Form.Field align='left'>
            <input placeholder='Retype Password' />
            <input type="checkbox" id="scales" name="scales"></input>
            <label>Agree with terms and conditions</label>
          </Form.Field>
          {/* <Button type='submit' onClick={routeChange}>Create Account</Button> */}
          <Button type='submit'>Create Account</Button>
        </Form>
      </header>
    </div>
  );
}

export default SignUp;
