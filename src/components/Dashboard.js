import React, { useState } from 'react';
import { Typography } from '@mui/material';
import OnlineCard from './CardOnlineMode';
import MasterVolume from './CardMasterVolume';
import SoundQuality from './CardSoundQuality';
import '.././App.css';

export default function Dashboard(props) {
  // % Setting state for isOnline to false (lifting state from CardOnlineMode
  // % component).
  const [isOnline, setIsOnline] = useState(false);

  const [volume, setVolume] = useState(30);
  // console.log(volume);
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
          <SoundQuality />
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
      </div>
    </main>
  );
}
