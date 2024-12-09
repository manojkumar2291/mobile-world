import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 4 }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    {new Date().getFullYear()}
                    {' MOBILE WORLD. All rights reserved.'}
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Link href="/" color="text.secondary">
                        Home
                    </Link>
                    {' | '}
                    <Link href="/about" color="text.secondary">
                        About Us
                    </Link>
                    {' | '}
                    <Link href="/contact" color="text.secondary">
                        Contact
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;