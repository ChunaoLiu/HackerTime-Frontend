import React, { useState, useRef, Component, useCallback } from 'react'
import './Ide.css'
import {io} from 'socket.io-client'
import axios from 'axios'
//import secret from '../../secrets/secret'
import Editor from "@monaco-editor/react";
import {code} from './defaultCode'
import Videochat from './Videochat'
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import Grid from '@material-ui/core/Grid';
import './Topbar.js'

let editorwidth, editorwidthorg;
export default class IDE extends Component {
    
    state={
        code: code.cpp,
        result: 'Submit Code to See Result',
        lang: 'cpp'

    }

    
    componentDidMount() {
        editorwidth = document.getElementById('code');
        editorwidthorg = editorwidth.offsetWidth;
        console.log(editorwidthorg)
        editorwidth.style.width = '500px'
    }

    
    onSubmitHandler = (e) => {
        e.preventDefault()
        alert("submit code")
        console.log(this.state)
        //axios.post(`${secret.url}code/submit`,this.state)
        axios.post(`http://localhost:8080/getCode`,this.state)
            .then(res=>{
                console.log(res.data)
                const data = res.data
                if(data.err){
                    // Error in user code
                    this.setState({
                        result: data.error
                    })
                }
                else{
                    this.setState({
                        result: data.output
                    })
                }

            })
            .catch(err=>{
                console.log(err)
            })
    }
    onCodeChangeHandler = (newCode, e) => {
        console.log(e)
        this.setState({
            code: newCode
        })
    }
   
    onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    
    
    connect() {
        var socket = new SockJS('http://localhost/8080/app');
        console.log(socket)
        var stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            //stompClient.subscribe('/topic/greetings', function (greeting) {
                
            //});
        });
    }
    editorDidMount = (e) => {
        console.log("EDITOR MOUNTED")
        this.connect()
        
    }


    onLangSelectHandler = (e) => {
        const lang = e.target.value
        this.setState({
            lang,
            code: code[lang]
        })
    }


    render() {
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
        
        console.log(editorwidth?.offsetWidth, "width")
        return (
            <>
                
                <div className="ml-5 IDE-board ">
                    <div className="row">
                        <div className="w-100 mt-1">
                            <select id="lang" onChange={(e) => this.onLangSelectHandler(e)}>
                                <option value="cpp">C++</option>
                                <option value="c">C</option>
                                <option value="java">Java</option>
                                <option value="python">Python</option>
                            </select>
                            <p className="lead d-block my-0">Code your code here</p>
                            <Grid container  >
                                <Grid item xs={12} sm={9} md={12} id="code" className="">
                                {/*<div type="text" id="code" ref={wrapperRef}></div> */}
                                
                                    <div type="text" >
                                        <Editor
                                            height="70vh"
                                            language={this.state.lang}
                                            theme="vs-dark"
                                            value={this.state.code}
                                            options={options}
                                            onChange={this.onCodeChangeHandler}
                                            onMount={this.editorDidMount}
                                        />
                                    </div>
                                
                                </Grid>
                            </Grid>
                        </div>
                                                
                        <div className="col-12 mt-3">
                            <p className="lead d-block my-0">Provide Input</p>
                            <textarea type="text" id="input" value={this.state.input} onChange={this.onInputChangeHandler}>
                            </textarea>
                        </div>
                                                    
                    </div>
                    <button className="btn btn-success" onClick={this.onSubmitHandler}>Submit Code</button>
                    <div className="row">
                        <div className="col-12 my-5">
                             <textarea type="text" id="result" value={this.state.result} disabled={true}>
                             </textarea>
                        </div>
                    </div>
                </div>
            </>
        )
    }
  }
