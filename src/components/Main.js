import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import IDE from './IDE';
import Topbar from './Topbar';
import QuestionBar from './Layout/QuestionBar/QuestionBar';
import Videochat from './Videochat'
import Editor from './Editor'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const {jwtToken, name, companyName, question} = location.state;
  const { roomCode } = useParams();

  console.log(name, companyName, question, 'question')
  console.log(roomCode, 'roomCode')

  const routeChange = () =>{ 
    let path = "/HackerTime-Frontend/interview"; 
    navigate(path);
  }
  return (
      
    <div className="Main">
      <Topbar/>  
      <p></p>
      <p>.</p>
      <p>.</p>  
      <div className='d-flex '>
        <QuestionBar question={question}/>
        <IDE/> 
        <Videochat enabled={true}/>
      </div>
    </div>
  );
}

export default Main;
