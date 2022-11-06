import React from 'react';
import { Button, TextField, Box } from '@mui/material';
// import Dashboard from './Dashboard';

import '.././App.css';

export default function Login(props) {
  // Using setIsLoggedIn prop from App.js
  const handleLogin = () => {
    props.setIsLoggedIn(true);
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          maxWidth: '25ch',
          display: 'grid',
          gridGap: '1em',
          margin: '4em auto',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          id='email'
          label='Email'
          variant='standard'
          type={'email'}
        />
        <TextField
          required
          id='password'
          label='Password'
          variant='standard'
          type={'password'}
        />
        <Button variant='contained' fullWidth onClick={handleLogin}>
          LOGIN
        </Button>
      </Box>
    </>
  );
}
