import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    cardBG: {
      main: 'rgba(255, 255, 255, 0.5)',
    },
    cardElementBG: {
      main: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default lightTheme;