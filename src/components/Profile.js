import logo from '../logo.svg';
import pPic from '../profile.svg';
import '../App.css';
import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Profile() {
  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/profile"; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    ///// Add Change pw option 
    let path = "/HackerTime-Frontend/signup"; 
    navigate(path);
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
      <Button align="right" variant="outlined"  onClick={handleClickOpen}>
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
        
        <img src={pPic} className="Profile-Pic" alt="pPic" width="100"/>
        <p >
        
        </p>
        <p align='center'>Sukriti Rai <br></br>Company: Purdue University</p>
        <Button type='submit' onClick={routeChange}>Start Interview</Button>
      </header>
    </div>
  );
}

export default Profile;
