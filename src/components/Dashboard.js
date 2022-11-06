import React, { useState } from 'react';
import { Typography } from '@mui/material';
import OnlineCard from './CardOnlineMode';
import MasterVolume from './CardMasterVolume';
import SelectSoundQuality from './CardSoundQuality';
// import DropDown from './DropDown'

import '.././App.css';

export default function Dashboard(props) {
  // % Setting state for isOnline to false (lifting state from CardOnlineMode
  // % component).
  // console.log(props);
  const [isOnline, setIsOnline] = useState(false);

  const [volume, setVolume] = useState(30);

  const [quality, setQuality] = useState('Normal');
  // console.log(quality);
  return (
    <main>
      <div className='subtitle'>
        <Typography
          align='left'
          variant='h5'
          color='text.secondary'
          fontWeight={600}
        >
          Welcome User!
        </Typography>
      </div>
      <section>
        <article className='online_card'>
          <OnlineCard isOnline={isOnline} setIsOnline={setIsOnline} />
        </article>
        <article className='volume_card'>
          <MasterVolume volume={volume} setVolume={setVolume} />
        </article>
        <article className='sound_quality_card'>
          <SelectSoundQuality quality={quality} setQuality={setQuality} />
        </article>
      </section>
      <div className='notifications'>
        <Typography
          align='left'
          variant='h6'
          color='text.primary'
          fontWeight={700}
        >
          System Notifications:
        </Typography>
        {/* If isOnline is false we return a message. */}
        {isOnline && (
          <Typography align='center' variant='body2' color='red'>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </Typography>
        )}

        {volume > 80 && (
          <Typography align='center' variant='body2' color='red'>
            Listening to music at a high volume could cause long-term hearing
            loss.
          </Typography>
        )}

        {quality === 'Low' && (
          <Typography align='center' variant='body2' color='red'>
            Music quality is degraded. Increase quality if your connection
            allows it.
          </Typography>
        )}
      </div>
    </main>
  );
}
