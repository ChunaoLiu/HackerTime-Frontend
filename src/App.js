import logo from './logo.svg';
import  { useState } from "react";
import './App.css';
import Main from './components/Main'
import ReactDOM from "react-dom";
import  IDE  from './components/IDE'

import * as React from 'react';
import {Login} from './components/Login'
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
import SignUp from './components/SignUp';
import Profile from './components/Profile';

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;

export default function App() {
  

  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HackerTime-Frontend/interview" element={<Main />} />
        <Route path="/HackerTime-Frontend/" element={<Login />} />
        <Route path="/HackerTime-Frontend/signup" element={<SignUp />} />
        <Route path="/HackerTime-Frontend/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    
  );

}
ReactDOM.render(<App />, document.getElementById("root"));

