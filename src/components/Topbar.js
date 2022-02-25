import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../logo.svg';

const copy = async () => {
    await navigator.clipboard.writeText('http://hackertime/v1/hostroom');
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
          {/* axios.get('localost:8080/'); */}
          <Button color="inherit" onClick={copy}>http://hackertime/v1/hostroom</Button>
          <Button color="inherit">Sukriti Rai</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
