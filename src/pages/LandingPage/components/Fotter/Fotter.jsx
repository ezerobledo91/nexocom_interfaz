import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { styled, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }))

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }))

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#7A7A7E',
    fontWeight: '300',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  }))

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Nexocom
            </Typography>

            <FooterLink>Nosotros</FooterLink>
            <br />
            <FooterLink>Como Funciona</FooterLink>
            <br />
            <FooterLink>Mayoristas</FooterLink>
            <br />
            <FooterLink>Minoristas</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Categorias
            </Typography>

            <FooterLink>Hogar</FooterLink>
            <br />
            <FooterLink>Ferreteria y Herrajes</FooterLink>
            <br />
            <FooterLink>Indumentaria</FooterLink>
            <br />
            <FooterLink>Bazar</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Ayuda
            </Typography>

            <FooterLink>Como Registrarse</FooterLink>
            <br />
            <FooterLink>Terminos de Uso</FooterLink>
            <br />
            <FooterLink>Politicas de Privacidad</FooterLink>
            <br />
            <FooterLink>Mapa del Sitio</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Contactanos
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#7A7A7E',
                fontWeight: '500',
                mb: 2,
              }}
            >
              Conoce, conecta y haz nuevos negocios con Nexocom
            </Typography>

            <IconBox>
              <Facebook  color='primary'/>
              <Instagram color='primary' />
              <LinkedIn  color='primary'/>
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  )
}

export default Footer
