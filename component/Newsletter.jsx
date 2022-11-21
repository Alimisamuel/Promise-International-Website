import { Box, Typography, TextField, Button, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Newsletter = () => {
  return (
    <>
      <Box
        sx={{
            py:5,
          mb: 3,
          bgcolor:'#0098db'
        }}
      >
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={6} sm={12}>
          <Typography variant="h4" mb={1} sx={{fontFamily:'cinzel'}}>Subscribe to our Newsletter</Typography>
          <Typography variant="p" >
            Join our community and get the latest information about our offers
            and services.
          </Typography>
          </Grid>
          <Grid item mt={3} lg={6} sm={12}>
           <input className='newsletter_input' type='text' placeholder='Enter a valid email address '
           style={{
            padding:'11px 20px',
            width:'350px',
            marginRight:'5px',
            color:'white',
            background:'none',
            border:'2px solid white'
           }}
           ></input>
            <Button variant='contained'
            sx={{
                px:4,
                bgcolor:'black',
                py:1,
                borderRadius:0,
            }}>Submit</Button>
          </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Newsletter
