import { Box } from '@mui/material';
import React from 'react';
import imageHeader from '../../../../assets/images/header.png';
import './imageHeader.css';

export default function ImageHeader() {
  return (
    <Box sx={{ maxWidth: '100%' }}>
      <img
        className='image-header'
        src={imageHeader}
        alt='Logotipo da marca'
      />
    </Box>
  );
};
