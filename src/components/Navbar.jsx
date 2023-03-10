import { Box, Button, Stack } from '@mui/material'
import React from 'react'

const pages = ['Nosotros', 'Como funciona?', 'Precios']

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems='center' sx={{ my: 2 }}>
      <Box>
        <img src={`${process.env.PUBLIC_URL}/img/mod-logo-dark_Dark.png`} width='150px' alt='Mi imagen' />
      </Box>
      <Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page}>{page}</Button>
          ))}
        </Box>
      </Box>
      <Box>
        <Stack direction='row'>
          <Button>Ingresar</Button>
          <Button variant='outlined'>Registrarse</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Navbar
