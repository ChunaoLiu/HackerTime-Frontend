import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import IDE from "./components/IDE";
import { Dropdown } from "./components/Dropdown";
import { Editor } from "./components/Editor";
import { Highlighter } from "./components/Highlighter";

import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import {
  BrowserRouter as Router,
  Switch,
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
  /*
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  return (
    
    <div className="App">
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
    </div>
    
   
     
  );
  */
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={IDE} />
        </Switch>
      </Router>
    </>
  );
}
