import logo from './logo.svg';
<<<<<<< Updated upstream
import './App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

=======
import { useState } from "react";
import './App.css';
import Main from './Main'
import  IDE  from './components/IDE'
import './App.css';
import * as React from 'react';
import {Candidate} from './Candidate'
>>>>>>> Stashed changes

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


<<<<<<< Updated upstream
function App() {
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
=======
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

export default function App() {
  

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    <Candidate/>
>>>>>>> Stashed changes
  );
}

export default App;
