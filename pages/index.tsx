import {LinkTreeCard} from "../Components/LinkTreeCard.js";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { createClient } from '@supabase/supabase-js'
import Head from "next/head";
import Image from "next/image";
import getRandomBackgroundImage from "../lib/backgroundApiRequestUrlGenerator";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const DAY = 24 * 60 * 60;
    const HOUR = 60 * 60;
    const MINUTE = 60;
    const SECOND = 1;
    const cards = [];
    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    )
    let {data, error} = await supabase.from('Link')
        .select('img_file_name, link_text, link_url')
        .order('id', { ascending: true });
    if (! error) {
        for (const value of data) {
            const imgUrl = (await supabase.storage.from('thumbnail').getPublicUrl("public/" + value['img_file_name'])).data.publicURL;
            cards.push([value['link_text'], [imgUrl, value['link_url']]]);
        }
    } else { console.log(error)}
    const randomImageUrl = getRandomBackgroundImage();
    console.log(randomImageUrl)
    let fetchedBackgroundImage = await axios(randomImageUrl)
        .then(res => {
            return "https://www.bing.com" + res.data.images[0].url
        })
        .catch(e => {
            console.error(e);
            return 'https://www.bing.com/th?id=OHR.LastDollarRoad_JA-JP2023000360_1920x1080.jpg';
        });
    console.log("my guess is... " + fetchedBackgroundImage)

    const renderTime = new Date().toString();
    return {
        props: {
            cards,
            fetchedBackgroundImage,
            renderTime,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: (0*DAY) + (4*HOUR) + (0*MINUTE) + (0*SECOND), // In seconds
    }
}

export default function Index({cards, fetchedBackgroundImage, renderTime}) {

    const socials = [["https://www.instagram.com/crisantedavide/", "instagram"],
        ["https://www.linkedin.com/in/davide-crisante-1568a9174/", "linkedin"],
        ["https://github.com/davprs", "github"],
        ["https://opensea.io/0x1D9011E5FBe0D2061D3541a3c255aDb5844d01D4", "smugmug"],
        ["mailto:davide.dev98@gmail.com", "email"]];

    console.log("last ISR : " + renderTime)
    //const [fetchedBackgroundImage1, setBackgroundImage] = useState("");

    /*useEffect(() => {
        axios("https://bing.biturl.top/?resolution=1920&format=json&index=random&mkt=random")
            .then(res => {
                console.log(res.data.url)
            })
            .catch(e => console.error(e))

        }, [])
    */

    return (
        <><Head>
            <title>Davide Crisante - Link</title>
            <meta name="description" content="Personal Link page of Davide Crisante"/>
        </Head>
            <div id="LinkTreeCard" >
                <Image src={fetchedBackgroundImage} priority={true} layout={"fill"} objectFit={"cover"}
                       quality={100} alt={""} className={"backgroundImage"}/>
                <LinkTreeCard cards={cards} socials={socials}/>
            </div>
        </>
    )
}