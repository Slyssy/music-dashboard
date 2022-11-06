import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSoundQuality(props) {
  // console.log(props);
  const handleChange = (event) => {
    // console.log(props);
    props.setQuality(event.target.value);
  };

  return (
    <div>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
        <InputLabel id='demo-simple-select-standard-label'>
          Select Quality
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={props.quality}
          onChange={handleChange}
          label='quality'
        >
          <MenuItem value={'Low'}>Low</MenuItem>
          <MenuItem value={'Normal'}>Normal</MenuItem>
          <MenuItem value={'High'}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
