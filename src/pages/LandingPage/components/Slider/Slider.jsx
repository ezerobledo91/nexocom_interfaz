import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import slide1 from './img/slide.png'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
const Slider = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '74px',
    color: '#000336',
    fontWeight: 'bold',
    lineHeight: 'normal',
    margin: theme.spacing(4, 0, 4, 0),
    height: '350px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
      height: '100px',
    },
  }))

  return (
    <Box
      sx={{
        backgroundColor: '#fefefe',
        height: '90vh',
        minHeight: { xs: '400px', sm: '600px' },
      }}
    >
      <Container>
        <Stack direction='row' alignItems='center'>
          <Stack direction='column' minHeight={'60vh'} justifyContent='space-around' flex={1} p={2}>
            <Title>
              <Typewriter
                options={{
                  strings: [
                    ' Conoce, conecta y haz nuevos negocios',
                    'Crea nuevas conexiones, aumenta tu red de contactos',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: '|',
                  pauseFor: 4000,
                }}
                className='hero-title'
              />
            </Title>
            <Typography variant='body2' sx={{ fontSize: '18px', color: '#5A6473', my: 4 }} maxWidth={'450px'}>
              Única Plataforma en Argentina diseñada para conectar negocios / comercios mayoristas y minoristas.
            </Typography>
            <Box>
              <Button variant='contained'>Registrate Ahora</Button>
            </Box>
          </Stack>
          <Box flex={1} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <motion.img
              animate={{
                y: [-2, 2, -2], // Animación en eje Y
                rotate: [0, 3, -3, 0], // Animación de rotación
              }}
              transition={{
                duration: 2.5, // Duración de la animación
                ease: 'linear', // Tipo de curva de la animación
                repeat: Infinity, // Repetir la animación indefinidamente
              }}
              src={slide1}
              width='110%'
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Slider
