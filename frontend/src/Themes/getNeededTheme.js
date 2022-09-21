import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import {useEffect, useState} from "react";

export default function NeededTheme(){
    const [currentTheme, setThemeState] = useState(darkTheme);

    function setTheme(){
        const dateHours = new Date().getHours();
        setThemeState((dateHours >= 18 ||  dateHours <6) ? darkTheme : lightTheme)
    }
    useEffect(()=>{
        setTheme();
        setInterval(()=>{
            setTheme();
        }, 10000)
    }, [])
    return currentTheme;

}