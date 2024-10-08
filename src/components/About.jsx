import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import SectionTitle from './SectionTitle'
import Image3 from '../assets/image3.jpg'

export default function About() {
    return (
        <Box component={'section'} sx={{ margin: { xs: '30px 10px', md: '60px 50px' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
            <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <SectionTitle title={'About Us'} />
                <Typography variant='h5' fontWeight={'bold'} sx={{ fontSize: '40px' }}>Yalla Manages the  Drive, So You Can Savor Every Moment</Typography>
                <Typography fontSize={'18px'}>Yalla handles driving, parking, and traffic, so you can focus on what truly matters. Let us manage the road while you enjoy life.</Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '18px' }}>
                    <ListItem sx={{ p: '0', display: 'flex', alignItems: 'start', gap: '10px' }}><span style={{ fontSize: '8px' }}>01</span>Available 24/7</ListItem>
                    <ListItem sx={{ p: '0', display: 'flex', alignItems: 'start', gap: '10px' }}><span style={{ fontSize: '8px' }}>02</span>Easy To Book A Ride</ListItem>
                    <ListItem sx={{ p: '0', display: 'flex', alignItems: 'start', gap: '10px' }}><span style={{ fontSize: '8px' }}>03</span>Hassel Free Chauffeur Rental</ListItem>
                </List>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                <Box sx={{ padding: '0 30px', display: 'flex', alignItems: 'center', mb: '70px' }}>
                    <Box component={'span'} sx={{ width: '20px', height: '20px', border: '5px solid #5372f0', borderRadius: '100%', display: 'block' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px', marginTop: '20px' }}>Trustworthy Chauffeurs</Typography>
                    </Box>
                    <Box component={'span'} sx={{ width: '150px', height: '2px', display: 'block', bgcolor: '#ccc' }}></Box>
                    <Box component={'span'} sx={{ width: '20px', height: '20px', border: '5px solid #5372f0', borderRadius: '100%', display: 'block' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px', marginTop: '20px' }}>Guaranteed Punctuality</Typography>
                    </Box>
                    <Box component={'span'} sx={{ width: '150px', height: '2px', display: 'block', bgcolor: '#ccc' }}></Box>
                    <Box component={'span'} sx={{ width: '20px', height: '20px', border: '5px solid #5372f0', borderRadius: '100%', display: 'block' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '12px', marginTop: '20px', whiteSpace: 'nowrap' }}>Commitment <br /> to Safety</Typography>
                    </Box>
                </Box>
                <Box component={'img'} src={Image3} sx={{ width: '100%', maxWidth: '600px' }} />
            </Box>
        </Box>
    )
}
