import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import { Box, Typography } from '@mui/material'
import Image4 from './assets/image4.jpg'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Box component={'section'} sx={{ margin: { xs: '10px', md: '50px' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant='h4' fontWeight={'bold'}>Streamline Your Gala Experience with Our All-in-One App</Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box component={'span'} sx={{ display: 'block', width: '100%', height: '2px', bgcolor: '#5372f0', my: '10px' }} />
          <Typography>Effortlessly manage your gala events with our app-seamlessky handle RSVPs, track guest lists, and streamline event details all in one place</Typography>
        </Box>
      </Box>
      <Box component={'img'} src={Image4} sx={{ width: '100%', height: '400px' }} />
      <Box sx={{ bgcolor: '#000', padding: { xs: '10px', md: '50px' } }}>
        <Contact />
        <Footer />
      </Box>
    </>
  )
}
