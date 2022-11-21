import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Breadcrumb from '../component/Breadcrumbs'
import { Container, display } from '@mui/system'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import TextField from '@mui/material/TextField'
const contact = () => {
  return (
    <>
      <Navbar />
      <Box
        className="con_banner"
        sx={{
          pt: 12,
          
          display: 'flex',
          justifyContent: 'right',
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            height: {
              lg: '80px',
              xs: '90px',
            },
            width: {
              lg: 350,
              xs: 200,
            },
            bgcolor: 'white',
            opacity: 0.5,
            borderRadius: '3px',
            mt: 4,
            p: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '500',

              fontFamily: 'Cinzel',

              fontSize: {
                xs: 25,
                lg: 50,
              },
              mb: 2,
              color: 'black',
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Breadcrumb name1="Home" name2="Contact Us" />
      

      <Container
        sx={{
          mt: 5,
          mb: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: '24px',
                  
                  md: '22px',
                  sm: '18px',
                  xs:'18px'
                },
                fontWeight: '500',
                fontFamily:'cinzel',
                color:'#0976a5'
              }}
              className="contact_h4"
            >
              Contact Info
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                gap: 3,
              }}
            >
              <Box className="contact_icon">
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: {
                      lg: 30,
                      
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      lg: '22px',
                      md: '18px',
                      sm: '16px',
                      xs:'14px'

                    },
                    fontWeight: '500',
                  }}
                  className="get_h4"
                >
                  Our Location
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '14px',
                    color: '#969696',
                  }}
                >
                  17A Silas works Fegge, Onitsha.

                  <br /> 8 Akokwa Street fegge, Onitsha.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                gap: 3,
              }}
            >
              <Box className="contact_icon">
                <DraftsOutlinedIcon
                  sx={{
                    fontSize: {
                      lg: 30,
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      lg: '22px',
                      md: '18px',
                      sm: '16px',
                      xs:'14px'
                    },
                    fontWeight: '500',
                  }}
                  className="get_h4"
                >
                  Email Address
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '14px',
                    color: '#969696',
                  }}
                >
               promiseinternational2020@gmail.com 
                 
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                gap: 3,
              }}
            >
              <Box className="contact_icon">
                <LocalPhoneOutlinedIcon
                  sx={{
                    fontSize: {
                      lg: 30,
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: {
                      lg: '22px',
                      md: '18px',
                      sm: '16px',
                      xs:'14px'
                    },
                    fontWeight: '500',
                  }}
                  className="get_h4"
                >
                  Phone Number
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '14px',
                    color: '#969696',
                  }}
                >
                  09096744364
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8}>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: '24px',
                  
                  md: '22px',
                  sm: '18px',
                  xs:'18px'
                },
                fontWeight: '500',
                fontFamily:'cinzel',
                color:'#0976a5'
              }}
              className="get_h4"
            >
              Get In Touch
            </Typography>
            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
              <div className="contact_input">
                <TextField
                  variant="outlined"
                  label="Full Name"
                  size="small"
                  InputLabelProps={{style:{fontSize:'14px'}}}
                  fullWidth
                  sx={{
                    mr:2
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Email"
                  size="small"
                  InputLabelProps={{style:{fontSize:'14px'}}}
                  fullWidth
                ></TextField>
              </div>
              <TextField
                variant="outlined"
                label="subject"
                size="small"
                InputLabelProps={{style:{fontSize:'14px'}}}
                fullWidth
                sx={{
                  mb:3
                }}
              />
              <TextField
                variant="outlined"
                label="Enter Message"
                multiline
                InputLabelProps={{style:{fontSize:'14px'}}}
                rows={4}
                fullWidth
                sx={{
                  mb:3
                }}
              />
              <Button variant="contained">Send Message</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  )
}

export default contact
