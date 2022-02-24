import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../logo.svg';

const copy = async () => {
    await navigator.clipboard.writeText('link currr');
    alert('Link copied');
  }

  
export default function Topbar() {
  return (
    // <img src={logo} className="App-logo" alt="logo" />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#90EC72' }} position="fixed">
        <Toolbar>
        <img src={logo} className="App-logo" alt="logo" width="75"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HackerTime
          </Typography>
          
          <Button color="inherit" onClick={copy}>'Link to this page'</Button>
          <Button color="inherit">Candidate Name</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
