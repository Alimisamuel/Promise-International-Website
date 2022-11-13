import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import components
import DrawerComp from './DrawerComp'
import TopNav from './TopNav'
// import Mui components
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material'
import { Container } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
// images
import logo from '../public/logo.png'


const Navbar = () => {
  const NavDetails = [
    {
      id: 1,
      title : "Home",
      link :"/"
    },
    {
      id : 2,
      title:"About",
      link: "/About"
    },
    
    {
      id : 3,
      title:"Student Portal",
      link: "/"
    },
    
    {
      id : 4,
      title:"Staff Dashboard",
      link: "/"
    },
    
    {
      id : 5,
      title:"Faq",
      link: "/"
    },
    {
      id: 6,
      title: "Contact Us",
      link:"/contact"
    }
  ]
  
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState(0);
  return (
    
    <>
    <TopNav/>
    <AppBar sx={{background:'white', color:'#3b3d94', marginTop:'30px'}}>
      <Container>
        <Toolbar>
          <div>
            <Link href='/'><a>
        <Image src={logo} width='50' height='50' className="searchImg" />
              </a></Link>
        </div>
        {
          isMatch ? (
            <>
            <DrawerComp/>
            </>
          ):(
<>
          
        <Tabs sx={{marginLeft:'auto', marginRight:'30px'}} value={value} onChange={(e,value)=> setValue(value)} indicatorColor="primary">
  
          {
            NavDetails.map((page, index) => (
              
                <Tab key={index} label={page.title}  href={page.link} sx={{fontSize:'12px', color:'inherit'}} />
                
              
            ))

            }
          
          
          
        
        </Tabs>
        <Link href="/register"><a target='blank'>
        <Button variant="contained" sx={{fontSize:'12px'}}>Get Admission
        
        <SchoolIcon sx={{marginLeft:'10px',fontSize:'15px'}}/>
        </Button></a></Link>
        </>
          )
}

        </Toolbar>
        </Container>
        
    </AppBar>

    </>
  )
}

export default Navbar