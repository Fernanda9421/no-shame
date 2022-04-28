import React, { useContext } from 'react';
import NoShameContext from '../../../../context/NoShameContext';
import { useNavigate } from 'react-router-dom';
import { CardActionArea, Box, Typography, CardMedia, CardContent, Card } from '@mui/material';
import tShirtsP from '../../../../data/tShirtsP';
import tShirtsM from '../../../../data/tShirtsM';
import tShirtsG from '../../../../data/tShirtsG';
import tShirtsGG from '../../../../data/tShirtsGG';
import tShirtsG1 from '../../../../data/tShirtsG1';
import tShirtsG2 from '../../../../data/tShirtsG2';
import './cardTshirt.css';

export default function ActionAreaCard() {
  const { size } = useContext(NoShameContext);
  const navigate = useNavigate();

  const renderCards = (tShirtSize) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', m: '4%' }}>
      {
        tShirtSize.map((item) => (
          <Card key={item.id} className='card-area' sx={{ width: 230 }}>
            <CardActionArea onClick={(() => navigate(`/catalog/${item.id}`))}>
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
  )

  const renderSize = () => {
    if (size === 'M') return renderCards(tShirtsM);
    if (size === 'G') return renderCards(tShirtsG);
    if (size === 'GG') return renderCards(tShirtsGG);
    if (size === 'G1') return renderCards(tShirtsG1);
    if (size === 'G2') return renderCards(tShirtsG2);

    return renderCards(tShirtsP);
  }

  return renderSize();
}
