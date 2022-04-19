import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './buttonWhatsApp.css';

export default function ButtonWhatsApp() {
  return (
    <Button color="success" variant="text" startIcon={<WhatsAppIcon />}>
      <a
        className='wpp-button'
        href='http://wa.me/5535988640609'
        target='_blank'
        rel='noreferrer'
      >
        WhatsApp
      </a>
    </Button>
  );
};
