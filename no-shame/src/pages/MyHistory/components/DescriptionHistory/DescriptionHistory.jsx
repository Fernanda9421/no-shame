import React from 'react';
import { Box, Typography } from '@mui/material';

export default function DescriptionHistory() {
  return (
    <Box sx={{ color: 'white', m: '5%' }}>
      <Typography sx={{ fontFamily: 'Montserrat' }} variant="subtitle1" gutterBottom component="div">
        Nós acreditamos que cada pessoa possui uma singularidade, e é única à sua maneira: seja pelo seu estilo, seu corpo, seu cabelo, sua cor, sua personalidade... Tudo isso faz parte do seu próprio "EU".
      </Typography>
      <Typography sx={{ fontFamily: 'Montserrat' }} variant="subtitle1" gutterBottom component="div">
        Cada indivíduo é um. E nossas particularidades são o que temos de mais bonito! Por isso, devemos abraçar nossas diferenças com orgulho. São elas quem nos tornam excepcionais.
      </Typography>
      <Typography sx={{ fontFamily: 'Montserrat' }} variant="subtitle1" gutterBottom component="div">
        E foi assim que surgiu a ideia da NO SHAME. Nosso propósito é trazer diversão, autenticidade, autoestima e liberdade para todos. Todos mesmo.
      </Typography>
      <Typography sx={{ fontFamily: 'Montserrat' }} variant="subtitle1" gutterBottom component="div">
        Diversa, pessoal, inclusiva e fora da caixa: conheçam a NO SHAME!
      </Typography>
    </Box>
  )
}
