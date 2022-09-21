import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import LinkTree from './Routes/LinkTree/LinkTree.js';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider , unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import getNeededTheme from "./Themes/getNeededTheme";
import NeededTheme from "./Themes/getNeededTheme";
import {createTheme, useMediaQuery} from "@mui/material";
import darkTheme from "./Themes/darkTheme";
import {dark} from "@mui/material/styles/createPalette"; //https://mui.com/material-ui/customization/theming/

let usedTheme = unstable_createMuiStrictModeTheme(NeededTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    <ThemeProvider theme={usedTheme}>
        <CssBaseline />

        <BrowserRouter basename='/'>
        <Routes>
          <Route index path='/' element={<LinkTree />} />
          <Route path='*' element={<div>Non so</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
// import App from './App';
// import theme from './Themes/lightTheme.js';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <ThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//     <CssBaseline />
//     <App />
//   </ThemeProvider>,
// );