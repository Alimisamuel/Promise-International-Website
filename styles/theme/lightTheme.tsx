
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:'#0098db'
    },
    secondary:{
main:"#3b3d94"
    }
  },
  typography:{
    fontFamily: "Roboto",
    
  }

  
});

export default lightTheme;