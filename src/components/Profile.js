import pPic from '../profile.svg';
import '../App.css';
import { Button, Icon, Modal, TextArea, Checkbox, Form } from 'semantic-ui-react'
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import React, { useRef, useState, useEffect, useContext, useMemo } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';

function Profile() {
  const location = useLocation()
  const [firstOpen, setFirstOpen] = React.useState(false)
  const [secondOpen, setSecondOpen] = React.useState(false)
  const navigator = useNavigate();
  const [name, setName] = useState();
  const [companyName, setCompanyName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [jwtToken, setJwtToken] = useState();
  const [question, setQuestion] = useState('');
  const [candname, setCandname] = useState('');
  // setJwtToken(location.state.jwtToken);
  // setPassword(location.state.jwtToken);
  // setJwtToken(location.state.jwtToken);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setJwtToken(location.state.jwtToken);
    setName(location.state.name);
    setCompanyName(location.state.companyName);
    setEmail(location.state.email);
    setPassword(location.state.password);
    start();
  }, [])

  const start = () => {
    const response = axios.get('http://localhost:8080/v1/user', {
      headers: {
        'Authorization': `Bearer ${location.state.jwtToken}`
      }
    })
      .then(res => {
        setName(res?.data?.name)
        setCompanyName(res?.data?.companyName)
        if (res.data.reports === undefined) {
          setReports([
            {
              intervieweeName: 'Sukriti',
              createdDate: 'Jan 21, 2021'
            },
            {
              intervieweeName: 'Reeesh',
              createdDate: 'Feb 14, 2022'
            }
          ])
        } else {
          setReports(res.data.reports)
          //console.log(JSON.stringify(res.data.reports));
        }
      })
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFinish = () => {
    axios.post('http://localhost:8080/hostroom', { "question": question })
      .then(res => {
        navigator(`/HackerTime-Frontend/interview/${res.data.roomCode}`,
          { state: { jwtToken: jwtToken, name: name, candname: candname, companyName: companyName, question: question } })
      }
      )
  }

  const handleChangeQuestion = (e) => {
    setQuestion(e.target.value);
  }
  const handleChangeCandname = (e) => {
    setCandname(e.target.value);
  }

  const onListItemClick = (e) => {
    
    alert(`Question:\n${e.question}\n\nCode:\n${e.code}\nOutput:\n`);
  }

  const reportList = reports.map((r) =>
    <ListItem onClick={() => onListItemClick(r)}>
      <ListItemAvatar>
        <Avatar>
          <WorkIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={r.intervieweeName} secondary={r.createdDate} />
    </ListItem>
  );

  return (
    <div className="App">
      <Button align='right' variant="outlined" onClick={handleClickOpen}>
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

        <Divider>
          <List
            sx={{
              width: '100%',
              maxWidth: 500,
              bgcolor: 'background.paper',
              margin: "dense",
              position: 'relative',
              overflow: 'auto',
              maxHeight: 300,
              '& ul': { padding: 0 },
            }}
          >
            {reportList}
          </List>
        </Divider>
        <>
          <Button onClick={() => setFirstOpen(true)}>Start An Interview</Button>

          <Modal
            onClose={() => setFirstOpen(false)}
            onOpen={() => setFirstOpen(true)}
            open={firstOpen}
          >
            <Modal.Header>Question Details</Modal.Header>
            <Modal.Content image>
              <div className='image'>
                <Icon name='right arrow' />
              </div>
              <Modal.Description>
                <Form>
                  <TextArea
                    id="text1"
                    placeholder='Please provide the name of the interviewee...'
                    style={{ minWidth: 600, maxHeight: 40 , overflow: 'hidden'}}
                    value={candname}
                    onChange={handleChangeCandname}
                  />
                  <TextArea
                    placeholder='Please provide the coding question...'
                    style={{ minWidth: 600, minHeight: 500 }}
                    value={question}
                    onChange={handleChangeQuestion}
                  />
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setSecondOpen(true)} primary>
                Create room <Icon name='right chevron' />
              </Button>
            </Modal.Actions>

            <Modal
              onClose={() => setSecondOpen(false)}
              open={secondOpen}
              size='small'
            >
              <Modal.Header>Room Created!</Modal.Header>
              <Modal.Content>
                <p>Clicking "Finish" will take you to the room, Please copy and provide the invitation link in the room to the interviewer. </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  icon='check'
                  content='Finish'
                  onClick={handleFinish}
                />
              </Modal.Actions>
            </Modal>
          </Modal>
        </>
      </header>
    </div>
  );
}

export default Profile;
