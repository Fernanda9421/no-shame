import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function DescriptionDetails() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <div className='composition'>
        <Typography sx={{ fontFamily: 'Montserrat' }}>
          <strong>Composição:</strong>
        </Typography>
        <Typography sx={{ fontFamily: 'Montserrat' }}>100% algodão</Typography>
      </div>
      <div className='composition'>
        <Typography sx={{ fontFamily: 'Montserrat' }}>
          <strong>Cuidados:</strong>
        </Typography>
        <Typography sx={{ fontFamily: 'Montserrat' }}>- Lavar sempre em água fria</Typography>
        <Typography sx={{ fontFamily: 'Montserrat' }}>- Lavar a peça do avesso</Typography>
        <Typography sx={{ fontFamily: 'Montserrat' }}>- Enxaguar bem para remover todo o resíduo de sabão ou detergente</Typography>
        <Typography sx={{ fontFamily: 'Montserrat' }}>- Não utilizar ferro quente nas estampas</Typography>
      </div>
    </Box>
  )
}
