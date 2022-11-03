import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography,
} from '@mui/material';

export default function MasterVolume() {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18 }}
          color='text.primary'
          variant='h6'
          gutterBottom
        >
          Master Volume
        </Typography>

        <Typography variant='body2'>
          Overrides all other sound
          <br /> settings in the application.
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          aria-label='Temperature'
          defaultValue={30}
          valueLabelDisplay='auto'
          step={10}
          marks
          min={10}
          max={110}
        />
      </CardActions>
    </Card>
  );
}
