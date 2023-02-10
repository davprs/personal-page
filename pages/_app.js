import '../styles/globals.css'
import '../styles/Link.style.scss'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {useEffect, useState} from "react";
import darkTheme from "../Themes/darkTheme";
import lightTheme from "../Themes/lightTheme";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {

  const [currentTheme, setThemeState] = useState(lightTheme);
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
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren"
  };
  const { asPath } = useRouter();

  return <>
    <ThemeProvider theme={usedTheme}>
      <CssBaseline />
      <AnimatePresence initial={false}>
        <div className="page-transition-wrapper">
          <motion.div
              transition={spring}
              key={asPath}
              initial={{ scale: 1.1, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 1.1, y: -50, opacity: 0 }}
              id="page-transition-container"
          >
          <Component {...pageProps} />
          </motion.div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
    <Analytics />
    </>
}

export default MyApp
