// import * as React from 'react';
// import DropDown from './DropDown';
// import { Card, CardActions, CardContent, Typography } from '@mui/material';

// export default function SoundQuality() {
//   return (
//     <Card sx={{ minWidth: 225 }}>
//       <CardContent>
//         <Typography
//           sx={{ fontSize: 18 }}
//           color='text.primary'
//           variant='h6'
//           gutterBottom
//         >
//           Sound Quality
//         </Typography>

//         <Typography variant='body2'>
//           Manually control the music
//           <br /> quality in event of poor <br />
//           connection.
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <DropDown />
//       </CardActions>
//     </Card>
//   );
// }

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DropDown from './DropDown';

const label = { inputProps: { 'aria-label': 'Online Mode' } };

export default function OnlineMode() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
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
        <DropDown />
      </CardActions>
    </Card>
  );
}
