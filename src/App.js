import logo from './logo.svg';
import  { useState } from "react";
import './App.css';
import Main from './Main'
import  IDE  from './components/IDE'

import * as React from 'react';
import {Candidate} from './components/Candidate'
import ReactDOM from "react-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
  
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

export default function App() {
  

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HackerTime-Frontend/interview" element={<IDE />} />
        <Route path="/HackerTime-Frontend/" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
    
  );

}
ReactDOM.render(<App />, document.getElementById("root"));

