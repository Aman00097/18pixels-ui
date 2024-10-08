import React from 'react'
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

export default function Navbar() {
    return (
        <Box component={'header'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: { xs: '10px', md: '20px 50px' } }}>
            <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' }}>
                <Box component={'span'} sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#5372f0', color: '#fff', padding: '10px', borderRadius: '100%' }} ><TimeToLeaveIcon /></Box>
                <Typography variant='h5' sx={{ lineHeight: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>Yalla <br /> Drive</Typography>
            </Box>
            <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: '20px', md: '40px' }, fontSize: '20px' }}>
                <ListItem sx={{ p: '0' }}>About</ListItem>
                <ListItem sx={{ p: '0' }}>Services</ListItem>
                <ListItem sx={{ p: '0', display: { xs: 'none', sm: 'block' } }}>FAQ's</ListItem>
                <ListItem sx={{ p: '0', display: { xs: 'none', sm: 'block' } }}><Button startIcon={<CallMadeIcon />} variant='contained' sx={{ textTransform: 'capitalize', width: '150px', fontFamily: 'inherit' }}>Get In Touch</Button></ListItem>
            </List>
        </Box>
    )
}
