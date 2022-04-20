import React from 'react';
import { Box } from '@mui/material';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: 13 }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 3 }}
      >
        <NavLink
          className='link-navbar'
          sx={{ pr: 5 }}
          to='/'
        >
          HOME
        </NavLink>
        <NavLink
          className='link-navbar'
          sx={{ pr: 5 }}
          to='/'
        >
          T-SHIRTS ALGODÃO
        </NavLink>
        <NavLink
          className='link-navbar'
          to='/location'
        >
          CONTATO
        </NavLink>
      </Box>
    </div>
  );
};
