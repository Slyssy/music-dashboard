import * as React from 'react';
import DropDown from './DropDown';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

export default function SoundQuality() {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18 }}
          color='text.primary'
          variant='h6'
          gutterBottom
        >
          Sound Quality
        </Typography>

        <Typography variant='body2'>
          Manually control the music
          <br /> quality in event of poor <br />
          connection.
        </Typography>
      </CardContent>
      <CardActions>
        <DropDown />
      </CardActions>
    </Card>
  );
}
