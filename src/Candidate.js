import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Candidate() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Candidate!
        </p>
        {/* <TextField id="name" 
        label="Filled" variant="filled" /> */}

    <Form>
        <Form.Field align='left'>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field align='left'>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Allow Camera and Microphone access' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

      </header>
    </div>
  );
}

export default Candidate;
