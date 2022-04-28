import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import tShirtsGG from '../../../../data/size-GG';
import './cardTshirt.css';

export default function ActionAreaCard() {
  return (
    <Box sx={{ display: 'flex' }}>
      {
        tShirtsGG.map((item) => (
          <Card className='card-area' sx={{ width: 230 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image={item.image}
                alt={item.name}
              />
              <CardContent className='card-content'>
                <Typography className='typography' gutterBottom component="div">
                  {item.name}
                </Typography>
                <Typography className='typography' variant="body2">
                  Preço: {item.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      }
    </Box>
  );
}
