import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { Container, display } from '@mui/system'



const About = () => {
  
  return (
   <>
 <Navbar />
      <Box
        className="contact_banner"
        sx={{
          pt: 12,
          
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            bgcolor: '#0098db',
            height: {
              lg: '120px',
              xs: '90px',
            },
            width: {
              xs: 200,
            },
            borderRadius: '3px',
            mt: 4,
            p: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: '500',
              fontSize: {
                xs: 20,
                lg: 30,
              },
              mb: 2,
              color: 'white',
            }}
          >
            About Us
          </Typography>
          <Link href="/">
            <a style={{ color: '#1a1a1a', fontSize: '14px' }}>Home </a>
          </Link>
          <Typography variant="p" sx={{ color: 'white', fontSize: '14px' }}>
            
             / About Us
          </Typography>
        </Box>
      </Box>
   </>
  )
}

export default About