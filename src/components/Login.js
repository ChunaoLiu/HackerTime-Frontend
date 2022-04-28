import logo from '../logo.svg';
import '../App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useRef, useState, useEffect, useContext } from "react";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
// import AuthContext from "./context/AuthProvider";

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Login() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jwtToken, setJwtToken] = useState('')

  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');


  const handleChangeEmail = event => {
    setEmail(event.target.value);
  }
  const handleChangePw = event => {
    setPassword(event.target.value);
  }

  const routeChange = () => {
    let path = "/HackerTime-Frontend/interview";
    if (!checked) {
      toastr.options = {
        positionclassName: 'toast-top-right',
        hideDuration: 300,
        timeOut: 6000,
        newestOnTop: false,
        fontSize: "200px",
      }
      toastr.options.newestOnTop = false;
      toastr.clear()
      toastr.warning('Please allow your camera and mircrophone first');
      return;
    }
    navigate(path);
  }
  const routeChange2 = () => {
    let path = "/HackerTime-Frontend/signup";
    navigate(path);
  }


  // after we have the response
  // you need to update the value of the info

  const routeChange3 = (e) => {
    let path = "/HackerTime-Frontend/profile";
    console.log('route change');
    navigate(path, { state: { jwtToken: e.data.jwtToken, name: e.data.name, companyName: e.data.companyName} });
  }
  const fn_check = () => {
    if (!checked) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      }).catch(err => {
        console.log("You got error : " + err)
      });
    }
    setChecked(!checked);
  }

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/v1/auth/login', {
        email: email,
        password: password
      });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      // setAuth({ email, password, roles, accessToken });

      setSuccess(true);

      setEmail(response?.data?.email)
      setName(response?.data?.name)
      setCompanyName(response?.data?.companyName)
      setJwtToken(response?.data?.jwtToken)

      // axios.defaults.headers.common = {'Authorization': `Bearer ${jwtToken}`}
      //axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

      routeChange3(response);
    } catch (err) {
      //routeChange3();
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 500 || err.response?.status === 401) {
        setErrMsg('Invalid or no account affiliated');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // })
    //routeChange();
  }

  return (
    <div className="App">
      
      <Form.Field align='right'>
        <p align='right'>
            No account?
          </p>
        <Button type='submit' onClick={routeChange2}>Sign-up</Button>
      </Form.Field>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200" />

        <p align='left'>
          Interviewer Login
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Field align='left'>
            <label>Email</label>
            <input placeholder='Email' onChange={handleChangeEmail} />
          </Form.Field>
          <Form.Field align='left'>
            <label>Password</label>
            <input placeholder='Passwords' onChange={handleChangePw} />
          </Form.Field>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <Button type='submit'>Login</Button>
        </Form>
        {/* <br></br>
        <p align='left'>
          Candidate Login
        </p>

        <Form>

          <Form.Field align='left'>
            <label>Login Code</label>
            <input placeholder='Code' />
          </Form.Field>
          <Button type='submit' onClick={routeChange}>Start Interview</Button>
        </Form> */}

        <Form.Field>
          <Checkbox onClick={fn_check} label='Allow Camera and Microphone access' />
        </Form.Field>
      </header>
    </div>
  );
}

export default Login;
