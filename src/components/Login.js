import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from './Box';
import '.././App.css';

export default function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('UPDATED', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className='App'>
      {/* <Box component='span'> */}
      <Typography align='left' variant='h6' sx={{ backgroundColor: 'primary' }}>
        My Music App
      </Typography>
      {/* </Box> */}
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
        <Button variant='contained' size='small' fullWidth={true}>
          LOGIN
        </Button>
      </form>
    </div>
  );
}
