import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate, useParams } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import axios from 'axios';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Candidate (){
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const { roomcode } = useParams();
  const [state, setState] = useState({
    name: ''
  });
  const [checked, setChecked] = useState(false);
  
  const routeChange = () =>{ 
    
    let path = "/HackerTime-Frontend/interview"; 
    navigate(path);
  }

  useEffect(() => {
    console.log(roomcode)
  })
  const handleOnSubmit = (event) => {
    event.preventDefault()
    if(!checked) {
      toastr.options = {
        positionclassName : 'toast-top-right',
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
    console.log(roomcode)
    axios.get('http://localhost:8080/v1/get-question', {roomCode: roomcode})
      .then(res => {
        navigator(`/HackerTime-Frontend/interview/${res.data.roomCode}`,
        { state: { jwtToken: '', name: '', candname: '', companyName: '', question: question, identity: false } })
      }
      )
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const fn_check = () => {
    if(!checked) {
      navigator.mediaDevices.getUserMedia({video: true, audio: true}).then( stream => {
          window.localStream = stream; // A
          window.localAudio.srcObject = stream; // B
          window.localAudio.autoplay = true; // C
      }).catch( err => {
          console.log("You got error : " + err)
      });
    }
    setChecked(!checked);
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200"/>
        <p>
          Welcome Candidate!
        </p>
        {/* <TextField id="name" 
        label="Filled" variant="filled" /> */}

    {<Form onSubmit={handleOnSubmit}>
        <Form.Field align='left'>
          <label>First Name</label>
          <input placeholder='First Name' id="fName"/>
          
        </Form.Field>
        <Form.Field align='left'>
          <label>Last Name</label>
          <input placeholder='Last Name' id="lName" name="name"/>
        </Form.Field>
        <Form.Field>
          <Checkbox onClick={fn_check} label='Allow Camera and Microphone access' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form> }




      {/* <h1>Welcome Candidate</h1>
      <Form className="Candidate" onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>  
      <Form.Field>
          <Checkbox label='Allow Camera and Microphone access' />
        </Form.Field>
        <Button type='submit'>Submit</Button> */}
      </header>
    </div>
  );
}

export default Candidate;
