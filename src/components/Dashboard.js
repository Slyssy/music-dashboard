// import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import OnlineCard from './CardOnlineMode';
import MasterVolume from './CardMasterVolume';
import SoundQuality from './CardSoundQuality';
import '.././App.css';

export default function Dashboard(props) {
  return (
    <div className='App'>
      <div className='title'>
        <Typography
          align='left'
          variant='h6'
          sx={{ backgroundColor: 'primary' }}
        >
          My Music App
        </Typography>
      </div>
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
      <main>
        <article>
          <OnlineCard />
        </article>
        <article>
          <MasterVolume />
        </article>
        <article>
          <SoundQuality />
        </article>
      </main>
      <div className='subtitle'>
        <Typography
          align='left'
          variant='h6'
          color='text.primary'
          fontWeight={700}
        >
          System Notifications:
        </Typography>
      </div>
    </div>
  );
}
