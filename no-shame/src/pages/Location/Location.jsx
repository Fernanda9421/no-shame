import React, { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import './location.css';
import MapsLocation from '../../components/MapsLocation/MapsLocation';
import ButtonWhatsApp from '../../components/ButtonWhatsApp/ButtonWhatsApp';
import ButtonInstagram from '../../components/ButtonInstagram/ButtonInstagram';
import Address from '../../components/Address/Address';

export default function Location() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className='body-location' sx={{ display: 'flex', alignItems: 'center' }}>
      <MapsLocation />
      <Box sx={{ color: 'white' }}>
        <Address />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Redes Sociais</h2>
          <Stack direction="row" spacing={2}>

            <ButtonWhatsApp />
            <ButtonInstagram />

          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
