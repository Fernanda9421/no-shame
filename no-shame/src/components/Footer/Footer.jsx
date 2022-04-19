import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 6}} color='white'>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ fontWeight: 'bold' }}>SOBRE</Box>
              <Box sx={{ lineHeight: 2.5, fontSize: 13 }}>
                <Link className='link-footer' to='/' underline='none' color='inherit'>NOSSA HISTÓRIA</Link>
              </Box>
              <Box sx={{ fontSize: 13 }}>
                <Link className='link-footer' to='/' underline='none' color='inherit'>LOCALIZAÇÃO</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ fontWeight: 'bold' }}>SUPORTE</Box>
              <Box sx={{ lineHeight: 2.5, fontSize: 13 }}>
                <Link className='link-footer' to='/location' underline='none' color='inherit'>CONTATO</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ fontWeight: 'bold', fontSize: 35 }} textAlign='center'>NO</Box>
              <Box sx={{ fontWeight: 'bold', fontSize: 35 }} textAlign='center'>SHAME</Box>
            </Grid>
          </Grid>
          <Box textAlign='center' pt={{xs: 5, sm:5}} pb={{xs:5, sm:0}}>
            No Shame &copy; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
