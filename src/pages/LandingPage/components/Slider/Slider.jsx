import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import slide1 from './img/cool-background.svg'

const Slider = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${slide1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        my: 4,
      }}
    >
      <Stack direction='column' minHeight={'50vh'} justifyContent='space-around' maxWidth={'500px'} p={2}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
          Conoce, conecta y haz nuevos negocios
        </Typography>
        <Typography variant='h5'>
          Descubre mucho más en <b>NEXOCOM</b>
        </Typography>
        <Box>
          <Button variant='contained'>Registrate Ahora</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Slider
