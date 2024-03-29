import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import DividerCount from './components/DividerCount/DividerCount'
import Footer from './components/Fotter/Fotter'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'

import Slider from './components/Slider/Slider'

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Slider />
      <DividerCount />
      <SectionOne />
      <SectionTwo/>
      <Footer />
    </Box>
  )
}

export default LandingPage
