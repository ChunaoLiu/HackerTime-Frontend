import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../logo.svg';
import { Checkbox, Form } from 'semantic-ui-react'
import { useNavigate} from 'react-router-dom';
import React, { useRef, useState, useEffect, useContext } from "react";
import axios from 'axios';

export default function Topbar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jwtToken, setJwtToken] = useState('')
  
  useEffect(() => {
  }, [email, password])

  const copy = async () => {
    await navigator.clipboard.writeText('http://hackertime/v1/hostroom');
    alert('Link copied ✅');
  }
  const routeChange2 = (e) => {
    let path = "/HackerTime-Frontend/profile";
    // we need email
    // navigate(path, {state:{name: name, companyName: companyName, jwtToken: jwtToken}});
    console.log('route change')
    navigate(path, {state:{jwtToken: e.data.jwtToken, name: e.data.name, companyName: e.data.companyName}});
  }
  const endInterview = async (event) => {

    console.log("hi: " + email)
    // event.preventDefault();
    // try {
    //   const response = await axios.post('http://hackertime/v1/end-meeting', {
    //     email: email,
    //     password: password
    //   });
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   // setAuth({ email, password, roles, accessToken });
      
    //   setSuccess(true);
      
    //   setEmail(response?.data?.email)
    //   setName(response?.data?.name)
    //   setCompanyName(response?.data?.companyName)
    //   setJwtToken(response?.data?.jwtToken)

    //   // axios.defaults.headers.common = {'Authorization': `Bearer ${jwtToken}`}
    //   //axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

    //   routeChange3(response);
    }
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
          <Button color="inherit">Sukriti Rai</Button>
          <Button color="inherit" onClick={endInterview}>End Interview</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
