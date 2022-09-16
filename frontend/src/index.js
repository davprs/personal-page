import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import LinkTree from './Routes/LinkTree/LinkTree.js';
import { ThemeProvider , unstable_createMuiStrictModeTheme } from '@mui/material/styles'; //https://mui.com/material-ui/customization/theming/

const theme = unstable_createMuiStrictModeTheme();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route index path='/' element={<Link to={"/link"}> ciao </Link>} />
          <Route path='link' element={<LinkTree />} />
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
// import theme from './Themes/theme.js';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <ThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//     <CssBaseline />
//     <App />
//   </ThemeProvider>,
// );