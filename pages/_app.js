import '../styles/globals.css'
import '../styles/Link.style.scss'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {useEffect, useState} from "react";
import darkTheme from "../Themes/darkTheme";
import lightTheme from "../Themes/lightTheme";

function MyApp({ Component, pageProps }) {

  const [currentTheme, setThemeState] = useState(darkTheme);
  let interval;

  function setTheme(){
    const dateHours = new Date().getHours();
    setThemeState((dateHours >= 18 ||  dateHours <6) ? darkTheme : lightTheme)
  }
  useEffect(()=>{
    setTheme();
    interval = setInterval(()=>{
      setTheme();
      return () => clearInterval(interval);
    }, 10000)
  }, [])

  let usedTheme = createTheme(currentTheme);

  return <>
    <ThemeProvider theme={usedTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
}

export default MyApp
