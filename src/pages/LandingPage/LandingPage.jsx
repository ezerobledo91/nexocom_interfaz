import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import Slider from './components/Slider/Slider'

const LandingPage = () => {
  return (
    <Container bgcolor={'background.default'}>
      <Navbar />
      <Slider />
    </Container>
  )
}

export default LandingPage
