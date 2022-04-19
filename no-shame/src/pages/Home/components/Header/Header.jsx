import { Box } from '@mui/material';
import React from 'react';
import ImageHeader from './ImageHeader';
import HeaderDescription from './HeaderDescription';

export default function Header() {
  return (
    <header>
      <Box>
        <ImageHeader />
        <HeaderDescription />
      </Box>
    </header>
  )
}
