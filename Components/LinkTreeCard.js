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
    const [entryCards, loadCards] = useState();
    const [entrySocial, loadSocial] = useState();
    let {palette} = useTheme();
    useEffect(()=>{

        loadCards(Array.from(cards, ([key, [img, url]], index) => {
                console.log(key)
                return <LinkTreeSingleLink key={index} name={key} img={img} index={index} clickCallBack={()=>window.open(url, '_blank').focus()} />
            })
        );

        loadSocial(Array.from(socials,(value, index) =>{
            console.log(value);
            return <SocialIcon url={value} key={index} className={"socialIcon"}/>
        } ))


    }, [cards, socials]);


    return (
        <Card sx={{
            color:  palette.text.primary,
            display: "flex",
            flexDirection: "column",
            maxHeight: "95vh",
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
                        minWidth: "120px",
                        maxWidth: "150px",
                        width: "30%",
                        aspectRatio: "1/1"
                    }}>
                    <div style={{ position: 'relative', aspectRatio: "1/1", overflow: "hidden",   borderRadius: "100%"}} className={"picWrapper"}>
                        <Image src={"/static/images/imgDavide.jpg"} priority={true} layout="fill" objectFit="cover" alt="foto di Davide Crisante"/>
                    </div>
                </CardMedia>


                <Typography variant="h5">Davide Crisante</Typography>
            </CardContent>

            <div id="socialIcons">
                {entrySocial}
            </div>

            <Box sx={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                overflow:"scroll",
                scrollbarWidth: 'thin',
                minHeight: cards.length*63, //NOTA around cards.length*63
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