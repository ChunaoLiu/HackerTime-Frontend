import React, { useEffect, useState, useRef, Component, useCallback } from 'react'
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
        lang: 'cpp',
        sock: {}
    }


    componentDidMount() {
        editorwidth = document.getElementById('code');
        editorwidthorg = editorwidth.offsetWidth;
        console.log(editorwidthorg);
        editorwidth.style.width = '500px';
        // this.props.setCurCode(code.cpp);
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
                console.log(res.data.err)
                if(res.data.stderr){
                    // Error in user code
                    this.onResultChangeHandler(res.data.stderr);
                    this.props.setCurOutput(res.data.stderr);
                }
                else{
                    console.log("hi");
                    this.onResultChangeHandler(res.data.stdout);
                    this.props.setCurOutput(res.data.stdout);
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    
    onCodeChangeHandler = (newCode, e) => {
        this.props.setCurCode(newCode);

        this.setState({
            code: newCode
        })
        // send code to backend when there's changes in code
        // to socket
        // return value
        //console.log(this.state.sock)
        this.state.sock.send("/app/001", {}, this.state.code)
    }

    onResultChangeHandler = (newResult, e) => {
        this.setState({
            result: newResult
        })
    }
   
    onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    

    refresh (e) {
        this.setState({code: e})
    }
    
    connect() {
        //const WebSocketClient = require('websocket').client;
        
        
        var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
        //console.log(socket)
        
        
        var stompClient = Stomp.over(socket);

        this.setState({sock: stompClient})
        stompClient.connect({}, function connectCallback(frame) {
            //console.log('Connected: ' + frame);
            
            stompClient.subscribe('/topic/001', function (greeting) {
                this.refresh(greeting.body)
                //console.log(greeting)
            }.bind(this));
        }.bind(this),
        function errorCallBack (error) {
            console.log(error);
        }
        );
        
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
        this.props.setCurCode(code[lang]);
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
        
        return (
            <>
                <div className="ml-5 IDE-board">
                    <div className="row">
                        <div className="col-12 mt-1">
                            <select id="lang" onChange={(e) => this.onLangSelectHandler(e)}>
                                <option value="cpp">C++</option>
                                <option value="c">C</option>
                                <option value="java">Java</option>
                                <option value="python">Python</option>
                            </select>
                            <p className="lead d-block my-0">Code your code here</p>
                            <Grid container>
                                <Grid item xs={12} sm={9} md={12} id="code" className="">
                                {/*<div type="text" id="code" ref={wrapperRef}></div> */}
                                
                                    <div type="text" id="code">
                                        <Editor
                                            height="50vh"
                                            width='auto'
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
                            <textarea type="text"  className="w-100" style={{height: '50px'}} id="input" value={this.state.input} onChange={this.onInputChangeHandler}>
                            </textarea>
                        </div>
                                                    
                    </div>
                    <div>
                        <button className="btn btn-success mt-2" onClick={this.onSubmitHandler}>Submit Code</button>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                             <textarea type="text" id="result" className="w-100" value={this.state.result} onChange={this.onResultChangeHandler}>
                             </textarea>
                        </div>
                    </div>
                </div>
            </>
        )
    }
  }
