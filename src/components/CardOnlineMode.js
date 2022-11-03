import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Switch,
  Typography,
} from '@mui/material';

export default function OnlineCard() {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18 }}
          color='text.primary'
          variant='h6'
          gutterBottom
        >
          Online Mode
        </Typography>

        <Typography variant='body2'>
          Is this application connected
          <br /> to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch defaultChecked color='error' />
      </CardActions>
    </Card>
  );
}
