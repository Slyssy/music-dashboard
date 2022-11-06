import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DropDown from './DropDown';

export default function SoundQuality(props) {
  // console.log(props);
  // const [quality, setQuality] = useState('Normal');
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant='h6' component='div'>
          Sound Quality
        </Typography>
        <Typography sx={{ marginTop: 2 }} variant='body2'>
          Manually control the music quality in event of poor connection.
        </Typography>
      </CardContent>
      <CardActions>
        <DropDown quality={props.quality} setQuality={props.setQuality} />
      </CardActions>
    </Card>
  );
}
