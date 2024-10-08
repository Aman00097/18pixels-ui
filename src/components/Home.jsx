import React from 'react'
import { Box, Button, List, ListItem, Typography } from '@mui/material'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import GooglePlay from '../assets/google-play.svg'
import AppleIcon from '@mui/icons-material/Apple';

export default function Home() {
    return (
        <Box component={'section'} sx={{ margin: { xs: '10px', md: '50px' }, padding: { xs: '20px', md: '80px' }, bgcolor: '#5372f0', color: '#fff', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box component={'div'} sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <Typography variant='h3' fontWeight={'bold'}>Yalla Drive <br /> On Demand <br /> Chauffeur Services</Typography>
                <Typography sx={{ color: '#ccc' }}>On Demand Chauffeur Services</Typography>
                <List sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: { xs: '100%', md: '300px' } }}>
                    <ListItem sx={{ p: '0', width: 'fit-content' }}><Button sx={{ color: '#ccc', border: '1px solid #ccc', textTransform: 'capitalize' }}>Per Minute</Button></ListItem>
                    <ListItem sx={{ p: '0', width: 'fit-content' }}><Button sx={{ color: '#ccc', border: '1px solid #ccc', textTransform: 'capitalize' }}>Per Hour</Button></ListItem>
                    <ListItem sx={{ p: '0', width: 'fit-content' }}><Button sx={{ color: '#ccc', border: '1px solid #ccc', textTransform: 'capitalize' }}>Per Day</Button></ListItem>
                    <ListItem sx={{ p: '0', width: 'fit-content' }}><Button sx={{ color: '#ccc', border: '1px solid #ccc', textTransform: 'capitalize' }}>Per Week</Button></ListItem>
                    <ListItem sx={{ p: '0', width: 'fit-content' }}><Button sx={{ color: '#ccc', border: '1px solid #ccc', textTransform: 'capitalize' }}>Per Month </Button></ListItem>
                </List>
                <Box component={'div'} sx={{ display: 'flex', gap: '20px' }}>
                    <Button variant='contained' startIcon={<AppleIcon />} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', color: '#000', textTransform: 'capitalize' }}>Apple Store</Button>
                    <Button variant='contained' startIcon={<img src={GooglePlay} width='20px' />} sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', color: '#000', textTransform: 'capitalize' }}>Google Play</Button>
                </Box>
            </Box>
            <Box component={'div'} sx={{ width: { xs: '100%', md: '45%' }, marginTop: { sm: '30px', md: '0' }, display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                    <Box component={'img'} src={Image1} sx={{ position: { xs: 'static', md: 'absolute' }, top: '-40px', right: '0', width: '250px', height: '250px' }} />
                    <Box component={'img'} src={Image2} sx={{ position: { xs: 'static', md: 'absolute' }, bottom: '0', left: '0', width: '200px', height: '200px' }} />
                </Box>
            </Box>
        </Box>
    )
}
