import {LinkTreeCard} from "../Components/LinkTreeCard.js";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { createClient } from '@supabase/supabase-js'
import Head from "next/head";
import Image from "next/image";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
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


    let fetchedBackgroundImage;
    await axios("https://bing.biturl.top/?resolution=1920&format=json&index=random&mkt=random")
        .then(res => {
            fetchedBackgroundImage = (res.data.url)
        })
        .catch(e => console.error(e));
    return {
        props: {
            cards,
            fetchedBackgroundImage
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 30 * 60, // In seconds
    }
}

export default function Index({cards, fetchedBackgroundImage}) {

    const socials = ["https://www.instagram.com/crisantedavide/",
        "https://www.linkedin.com/in/davide-crisante-1568a9174/",
        "https://github.com/davprs",
        "https://opensea.io/0x1D9011E5FBe0D2061D3541a3c255aDb5844d01D4"];

    /*const [fetchedBackgroundImage1, setBackgroundImage] = useState("");

    useEffect(() => {
        axios("https://bing.biturl.top/?resolution=1920&format=json&index=random&mkt=random")
            .then(res => {
                setBackgroundImage(res.data.url)
            })
            .catch(e => console.error(e))

        }, [])
    */

    return (
        <><Head>
            <title>Davide Crisante - Link</title>
            <meta name="description" content="Generated by create next app"/>
        </Head>
            <div id="LinkTreeCard" >
                <Image src={fetchedBackgroundImage} priority={true} layout={"fill"} objectFit={"cover"}
                       quality={100} alt={""} className={"backgroundImage"}/>
                <LinkTreeCard cards={cards} socials={socials}/>
            </div>
        </>
    )
}