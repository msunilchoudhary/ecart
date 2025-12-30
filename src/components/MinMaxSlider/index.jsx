import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { BiRupee } from 'react-icons/bi';

const MAX = 100000;
const MIN = 500;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function MinMaxSlider() {
  const [val, setVal] = useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <div className='price-filter'>
    <Box sx={{ width: "100%" }}>
      <Slider
        marks={marks}
        step={500}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: 'pointer' }}
          className='d-flex align-items-center'
        >
          <BiRupee />{MIN}
        </Typography>
        <span className='d-flex align-items-center badge badge-warning' style={{fontSize:"12px", fontWeight:600}}><BiRupee />{val}</span>
        <Typography
          className='d-flex align-items-center'
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: 'pointer' }}
        >
          <BiRupee />{MAX}
        </Typography>
      </Box>
    </Box>
    </div>
  );
}