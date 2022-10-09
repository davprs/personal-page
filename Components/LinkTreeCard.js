import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
} from "@mui/material"
import { useEffect, useState} from "react";
import LinkTreeSingleLink from "./LinkTreeSingleLink";
import { SocialIcon } from 'react-social-icons';
import {useTheme} from "@mui/material";
import Image from "next/image";

export const LinkTreeCard = ({cards, socials}) => {
    const [entryCards, loadCards] = useState(cards.map(([key, [img, url]], index) => {
        console.log(key)
        return <LinkTreeSingleLink key={index} name={key} img={img} index={index} url={url} />
    }));
    const [entrySocial, loadSocial] = useState(socials.map(([value, network], index) =>{
        console.log(value);
        return <SocialIcon url={value} key={index} network={network} className={"socialIcon"}/>
    }));
    let {palette} = useTheme();



    return (
        <Card sx={{
            color:  palette.text.primary,
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            background: palette.cardBG.main
        }} className={"linkTree"}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                rowGap: 1,
                justifyContent: "center"}}>
                <CardMedia
                    sx={{
                        aspectRatio: "1/1"
                    }} className={"cardMediaPicWrapper"}>
                    <div style={{ position: 'relative', aspectRatio: "1/1", overflow: "hidden",   borderRadius: "100%"}} className={"picWrapper"}>
                        <Image src={"/static/images/imgDavide.jpg"} priority={true} layout="fill" objectFit="cover" alt="foto di Davide Crisante"/>
                    </div>
                </CardMedia>


                <Typography variant="h5">Davide Crisante</Typography>
                <Typography variant="h7" sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}><div>Italian Software Engineer.</div><div>&nbsp;Let&apos;s get in touch!</div></Typography>
            </CardContent>

            <div id="socialIcons">
                {entrySocial}
            </div>

            <Box sx={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                overflow:"scroll",
                scrollbarWidth: 'thin',
                //minHeight: cards.length*63, //NOTA around cards.length*63
                '::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '::-webkit-scrollbar-button': {

                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888'
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#555'
                },
                '::-webkit-scrollbar-track': {
                    background: "rgba(0, 0, 0, 0)"
                },
                '::-webkit-scrollbar-track-piece': {

                },
                '::-webkit-scrollbar-corner': {
                    background: "rgba(0,0,0,0)"
                },

            }} id="singleLinksContainer">
                {entryCards}
            </Box>
        </Card>
    );
}