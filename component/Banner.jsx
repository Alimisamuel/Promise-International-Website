import React from 'react'
import { Box, Container } from '@mui/system'; 
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const Banner = () => {
  return (
    <>
    <div  className="carousel">
    <div className="container">
      <span className="text1">Welcome To</span>
      <span className="text2">Promise Int'l School</span>
      <Link href="/register"><a>
      <Button variant='outlined'>Apply for Admission</Button>
        </a></Link>
    </div>
    </div>
    </>
  )
}

export default Banner