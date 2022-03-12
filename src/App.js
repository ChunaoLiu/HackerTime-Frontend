import logo from './logo.svg';
import  { useState } from "react";
import './App.css';
import Main from './components/Main'
import  IDE  from './components/IDE'

import * as React from 'react';
import {Candidate} from './components/Candidate'
import ReactDOM from "react-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


  
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
const defaultLanguage = (
  <code>${"javascript" || Object.keys(languages).sort()[0]}</code>
);
const defaultTheme = (
  <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>
);

export default function App() {
  

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HackerTime-Frontend/interview" element={<Main />} />
        <Route path="/HackerTime-Frontend/" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
    
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

