import React from 'react';
import { Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { cyan } from '@mui/material/colors';
import './sizes.css';

export default function RowRadioButtonsGroup() {
  const [value, setValue] = React.useState('');
  const sizes = ['P', 'M', 'G', 'GG', 'G1', 'G2'];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: value === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  console.log(value);

  return (
    <FormControl sx={{ display: 'flex', alignItems: 'center', m: '4rem' }}>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={
          { display: 'flex', flexDirection: 'row', fontSize: '1.8rem', p: '1rem', color: 'cyan' }
        }>
          Tamanho
        </FormLabel>
      <div className='radio-group'>
        {
          sizes.map((size) => (
            <FormControlLabel
              key={ size }
              className='radio-item'
              sx={{ p: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem' }}
              value={size}
              label={size}
              control={
                <Radio
                  {...controlProps(size)}
                  sx={{
                    color: cyan[800],
                    '&.Mui-checked': {
                      color: cyan[700],
                    },
                  }}
                />
              }
            />
          ))
        }
      </div>
    </FormControl>
  );
};
