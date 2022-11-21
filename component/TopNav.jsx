// import { Grid, Typography } from '@mui/material'
// import { Container } from '@mui/system'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
import { AppBar } from '@mui/material'
import React from 'react'
// import App from 'next/app';


const TopNav = () => {
  return (
    <>
   
    <AppBar className='topnav'sx={{
      backgroundColor:'transparent',
      height:{
        lg:'30px',
      xs:'70px'
      },
      
    }}>
      {/* <Container >
    <Grid container >
  
        <Grid item lg={6} xs={12}>
        <Typography variant="p" sx={{  fontSize: '12px' }}>
          Welcome to Promise International School 
        </Typography>
        <InstagramIcon sx={{fontSize:'15px', marginLeft:'10px'}} />
        <FacebookIcon sx={{fontSize:'15px', marginLeft:'10px'}}/>
        <LinkedInIcon sx={{fontSize:'15px', marginLeft:'10px'}}/>
        
        </Grid>
        <Grid item lg={6} xs={12} sx={{textAlign:'right'}} >
            <CallIcon sx={{fontSize:'15px'}}/>
            <a href='tel:09096744364'>
<Typography variant='p'sx={{  fontSize: '10px' }}> 09096744364</Typography>
</a>
<EmailIcon sx={{fontSize:'15px', marginLeft:'20px', marginRight:'10px'}}/>
<a href='mailto:promiseinternational2020@gmail.com'>
<Typography variant='p'sx={{  fontSize: '10px' }}> promiseinternational2020@gmail.com</Typography></a>
        </Grid>
    
    </Grid>
    </Container> */}
    </AppBar>
    </>
    
  )
}

export default TopNav
