import React from 'react';
import { Box } from '@mui/material';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: 13 }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 3 }} color='white'
      >
        <Link className='link-navbar' sx={{ pr: 5 }} to='/'>HOME</Link>
        <Link className='link-navbar' sx={{ pr: 5 }} to='/'>T-SHIRTS ALGODÃO</Link>
        <Link className='link-navbar' to='/location'>CONTATO</Link>
      </Box>
    </div>
  );
};
