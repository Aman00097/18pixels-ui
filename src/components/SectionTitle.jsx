import React from 'react'
import { Box, Typography } from '@mui/material'

export default function SectionTitle({ title }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'start' }, gap: '3px', mb: '10px' }}>
            <Box component={'span'} sx={{ display: 'block', width: '50px', height: '2px', bgcolor: '#5372f0' }}> </Box>
            <Box>
                <Typography variant='h6' sx={{ fontSize: '18px', color: '#5372f0', fontWeight: 'bold' }}>{title}</Typography>
            </Box>
            <Box component={'span'} sx={{ display: 'block', width: '50px', height: '2px', bgcolor: '#5372f0' }}> </Box>
        </Box>
    )
}
