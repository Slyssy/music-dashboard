import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Online Mode' } };

export default function OnlineMode(props) {
  // console.log(props);
  //% Component handler functions.
  const handleToggle = () => props.setIsOnline(!props.isOnline);
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' component='div'>
          Online Mode
        </Typography>
        <Typography sx={{ marginTop: 2 }} variant='body2'>
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          onChange={handleToggle}
          {...label}
          defaultChecked
          color='success'
        />
      </CardActions>
    </Card>
  );
}
