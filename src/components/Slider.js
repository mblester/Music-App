import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderSteps({state, setState}) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        value={state}
        getAriaValueText={valuetext}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={(e) => {
            setState(e.target.value)
        }}  
      />
    </Box>
  );
}
