import logo from '../logo.svg';
import pPic from '../profile.svg';
import '../App.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import React, { useRef, useState, useEffect, useContext } from "react";


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


function Profile() {
  const location = useLocation()
  // console.log(location.state.jwtToken);

  const navigator = useNavigate();
  const [name, setName] = useState();
  const [companyName, setCompanyName] = useState();
  const [password, setPassword] = useState();
  const [jwtToken, setJwtToken] = useState();
  // setJwtToken(location.state.jwtToken);
  // setPassword(location.state.jwtToken);
  // setJwtToken(location.state.jwtToken);

  const handleChangeName = event => {
    setName(event.target.value);
  }
  const handleChangeCName = event => {
    setCompanyName(event.target.value);
  }
  useEffect(() => {
    setJwtToken(location.state.jwtToken);
    setName(location.state.name);
    setCompanyName(location.state.companyName);
    console.log(name + " " + companyName);
    //start();
  })

  const start = () => {
    const response = axios.get('http://localhost:8080/v1/user', {
      headers: {
        'Authorization': `Bearer ${location.state.jwtToken}`
      }
    })
      .then(res => {
        setName(res?.data?.name)
        setCompanyName(res?.data?.companyName)
        console.log('Our response:')
        console.log(res)
      })
    }
  const routeChange = () => {
    let path = "/HackerTime-Frontend/profile";
    navigator(path);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button align="right" variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your password must be at least 6 characters and should include combinations of numbers, letters and special characters (!$@%)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Current password"
            label="Current password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="New password"
            label="New password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="New password"
            label="New password, again"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>

      <header className="App-header">

        <img src={pPic} className="Profile-Pic" alt="pPic" width="100" />
        <p >

        </p>
        <p align='center'>{name}<br></br>Company: {companyName}</p>
        <Button type='submit' onClick={routeChange}>Start Interview</Button>
      </header>
    </div>
  );
}

export default Profile;
