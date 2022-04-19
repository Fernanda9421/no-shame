import { Box } from '@mui/system';
import React from 'react';
import apresentation from '../../../../assets/images/apresentation.gif';
import './headerDescription.css';

export default function HeaderDescription() {
  return (
    <Box className='body-description' sx={{ display: 'flex', color: 'white', justifyContent: 'space-evenly', margin: 5 }}>
      <Box className='paragraph' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 5, fontSize: 20 }}>
        <span>Nós acreditamos que cada pessoa é única e,</span>
        <span>por meio das t-shirts,</span>
        <span>nós temos o propósito de levar um pouco de</span>
        <span><strong>diversão, autenticidade, autoestima e liberdade</strong> para você.</span>
        <p>Aproveite!</p>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <img
          className='image-description'
          src={apresentation}
          alt='Imagem de apresentação da marca'
        />
      </Box>
    </Box>
  )
}
