import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Main from './Main'
import  IDE  from './components/IDE'
import { Dropdown } from "./components/Dropdown";
import { Editor } from "./components/Editor";
import { Highlighter } from "./components/Highlighter";
import { Button, Checkbox, Form } from 'semantic-ui-react'


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

export default function App() {
  /*

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    
    < className="App">
      <div className="ControlsBox">
      <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />
      </div>
      <div className="PanelsBox">
      <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
      <Main/> 
      
      
*/
    const sendRequest = async () => {

    }
return (
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
        <Button type='submit' onPress={sendRequest}>Submit</Button>
      </Form>

      </header>
      
  
    
   
     

  
  
    
    
  );

}

