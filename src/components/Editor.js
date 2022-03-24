import React, { useState, useRef, Component, useCallback, useEffect } from 'react'
import MonacoEditor from 'react-monaco-editor';
import {defaultCode} from './defaultCode'
import Videochat from './Videochat'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import './Topbar.js'


export default function Editor() {
    const [code, setCode] = useState()
    const [result, setResult] = useState()
    const [lang, setLang] = useState()
    const [input, setInput] = useState()

    const options = {
        selectOnLineNumbers: true,
        renderIndentGuides: true,
        colorDecorators: true,
        cursorBlinking: "blink",
        autoClosingQuotes: "always",
        find: {
            autoFindInSelection: "always"
        },
        snippetSuggestions: "inline"
    };

    useEffect(() => {
        setCode(defaultCode.cpp)
        setResult('Submit Code to See Result')
        setLang('cpp')
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert("submit code")
        //axios.post(`${secret.url}code/submit`,this.state)
        axios.post(`localhost:8080/getCode`,this.state)
            .then(res=>{
                console.log(res.data)
                const data = res.data
                if(data.err){
                    // Error in user code
                    this.setState({
                        result: data.error
                    })
                }else{
                    this.setState({
                        result: data.output
                    })
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }
    const onCodeChangeHandler = (newCode, e) => {
        console.log(e)
        this.setState({
            code: newCode
        })
    }
   
    const onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    
    const editorDidMount = (e) => {
        console.log("EDITOR MOUNTED")
    }
    const onLangSelectHandler = (e) => {
        const lang = e.target.value
        this.setState({
            lang,
            code: code[lang]
        })
    }
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        wrapper.current.append(editor)
        new MonacoEditor(editor, { 
            width: "100%",
            height: "700",
            language: lang,
            theme: "vs-dark",
            value: code,
            options: {options},
            onChange: onCodeChangeHandler,
            editorDidMount: editorDidMount})
        
    }, [])
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
                                <div type="text" id="code" ref={wrapperRef}></div>
                                {/*
                                    <div type="text" id="code">
                                        <MonacoEditor
                                            width="100%"
                                            height="700"
                                            language={this.state.lang}
                                            theme="vs-dark"
                                            value={this.state.code}
                                            options={options}
                                            
                                            onChange={this.onCodeChangeHandler}
                                            editorDidMount={this.editorDidMount}
                                        />
                                    </div>
                                */}
                                </Grid>
                                <Grid item xs={12} sm={3} md={3}>
                                    <Videochat enabled={true}/>
                                </Grid>
                            </Grid>
                        </div>
                                                
                        <div className="col-12 mt-3">
                            <p className="lead d-block my-0">Provide Input</p>
                            <textarea type="text" id="input" value={input} onChange={onInputChangeHandler}>
                            </textarea>
                        </div>
                                                    
                    </div>
                    <button className="btn btn-success" onClick={onSubmitHandler}>Submit Code</button>
                    <div className="row">
                        <div className="col-12 my-5">
                             <textarea type="text" id="result" value= {result} disabled={true}>
                             </textarea>
                        </div>
                    </div>
                </div>
            </>
        )
}