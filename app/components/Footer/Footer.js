'use client'; // Optional, only needed if you're using client-side features

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
       textAlign: 'center',
        padding: '8px 0',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#242F33' 
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()}  All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
         This is a Footer Part 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
