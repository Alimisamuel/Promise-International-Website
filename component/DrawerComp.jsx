import React, { useState } from 'react'
import Image from 'next/image'

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'

import SchoolIcon from '@mui/icons-material/School'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ContactsIcon from '@mui/icons-material/Contacts'
import DashboardIcon from '@mui/icons-material/Dashboard'
import EngineeringIcon from '@mui/icons-material/Engineering'
import logo from '../public/logo.png'
import Link from 'next/link'

const DrawerComp = () => {
  const [openDrawer, setopenDrawer] = useState(false)

  const NavPages = ['Courses', 'Faq', 'Community', 'Logout']

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          {/* {
    NavPages.map((page, index)=>(
<ListItemButton key={index} onClick={()=>setopenDrawer(false)}>
        <ListItemIcon>
<ListItemText sx={{fontSize:'12px'}}>{page}</ListItemText>
        </ListItemIcon>
    </ListItemButton>
    ))
  } */}

          <div style={{ marginBottom: '20px', marginLeft: '5px' }}>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  width="50"
                  height="50"
                  className="searchImg"
                />
              </a>
            </Link>
          </div>


          <Link href="/About">
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ApartmentIcon
                  sx={{ fontSize: '23px', paddingTop: '4px', color: '#0098db' }}
                />
                <ListItemText
                  sx={{ fontSize: '12px', marginLeft: '10px', color: '#000' }}
                >
                  About
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

<Link href='/'>
          <ListItemButton onClick={() => setopenDrawer(false)}>
            <ListItemIcon>
              <EngineeringIcon
                sx={{ fontSize: '23px', paddingTop: '4px', color: '#0098db' }}
              />
              <ListItemText
                sx={{ fontSize: '12px', marginLeft: '10px', color: '#000' }}
              >
                Student Portal
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          </Link>


          <Link href='/'>
          <ListItemButton onClick={() => setopenDrawer(false)}>
            <ListItemIcon>
              <DashboardIcon
                sx={{ fontSize: '23px', paddingTop: '4px', color: '#0098db' }}
              />
              <ListItemText
                sx={{ fontSize: '12px', marginLeft: '10px', color: '#000' }}
              >
                Staff Dashboard
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          </Link>


          <Link href='/Faq'>
          <ListItemButton onClick={() => setopenDrawer(false)}>
            <ListItemIcon>
              <LiveHelpIcon
                sx={{ fontSize: '23px', paddingTop: '4px', color: '#0098db' }}
              />
              <ListItemText
                sx={{ fontSize: '12px', marginLeft: '10px', color: '#000' }}
              >
                Faq
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          </Link>


          <Link href='/contact'>
          <ListItemButton
            sx={{ marginBottom: '460px' }}
            onClick={() => setopenDrawer(false)}
          >
            <ListItemIcon>
              <ContactsIcon
                sx={{ fontSize: '23px', paddingTop: '4px', color: '#0098db' }}
              />
              <ListItemText
                sx={{ fontSize: '12px', marginLeft: '10px', color: '#000' }}
              >
                Contact Us
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          </Link>

          <Divider></Divider>
        <Link href='/Register'>
          <ListItemButton
            sx={{ bgcolor: '#0098db' }}
            onClick={() => setopenDrawer(false)}
          >
            <ListItemIcon>
              <SchoolIcon
                sx={{ fontSize: '23px', paddingTop: '4px', color: '#ffffff' }}
              />
              <ListItemText
                sx={{ fontSize: '12px', marginLeft: '10px', color: '#ffffff' }}
              >
                Get Admission
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto' }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
