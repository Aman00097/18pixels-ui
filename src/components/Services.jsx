import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import SectionTitle from './SectionTitle'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Crown from '../assets/crown.svg'

export default function Services() {
    return (
        <Box component={'section'} sx={{ margin: { xs: '10px', md: '50px' } }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '40px', mb: '30px' }}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <SectionTitle title={'Our Services'} />
                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '30px' }}>Luxury Redefined: Chauffeur Services Beyond Compare</Typography>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Box component={'span'} sx={{ display: 'block', width: '100%', height: '2px', bgcolor: '#5372f0', my: '10px' }} />
                    <Typography>With Yalla, ditch the car hassles and focus on what matters-opportunities, loved ones, or relaxation.</Typography>
                </Box>
            </Box>

            <List sx={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>01</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <PersonOutlineIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>Personalized Service</Typography>
                    <Typography height='75px'>Book a luxury vehicle and enjoy a dedicated chauffeur who meets your specific needs.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>02</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <AirplanemodeActiveOutlinedIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>Airport Transfer</Typography>
                    <Typography height='75px'>Arrive on time and in style with our reliable airport transfer service.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>03</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <SupportAgentOutlinedIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>Corporate Services</Typography>
                    <Typography height={'75px'}>Elevate your business travel with our discreet and punctual drivers.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>04</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <BusinessOutlinedIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>City Tours</Typography>
                    <Typography height={'75px'}>Arrive in style for your special occasions with our elegant transport options.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>05</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <EventAvailableIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>Event Transportation</Typography>
                    <Typography height={'75px'}>Explore Dubai effortlessly with our knowledgeable chauffeurs.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px', width: { xs: '100%', md: '300px' }, p: '0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#000', color: '#fff', padding: '10px', width: '40px', height: '40px' }}>06</Box>
                        <Box sx={{ bgcolor: '#5372f0', width: '5px', height: '30px' }} />
                    </Box>
                    <Box component={'img'} src={Crown} sx={{ width: '60px' }} />
                    <Typography variant='h6' fontWeight={'bold'}>VIP Service</Typography>
                    <Typography height={'75px'}>Explore Dubai effortlessly with our knowledgeable chauffeurs.</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <KeyboardDoubleArrowRightIcon />
                        <Typography fontWeight='bold' >Learn more</Typography>
                    </Box>
                </ListItem>
            </List>
        </Box>
    )
}
