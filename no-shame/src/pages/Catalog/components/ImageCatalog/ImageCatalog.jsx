import { Box } from '@mui/system';
import React from 'react';
import catalogPrice from '../../../../assets/images/uniquePrice.png';
import './imageCatalog.css';

export default function imageCatalog() {
  return (
    <Box>
      <img
        className='image-catalog'
        src={ catalogPrice }
        alt='Imagem contendo o preço das t-shirts'
      />
    </Box>
  );
};
