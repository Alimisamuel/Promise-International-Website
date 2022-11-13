
import { Typography, Grid } from '@mui/material'

import React from 'react'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import logo from '../public/logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <Grid container spacing={2} className="footer_container">
        <Grid item className="footer_first_box">
          <Image src={logo} width="150" height="150" className="searchImg" />
          <div className="footer_info">
            <Typography variant="p">Promise International School</Typography>
            <br />
            <Typography variant="p">17A Silas works Fegge, Onitsha.
</Typography>
            <br />
            <Typography variant="p">8 Akokwa Street fegge, Onitsha.
</Typography>
            <br />
            <Typography variant="p">Anambra State, Nigeria</Typography>
            <br />
            <Typography variant="p">Telephone: 09096744364</Typography>
            <br />
            <Typography variant="p">promiseinternational2020@gmail.com</Typography>
          </div>
        </Grid>

        <Grid item className="footer_second_box">
          <div>
            <Typography
              variant="h4"
              sx={{ fontSize: '20px', fontWeight: '600' }}
            >
              LINKS
            </Typography>
            <div className="footer_info_links">
              <Link href="/">
                <a>Promise Int'l Programme</a>
              </Link>
              <br />
              <Link href="/">
                <a>Junior Secondary School</a>
              </Link>
              <br />
              <Link href="/">
                <a>Senior Secondary School</a>
              </Link>
              <br />
              <Link href="/">
                <a>Get Admission</a>
              </Link>
            </div>
          </div>
          <div>
            <Typography
              variant="h4"
              sx={{ fontSize: '20px', fontWeight: '600' }}
            >
              AFFILATIONS
            </Typography>
            <Link href="/">
              <a>Student Portal</a>
            </Link>
            <br />
            <Link href="/">
              <a>Teacher's Portal</a>
            </Link>
            <br />
            <Link href="/">
              <a>Photo Gallery</a>
            </Link>
            <br />
            <Link href="/">
              <a>Get Admission</a>
            </Link>
          </div>
        </Grid>
      </Grid>

      <div className="copyright_container">
        <div>
          <Typography variant="p" sx={{ fontSize: '12px' }}>
            &#169;Copyright 2022 - Promise International School.
          </Typography>
        </div>
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <span style={{ fontSize: '12px' }}>contact us:</span>
          <div>
            <a href="https://mui.com/material-ui/react-box/" target="blank">
              <FacebookIcon sx={{ marginRight: '5px', marginLeft: '5px', fontSize:'20px' }} />
            </a>
            <a href="https://mui.com/material-ui/react-box/" target="blank">
              <InstagramIcon sx={{ marginRight: '5px', fontSize:'20px' }} />
            </a>
            <a href="https://mui.com/material-ui/react-box/" target="blank">
              <LinkedInIcon sx={{ marginRight: '5px', fontSize:'20px' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
