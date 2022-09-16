import {LinkTreeCard} from "../../Components/LinkTreeCard.js";
import "./LinkTree.style.scss"
import React, { useEffect, useState } from "react";
import axios from "axios";
import iconaTriennale from '../../Assets/Images/icona_tesi_triennale.png';
import iconaPraceDPD from '../../Assets/Images/prace_DPD_icon.jfif';

export default function LinkTree () {
    const cards = new Map([
        ["Tesi Triennale Ottimizzazione tramite Quantum Computing", [iconaTriennale, "https://amslaurea.unibo.it/24769/"]],
        ["Prace HPC 2020 Video", [iconaPraceDPD, "https://youtu.be/neTtYC_U7gI"]],
    ]);

    const socials = ["https://www.instagram.com/crisantedavide/",
                    "https://www.linkedin.com/in/davide-crisante-1568a9174/",
                    "https://github.com/davprs",
                    "https://opensea.io/0x1D9011E5FBe0D2061D3541a3c255aDb5844d01D4"];

    const [fetchedBackgroundImage, setBackgroundImage] = useState("");

    useEffect(() => {
         axios("https://bing.biturl.top/?resolution=1920&format=json&index=random&mkt=random")
        .then(res => {
            setBackgroundImage(res.data.url)
        })
        .catch(e => console.error(e))
    }, [])

    
    return <div id="LinkTreeCard" style={{backgroundImage: `url(${fetchedBackgroundImage})`}}>
        <LinkTreeCard cards={cards} socials={socials} />
    </div>
}