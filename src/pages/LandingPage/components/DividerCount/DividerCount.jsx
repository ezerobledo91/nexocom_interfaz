import { Box, Container, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Count from './Count'

const DividerCount = () => {
  const BoxCounter = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    alignItems: 'center',
    fontWeight: 'bold !important',
    '& h3': {
      fontWeight: 'inherit !important',
    },
  })

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box bgcolor='background.counters' py={2}>
      <Container>
        <Stack direction={isSmallScreen ? 'column' : 'row'} justifyContent='space-between' p={2} alignItems='center'>
          <BoxCounter>
            <Typography variant='h3' color='customgray.main'>
              <Count value={100} duration={5} />
            </Typography>
            <Typography component='p' width='min-content' color='customgray.main'>
              Minoristas registrados
            </Typography>
          </BoxCounter>
          <BoxCounter>
            <Typography variant='h3' color='customgray.main'>
              <Count value={160} duration={5} />
            </Typography>
            <Typography component='p' width='min-content' color='customgray.main'>
              Mayoristas registrados
            </Typography>
          </BoxCounter>
          <BoxCounter>
            <Typography variant='h3' color='customgray.main'>
              <Count value={50} duration={5} />
            </Typography>
            <Typography component='p' width='min-content' color='customgray.main'>
              Categorias disponibles
            </Typography>
          </BoxCounter>
          <BoxCounter>
            <Typography variant='h3' color='customgray.main'>
              <Stack direction='row'>
                <Count value={4} duration={5} />K
              </Stack>
            </Typography>
            <Typography component='p' width='min-content' color='customgray.main'>
              Usuarios activos
            </Typography>
          </BoxCounter>
        </Stack>
      </Container>
    </Box>
  )
}

export default DividerCount
