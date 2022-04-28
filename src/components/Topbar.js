import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { Checkbox, Form } from 'semantic-ui-react'
import React, { useRef, useState, useEffect, useContext, useCallback } from "react";
import axios from 'axios';

export default function Topbar(props) {
  const location = useLocation()

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jwtToken, setJwtToken] = useState('')
  const [question, setQuestion] = useState('')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [candname, setCandname] = useState('')
  useEffect(() => {
    setJwtToken(location.state.jwtToken);
    setName(location.state.name);
    setCompanyName(location.state.companyName);
    setEmail(location.state.email);
    setPassword(location.state.password);
    setQuestion(location.state.question);
    setCandname(location.state.candname);
  }, [location])

  const copy = async () => {
    await navigator.clipboard.writeText('http://hackertime/v1/hostroom');
    alert('Link copied ✅');
  }
  const routeChange2 = (e) => {
    let path = "/HackerTime-Frontend/profile";

    console.log('route change')
    navigate(path, { state: { jwtToken: e.data.jwtToken, name: e.data.name, companyName: e.data.companyName } });
  }
  const test = async () => {
    console.log("🤩 Q:" + question);
    console.log("🤩" + props.code);
    console.log("🤩" + props.output);
  }
  const endInterview = useCallback(() => {
    // make post request and save response
    console.log("CAND NAME🤩: " + candname);
    axios.post('http://localhost:8080/v1/end-meeting', {
      "question": question,
      "code": props.code,
      "intervieweeName": candname
    }, {
      headers: {
        "Authorization": `Bearer ${jwtToken}`
      }
    }).then((response) => {
      console.log("CHeckkkk " + response?.data?.question +  response?.data?.IntervieweeName)
      // route change and pass in response
      routeChange2(
        {
          data: {
            jwtToken: jwtToken,
            name: name,
            companyName: companyName
          }
        })
    })
  }, [jwtToken, name, companyName, candname, props.code, props.output])

  return (
    // <img src={logo} className="App-logo" alt="logo" />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#90EC72' }} position="fixed">
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" width="75" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HackerTime
          </Typography>
          {/* axios.get('localost:8080/'); */}
          <Button color="inherit" onClick={copy}>http://hackertime/v1/hostroom</Button>
          <Button color="inherit">{candname}</Button>
          <Button color="inherit" onClick={test}>Test</Button>
          <Button color="inherit" onClick={endInterview}>End Interview</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
