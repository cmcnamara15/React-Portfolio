import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 60, backgroundColor: '#f8f8f8' }}>
        <Button href="https://github.com/cmcnamara15" target="_blank" rel="noopener" startIcon={<GitHubIcon />}>
            GitHub
        </Button>
        <Button href="https://www.linkedin.com/in/chris-mcnamara1991/" target="_blank" rel="noopener" startIcon={<LinkedInIcon />}>
            LinkedIn
        </Button>
        </Box>
    )
}