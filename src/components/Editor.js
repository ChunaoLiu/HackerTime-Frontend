import React, { useRef, useState, useEffect } from "react";
import Videochat from "./Videochat";
import { defaultCode } from "./defaultCode";
import Editor from "@monaco-editor/react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
const RealEditor = () => {
  
  const [options, setOption] = useState();
  const [lang, setLang] = useState();
  const [code, setCode] = useState();
  const [result, setResult] = useState();
  const [input, setInput] = useState();
  useEffect(() => {
    setCode(defaultCode.cpp);
    setLang("cpp");
    setResult("Submit Code to See Result");
    setOption({
      selectOnLineNumbers: true,
      renderIndentGuides: true,
      colorDecorators: true,
      cursorBlinking: "blink",
      autoClosingQuotes: "always",
      find: {
        autoFindInSelection: "always",
      },
      snippetSuggestions: "inline",
    });
  });

  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  const onLangSelectHandler = (e) => {

    setLang(e.target.value)
    setCode(defaultCode["java"])
    console.log(lang)
    console.log(e.target.value)
  }
  const onCodeChangeHandler = (newCode, e) => {
    setCode(newCode)
    console.log(newCode)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("submit code");
    //axios.post(`${secret.url}code/submit`,this.state)
    axios
      .post(`localhost:8080/getCode`, this.state)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.err) {
          // Error in user code
          this.setState({
            result: data.error,
          });
        } else {
          this.setState({
            result: data.output,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onInputChangeHandler = (e) => {
    setInput(e.target.value)
    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <select id="lang" onChange={(e) => onLangSelectHandler(e)}>
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <p className="lead d-block my-0">Code your code here</p>
            <Grid container>
              <Grid item xs={12} sm={9} md={9}>
                {/*<div type="text" id="code" ref={wrapperRef}></div> */}

                <div type="text" id="code">
                  <Editor
                    onMount={handleEditorDidMount}
                    onChange={onCodeChangeHandler}
                    width="100%"
                    height="70vh"
                    options={options}
                    language={lang}
                    theme="vs-dark"
                    value={code}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={3} md={3}>
                <Videochat enabled={true} />
              </Grid>
            </Grid>
          </div>

          <div className="col-12 mt-3">
            <p className="lead d-block my-0">Provide Input</p>
            <textarea
              type="text"
              id="input"
              value={input}
              onChange={onInputChangeHandler}
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success" onClick={onSubmitHandler}>
          Submit Code
        </button>
        <div className="row">
          <div className="col-12 my-5">
            <textarea
              type="text"
              id="result"
              value={result}
              disabled={true}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};
export default RealEditor;
