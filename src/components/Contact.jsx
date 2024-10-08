import React from 'react'
import { Box, Button, Input, TextareaAutosize, Typography } from '@mui/material'
import Image5 from '../assets/image5.jpg'

export default function Contact() {
    return (
        <Box component={'section'} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
            <Box component={'img'} src={Image5} sx={{ width: '100%', maxWidth: { xs: '100%', md: '50%' } }} />
            <Box component={'form'} sx={{ color: '#fff' }}>
                <Typography variant='h4' fontWeight={'bold'} gutterBottom>Get in touch today</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', border: '1px solid #bbb', padding: '30px' }}>
                    <Box>
                        <Typography fontSize={'14px'} gutterBottom>Name</Typography>
                        <Input type='text' placeholder='Enter Name' sx={{ color: '#fff', borderBottom: '1px solid #bbb', width: '100%', fontSize: '18px' }} />
                    </Box>
                    <Box>
                        <Typography fontSize={'14px'} gutterBottom>Email Address</Typography>
                        <Input type='text' placeholder='eg:- abc@gmail.com' sx={{ color: '#fff', borderBottom: '1px solid #bbb', width: '100%', fontSize: '18px' }} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }} >
                        <Box>
                            <Typography fontSize={'14px'} gutterBottom>Company</Typography>
                            <Input type='text' placeholder='Company Name' sx={{ color: '#fff', borderBottom: '1px solid #bbb', width: '100%', fontSize: '18px' }} />
                        </Box>
                        <Box>
                            <Typography fontSize={'14px'} gutterBottom>Contact Number</Typography>
                            <Input type='tel' placeholder='Company Name' sx={{ color: '#fff', borderBottom: '1px solid #bbb', width: '100%', fontSize: '18px' }} />
                        </Box>
                    </Box>
                    <Box>
                        <textarea placeholder='Describe' rows={5} style={{ width: '100%', padding: '10px', backgroundColor: '#222', resize: 'none' }} ></textarea>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' type='submit' sx={{ mt: '20px' }}>Submit</Button>
                </Box>
            </Box>
        </Box>
    )
}
