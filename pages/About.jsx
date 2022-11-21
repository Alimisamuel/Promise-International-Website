import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Newsletter from '../component/Newsletter'
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import award from '../public/Award.jpg'
import gall from '../public/Gallery/Gal15.jpg'
import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { Container, display } from '@mui/system'
import Breadcrumb from '../component/Breadcrumbs'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Navbar />
      <Box
        className="contact_banner"
        sx={{
          pt: 12,

          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
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
              lg: 300,
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
            About Us
          </Typography>
        </Box>
      </Box>
      <Breadcrumb name1="Home" name2="About Us" />
      <Box mt={3} mb={6}>
        <Grid container spacing={2}>
          <Grid item lg={9}>
            <Container>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Cinzel',
                    color:'#0976a5'
                  }}
                >
                  Welcome
                </Typography>
                <Typography variant="p" align="justify">
                  The Méan family is delighted to welcome you to Promise
                  International where our outstanding location and warm family
                  atmosphere have been welcoming students and parents for over
                  several years.
                </Typography>
                <Box mt={3}>
                  <Typography variant="p" sx={{ textAlign: 'justify' }}>
                    Our priority is that each child at Promise International
                    should be happy, safe, healthy, valued and cherished. Our
                    motto{' '}
                    <span style={{ color: '#0098db' }}>
                      “Service to God and Humanity”
                    </span>{' '}
                    reflects our approach, along with Swiss values of respect,
                    politeness, tolerance, responsibility and punctuality..
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="p" sx={{ textAlign: 'justify' }}>
                    We value academic excellence and our highly experienced and
                    passionate teachers focus on inquiry-based learning, using
                    state-of-the-art technology. French and English are learned
                    side by side. Our small class sizes allow students to
                    blossom in an optimal and creative environment.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Cinzel',
                    color:'#0976a5'
                  }}
                >
                  Our Mission
                </Typography>
                <ul>
                  <li>To train the children with the fear of the Lord. </li>
                  <li>
                    To train their minds to understand the world in which they
                    are embodied.
                  </li>
                  <li>
                    To help the children acquire manipulative skills that will
                    enable them function effectively here in school and in the
                    society at large.
                  </li>
                  <li>
                    To impact sound education to the children so as to equip
                    them for the challenge ahead.
                  </li>
                </ul>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Cinzel',
                    color:'#0976a5'
                  }}
                >
                  Our Vision
                </Typography>
                <Typography variant="p">
                  To make a positive impact in the lives of all (every soul)
                  that comes in contact with the "promise worls."
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item lg={3}>
            <Container>
              <Card sx={{ maxWidth: 345 }}>
              <Image src={award} height="200px" width="345px"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Awards
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Excellence is potential chiseled into a more perfect state through vision, dedication and determination.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small"><InstagramIcon/></Button>
                  <Link href='/gallery'>
                  <Button size="small" variant='contained'>More</Button>
                  </Link>
                </CardActions>
              </Card>

              
              <Card sx={{ maxWidth: 345 , mt:6}}>
              <Image src={gall} height="200px" width="345px"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gallery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Pictures speaks better than words...Take a look at our gallery
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size="small"><InstagramIcon/></Button>
<Link href='/gallery'>
                  <Button size="small" variant='contained'> More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Container>
          </Grid>
        </Grid>
      </Box>

      <Newsletter />
      <Footer />
    </>
  )
}

export default About
