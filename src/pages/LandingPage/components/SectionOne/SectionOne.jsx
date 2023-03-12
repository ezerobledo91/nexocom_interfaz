import { Box, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import imgSection from './img/estrechandomanos.png'
import imgSection2 from './img/calificaciones.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const SectionOne = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }))

  return (
    <Box ref={ref} sx={{ background: 'linear-gradient(to right, #e0eafc, #cfdef3)', minHeight: '100vh' }}>
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'center', sm: 'center' }}
          py={{ xs: 6, sm: 6 }}
          sx={{
            maxWidth: { xs: '100%', sm: '1200px' }, // Establecer un ancho máximo en diferentes resoluciones de pantalla
            margin: '0 auto', // Centrar el componente horizontalmente
          }}
        >
          <Stack maxWidth={{ xs: '100%', sm: '550px' }} flexShrink={1}>
            <Divider />
            <Typography variant='h4' sx={{ fontWeight: 'bold' }} color='primary' gutterBottom>
              Conecta y crece
            </Typography>
            <Typography component='p' color='primary' fontSize={18}>
              Plataforma única en Argentina diseñada para conectar negocios y agentes mayoristas y minoristas. <br />
              Esta plataforma es una herramienta esencial para las empresas que buscan mejorar su presencia en el
              mercado y expandir sus operaciones en línea
            </Typography>
          </Stack>
          <Box py={{ xs: 6, sm: 0 }}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 2 }}
              src={imgSection}
              style={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '450px' },
              }}
              alt='aplicacion-imagen-section'
            />
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'center', sm: 'center' }}
          py={{ xs: 6, sm: 6 }}
          sx={{
            maxWidth: { xs: '100%', sm: '1200px' }, // Establecer un ancho máximo en diferentes resoluciones de pantalla
            margin: '0 auto', // Centrar el componente horizontalmente
          }}
        >
          <Box py={{ xs: 6, sm: 0 }}>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 2 }}
              src={imgSection2}
              style={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '450px' },
              }}
              alt='aplicacion-imagen-section'
            />
          </Box>
          <Stack maxWidth={{ xs: '100%', sm: '550px' }} flexShrink={1}>
            <Divider />
            <Typography variant='h4' sx={{ fontWeight: 'bold' }} color='primary' gutterBottom>
              Descubre una forma más eficiente de hacer negocios
            </Typography>
            <Typography component='p' color='primary' fontSize={18}>
              Conecta con las empresas que creas conveniente, si existe una relación de aceptacion mutua podran empezar
              a contactarse mediante nuestra red
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default SectionOne
