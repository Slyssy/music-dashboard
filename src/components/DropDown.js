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
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id='demo-simple-select-standard-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={volume}
          onChange={handleChange}
          label='Normal'
        >
          <MenuItem>Poor</MenuItem>
          <MenuItem>Normal</MenuItem>
          <MenuItem>Excellent</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
