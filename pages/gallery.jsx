import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from '@mui/material/Card'
import Link from 'next/link';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import award1 from '../public/Gallery/Award1.jpg'
import award2 from '../public/Gallery/Award2.jpg'
import award3 from '../public/Gallery/Award3.jpg'
import award4 from '../public/Gallery/Award4.jpg'
import award5 from '../public/Gallery/Award5.jpg'
import award6 from '../public/Gallery/Award6.jpg'
import award7 from '../public/Gallery/Award7.jpg'
import award8 from '../public/Gallery/Award8.jpg'
import award9 from '../public/Gallery/Award9.jpg'
import award10 from '../public/Gallery/Award10.jpg'
import award11 from '../public/Gallery/Award11.jpg'
import award12 from '../public/Gallery/Award12.jpg'
import award13 from '../public/Gallery/Award13.jpg'
import award14 from '../public/Gallery/Award14.jpg'
import award15 from '../public/Gallery/Award15.jpg'
import award16 from '../public/Gallery/Award16.jpg'
import award17 from '../public/Gallery/Award17.jpg'
import gal1 from '../public/Gallery/Gal1.jpg'
import gal2 from '../public/Gallery/Gal2.jpg'
import gal3 from '../public/Gallery/Gal3.jpg'
import gal4 from '../public/Gallery/Gal4.jpg'
import gal5 from '../public/Gallery/Gal5.jpg'
import gal6 from '../public/Gallery/Gal6.jpg'
import gal7 from '../public/Gallery/Gal7.jpg'
import gal8 from '../public/Gallery/Gal8.jpg'
import gal9 from '../public/Gallery/Gal9.jpg'
import gal10 from '../public/Gallery/Gal10.jpg'
import gal11 from '../public/Gallery/Gal11.jpg'
import gal12 from '../public/Gallery/Gal12.jpg'
import gal13 from '../public/Gallery/Gal13.jpg'
import gal14 from '../public/Gallery/Gal14.jpg'
import gal15 from '../public/Gallery/Gal15.jpg'
import gal16 from '../public/Gallery/Gal16.jpg'
import gal17 from '../public/Gallery/Gal17.jpg'
import gal18 from '../public/Gallery/Gal18.jpg'
import gal19 from '../public/Gallery/Gal19.jpg'
import gal20 from '../public/Gallery/Gal20.jpg'

import Image from 'next/image';
// import PhotoAlbum from "react-photo-album";
import { Box, Button, Grid, Typography } from '@mui/material'
// import Link from 'next/link'
import Breadcrumb from '../component/Breadcrumbs'
import { Container} from '@mui/system'

import Newsletter from '../component/Newsletter'


const AwardData=[
  {
    id :1,
    img: award1,
    width:'210px',
    height:'294'
},

{
    id: 2,
    img: award2
},
{
    id: 3,
    img: award3
},
{
    id: 4,
    img: award4
},
{
    id: 5,
    img: award5
},
{
    id: 6,
    img: award6
},
{
    id: 7,
    img: award7
},
{
    id: 8,
    img: award8
},
{
    id: 9,
    img: award9
},
{
    id: 10,
    img: award10
},
{
    id: 11,
    img: award11
},
{
    id: 12,
    img: award12
},
{
    id: 13,
    img: award13
},
{
    id: 14,
    img: award14
},
{
    id: 15,
    img: award15
},
{
    id: 16,
    img: award16
},
{
    id: 17,
    img: award17
},
]
const GalleryData=[
  {
    id :1,
    img: gal1,
   
},

{
    id: 2,
    img: gal2
},
{
    id: 3,
    img: gal3
},
{
    id: 4,
    img: gal4
},
{
    id: 5,
    img: gal5
},
{
    id: 6,
    img: gal6
},
{
    id: 7,
    img: gal7
},
{
    id: 8,
    img: gal8
},
{
    id: 9,
    img: gal9
},
{
    id: 10,
    img: gal10
},
{
    id: 11,
    img: gal11
},
{
    id: 12,
    img: gal12
},
{
    id: 13,
    img: gal13
},
{
    id: 14,
    img: gal14
},
{
    id: 15,
    img: gal15
},
{
    id: 16,
    img: gal16
},
{
    id: 17,
    img: gal17
},
{
    id: 18,
    img: gal18
},
{
    id: 19,
    img: gal19
},
{
    id: 20,
    img: gal20
},
]
const contact = () => {
  
const show = GalleryData
  console.log(show)
  return (
    <>
      <Navbar />
      <Box
        className="gallery_banner"
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
                xs: 20,
                lg: 50,
              },
              mb: 2,
              color: 'black',
            }}
          >
            Gallery
          </Typography>
        </Box>
      </Box>
      <Breadcrumb name1="Home" name2="Gallery" />
<Grid container mt={3}>
  <Grid item lg={9}>
    <Container>
<Grid container spacing={2}>
{
    GalleryData.map(( data) =>(
      <Grid item lg={3} key='data.id'>
      <Paper  elevation={4}
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:(data.height + 5),
        width:(data.width)
      }} 
      square >
    <Image src={data.img} width={data.width} height={data.height} alt=" " />
      </Paper>
      </Grid>
    ))
  }
  {
    AwardData.map(( data) =>(
      <Grid item lg={3} key='data.id'>
      <Paper  elevation={4}
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:(data.height + 5),
        width:(data.width)
      }} 
      square >
    <Image src={data.img} width={data.width} height={data.height} alt=" " />
      </Paper>
      </Grid>
    ))
  }



</Grid>
    </Container>
  </Grid>
  <Grid item lg={3}>
  <Container>
              <Card sx={{ maxWidth: 345 }}>
              <Image src={award1} height="200px" width="345px" alt=''/>
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
              <Image src={gal1} height="200px" width="345px" alt=''/>
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
    <Newsletter/>
      <Footer />
    </>
  )
}

export default contact
