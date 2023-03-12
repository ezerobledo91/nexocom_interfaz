import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { Create, Search, Storefront } from '@mui/icons-material'

const SectionTwo = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  }))

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0',
      flexDirection: 'column',
    },
  }))

  const GuideBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '5%',
          height: '5px',
          backgroundColor: '#000339',
          margin: '0 auto',
          marginTop: '20px',
        }}
      ></div>

      <Typography variant='h3' sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}>
        Como Funciona?
      </Typography>

      <CustomBox>
        <Typography
          variant='body2'
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#5A6473',
            textAlign: 'center',
          }}
        >
          Nexocom es una plataforma que permite la busqueda, conexión y contacto con distintos comercios Minoristas y
          Mayoristas dependiendo el interes general del Usuario registrado.
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <Create fontSize='large' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Registra tu comercio o empresa
          </Typography>
          <Typography variant='body2' sx={{ fontSize: '14px', textAlign: 'center' }}>
            Puedes elegir el rol de tu usuario ya sea Minorista o Mayorista
          </Typography>
        </GuideBox>

        <GuideBox>
          <Storefront fontSize='large' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Crea tu perfil comercial
          </Typography>
          <Typography variant='body2' sx={{ fontSize: '14px', textAlign: 'center' }}>
            Crea tu perfil y personalizalo con tus preferencias, tu informacion publica, visibilidad etc.
          </Typography>
        </GuideBox>

        <GuideBox>
          <Search fontSize='large' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Busca nuevos contactos
          </Typography>
          <Typography variant='body2' sx={{ fontSize: '14px', textAlign: 'center' }}>
            Empieza a crear tu red de contactos. Posibles compradores en el rol Mayorista, o nuevos provedores como
            Minorista.
          </Typography>
        </GuideBox>
      </GuidesBox>

      <Button />
    </Box>
  )
}

export default SectionTwo
