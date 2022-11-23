import { Box, Grid, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import DownloadIcon from '@mui/icons-material/Download';
import HowToRegIcon from '@mui/icons-material/HowToReg';
// import schoolform from '../public/Form.pdf'

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const register = () => {
  // const download = ()=>{
  //   const URL = '../public/Promise-Form.pdf'
  //   if (typeof window !== "undefined"){
  //     window.location.href = URL
  //   }
  // }
  return (
    <>
      <Grid container>
        <Grid item lg={7}>
          <Grid
            container
            sx={{
              margin: ' auto',
              mt: 5,
              width: '70%',
            }}
          >
            <Grid
              item
              lg={12}
              sx={{
                display: 'flex',

                alignContent: 'center',
              }}
            >
              <Link href="/">
                <a>
                  <Image
                    src={logo}
                    width="50"
                    height="50"
                    className="searchImg"
                    alt='logo'
                  />
                </a>
              </Link>
              <Typography
                variant="body"
                sx={{ mt: 2, fontWeight: 'bold', fontSize: '16px' }}
              >
                Promise International School
              </Typography>
              <Link href='/'>
                
              <Button variant='text' sx={{color:'#0098db', ml:'auto', fontSize:'10px'}}>
                <KeyboardBackspaceIcon/>Go Back Home</Button>
              </Link>
            </Grid>
            <Grid item lg={12}>
              <Typography variant="h4"> Registration Form</Typography>
              <Typography varaint="h6">
                *Creche *Nursery *Primary *Secondary
              </Typography>
            </Grid>
            <Grid item lg={12} sx={{}}>
             
              <TextField
                margin="normal"
                label="First Name"
                size="small"
                type="text"
                name="password"
                required
                fullwidth
                sx={{
                  mr:2,
                  width:'48%'
                }}
                variant="outlined"
              />
              <TextField
                margin="normal"
                label="Last Name"
                size="small"
                type="text"
                name="password"
                required
                fullwidth
                sx={{
                  width:'48%'
                }}
                variant="outlined"
              
              />
              <TextField
              
                label="Phone Number"
                size="small"
                type="number"
                name="password"
                required
                fullwidth
                sx={{
                  mr:2,
                  width:'48%'
                }}
                variant="outlined"
              />
              <TextField
               
                label=""
                size="small"
                type="date"
                name="password"
                required
                fullwidth
                sx={{
                  width:'48%'
                }}
                variant="outlined"
              
              />
            
              <TextField
              margin='normal'
                size="small"
                type="address"
                label="State of Origin"
                required
                sx={{
                  mr:2,
                  width:'48%'
                }}
                
                variant="outlined"
              />
              <TextField
              margin='normal'
                size="small"
                type="address"
                label="LGA"
                required
                sx={{
                  width:'48%'
                }}
                variant="outlined"
              />
              <TextField
          
                label="Email"
                size="small"
                type="email"
                required
                fullWidth
                variant="outlined"
              />
                <TextField
              margin='normal'
                label="Create Password"
                size="small"
                type="password"
                name="password"
                required
                sx={{
                  mr:2,
                  width:'48%'
                }}
                variant="outlined"
              />
              <TextField
                  margin='normal'
                label="Retype Password"
                size="small"
                type="password"
                name="password"
                required
                sx={{
                  width:'48%'
                }}
                variant="outlined"
              />
              <TextField
               margin='normal'
                label="Name of Parents/Guardians"
                size="small"
                type="text"
                name="password"
                required
                fullWidth
                variant="outlined"
              />
              <TextField
          
                label="Address of Parent/Guardian"
                size="small"
                type="text"
                name="password"
                required
                fullWidth
                variant="outlined"
              />
            
                <Box sx={{
                  mt:3
                }}>
                
            <a href="/Form.pdf" download >
                <Button variant="outlined"
                sx={{
                  mr:3,
                     
                  fontSize:'12px'
                }}>
                  Download School Form     <DownloadIcon/></Button></a>
                <Button variant="contained"
                  sx={{
                    
                    fontSize:'12px'
                  }}>
                  Register    <HowToRegIcon/></Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className="register_cover"
          item
          lg={5}
          sx={{
            height: '100vh',
          }}
        ></Grid>
      </Grid>
    </>
  )
}

export default register
