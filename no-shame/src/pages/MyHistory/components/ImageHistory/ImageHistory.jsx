import React from 'react';
import { Box } from '@mui/system';
import ourHistory from '../../../../assets/images/ourHistory.jpeg';

import './imageHistory.css';

export default function ImageHistory() {
  return (
    <Box>
      <img
        className='imageHistory'
        src={ ourHistory }
        alt='Imagem do casal fundador da marca'
      />
    </Box>
  )
}
