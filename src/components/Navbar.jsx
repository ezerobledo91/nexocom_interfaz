import { Box, Button, Stack } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const pages = ['Nosotros', 'Como funciona?', 'Mayoristas', 'Minoristas']

const Navbar = () => {
  return (
    <Container>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems='center' sx={{ my: 2, minHeight: '10vh' }}>
        <Box>
          <img src={`${process.env.PUBLIC_URL}/img/logo-web_Dark.png`} width='170px' alt='Mi imagen' />
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
    </Container>
  )
}

export default Navbar
