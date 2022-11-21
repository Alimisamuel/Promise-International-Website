import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/system';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const  Breadcrumb = (props) => {
    // console.log(props)
  const breadcrumbs = [
    <Link  key="1" href="/" style={{color:'red'}} onClick={handleClick}>
      {props.name1}
    </Link>,
    // <Link
    //   underline="hover"
     
    //   color="inherit"
    //   href="/material-ui/getting-started/installation/"
    //   onClick={handleClick}
    // >
      
    // </Link>,
    <Typography key="3" color="text.primary">
      {props.name2}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
   
    
      <Breadcrumbs
      
        separator={<NavigateNextIcon fontSize="small" sx={{color:'#0098db'}} />}
        aria-label="breadcrumb"
      >
            <Typography variant='p'>You are here</Typography>
        {breadcrumbs}
      </Breadcrumbs>
      
    
    </Stack>
  );
}

export default Breadcrumb