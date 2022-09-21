import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        cardBG: {
            main: 'rgba(0, 0, 0, 0.5)',
        },
        cardElementBG: {
            main: 'rgba(0, 0, 0, 0.7)',
        },
        error: {
            main: red.A400,
        },
    },
});

export default darkTheme;