import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {Profile} from './components/profile'

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default class SignUp extends React.Component{
  state = {
    Name: '',
		Email: '',
		Password: '',
		CompanyName: ''
  }

  //let navigate = useNavigate();

  // handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     name: this.state.name
  //   };

  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  routeChange = () =>{ 
    // let path = "/HackerTime-Frontend/profile";
    // navigate(path);
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password,
      CompanyName: this.state.CompanyName
    };

    axios.post('http://localhost:8080/v1/auth/signup', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
render() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p align='left'>
        SIGN UP
        </p>

    <Form onSubmit={this.handleSubmit}>
        <Form.Field align='left'>
          <label>Name</label>
          <input placeholder='Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field align='left'>
          <label>Email</label>
          <input placeholder='Email' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field align='left'>
          <label>Company Name</label>
          <input placeholder='Company Name' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field align='left'>
          <label>Password</label>
          <input placeholder='Password' onChange={this.handleChange}/>
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
}

