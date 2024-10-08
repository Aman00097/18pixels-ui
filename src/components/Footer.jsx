import React from 'react'
import { Box, Button, Input, List, ListItem, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export default function Footer() {
    return (
        <Box component={'footer'} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', color: '#fff', mt: '80px' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                <Typography fontSize={'14px'}>We've created the product that will help your startup to look even better</Typography>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Input type='text' placeholder='Your email' sx={{ border: '1px solid #ccc', color: '#fff', p: '0 10px' }} />
                    <Button variant='contained'>Subscribe</Button>
                </Box>
            </Box>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <ListItem sx={{ p: '0', fontWeight: 'bold' }}>About</ListItem>
                <ListItem sx={{ p: '0' }}>Education</ListItem>
                <ListItem sx={{ p: '0' }}>Telematics</ListItem>
                <ListItem sx={{ p: '0' }}>Integrations</ListItem>
                <ListItem sx={{ p: '0' }}>Agriculture</ListItem>
            </List>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <ListItem sx={{ p: '0', fontWeight: 'bold' }}>Resources</ListItem>
                <ListItem sx={{ p: '0' }}>Services</ListItem>
                <ListItem sx={{ p: '0' }}>Industry</ListItem>
                <ListItem sx={{ p: '0' }}>Startup</ListItem>
                <ListItem sx={{ p: '0' }}>Media</ListItem>
            </List>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <ListItem sx={{ p: '0', fontWeight: 'bold' }}>Links</ListItem>
                <ListItem sx={{ p: '0' }}><TwitterIcon sx={{ fontSize: '20px', mr: '10px' }} />Twitter</ListItem>
                <ListItem sx={{ p: '0' }}><FacebookIcon sx={{ fontSize: '20px', mr: '10px' }} />Facebook</ListItem>
                <ListItem sx={{ p: '0' }}><GoogleIcon sx={{ fontSize: '20px', mr: '10px' }} />Google</ListItem>
            </List>
        </Box>
    )
}
