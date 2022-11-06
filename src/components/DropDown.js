import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DropDown() {
  const [volume, setVolume] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setVolume(event.target.value);
  };

  return (
    <div className='dropdown'>
      <FormControl variant='standard' sx={{ minWidth: 200, marginTop: 0 }}>
        <InputLabel id='demo-simple-select-standard-label'>Normal</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={volume}
          onChange={handleChange}
          label='Normal'
        >
          <MenuItem>Low</MenuItem>
          <MenuItem>Normal</MenuItem>
          <MenuItem>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
