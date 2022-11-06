import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function MasterVolume(props) {
  //% Component handler functions.
  // * Setting volume by using the event.target from the slider values.
  const handleSlider = (event, volume) => {
    props.setVolume(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' component='div'>
          Master Volume
        </Typography>
        <Typography sx={{ marginTop: 2 }} variant='body2'>
          Overrides all other sound settings in the application.
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          onChange={handleSlider}
          aria-label='Temperature'
          defaultValue={30}
          // getAriaValueText={props.volume}
          valueLabelDisplay='auto'
          step={10}
          marks
          min={0}
          max={100}
        />
      </CardActions>
    </Card>
  );
}
