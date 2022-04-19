import React from 'react';
import { Box, Link } from '@mui/material';
import './navbar.css';

export default function NavBar() {
  return (
    <div className='navbar'>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: 13 }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 3 }} color='white'
      >
        <Link sx={{ pr: 5 }} href='/' underline='none' color='inherit'>HOME</Link>
        <Link sx={{ pr: 5 }} href='/' underline='none' color='inherit'>T-SHIRTS ALGODÃO</Link>
        <Link href='/' underline='none' color='inherit'>CONTATO</Link>
      </Box>
    </div>
  );
};
