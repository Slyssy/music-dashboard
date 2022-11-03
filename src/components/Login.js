import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Dashboard from './Dashboard';

import '.././App.css';

export default function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('UPDATED', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <div className='App'>
      <div className='title'>
        <Typography
          align='left'
          variant='h6'
          sx={{ backgroundColor: 'primary' }}
        >
          My Music App
        </Typography>
      </div>

      <form>
        <TextField
          required
          id='standard-basic'
          label='Username'
          variant='standard'
          fullWidth={true}
        ></TextField>
        <TextField
          required
          id='standard-basic'
          label='Password'
          variant='standard'
          fullWidth={true}
        ></TextField>
        <Button
          onClick={handleLogin}
          variant='contained'
          size='small'
          fullWidth={true}
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}
