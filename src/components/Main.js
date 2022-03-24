import logo from '../logo.svg';
import '../App.css';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import IDE from './IDE';
import Topbar from './Topbar';
import Editor from './Editor'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


export function Main() {
  const navigate = useNavigate();
  
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
    <IDE/> 
      </div>
  );
}

export default Main;
