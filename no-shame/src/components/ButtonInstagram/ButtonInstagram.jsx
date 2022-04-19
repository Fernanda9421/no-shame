import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import './buttonInstagram.css';

export default function ButtonInstagram() {
  return (
    <Button color="secondary" variant="text" startIcon={<InstagramIcon />}>
      <a
        className='instagram-button'
        href='https://www.instagram.com/noshameoficial/'
        target='_blank'
        rel='noreferrer'
      >
        Instagram
      </a>
    </Button>
  );
};
