import React from 'react';
import { Box } from '@mui/system';
import './address.css';

export default function Address() {
  return (
    <div className='body-address'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Endereço</h2>
        <span>Rua Elza Alvarenga Vilela, n° 35</span>
        <span>Bairro: Bela Vista 2</span>
        <span>CAMPO BELO - MG</span>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Telefone</h2>
        <span>(35) 98864-0609</span>
      </Box>
    </div>
  );
};
