import {Card, CardMedia, CardContent, Typography, CardActionArea, Button, CardActions, Box} from "@mui/material"
import { borderRadius } from "@mui/system";
import { useEffect, useState} from "react";
import imgDavide from "../Assets/Images/imgDavide.jpg"
import LinkTreeSingleLink from "./LinkTreeSingleLink";
import { SocialIcon } from 'react-social-icons';

export const LinkTreeCard = ({cards, socials}) => {
    const [entryCards, loadCards] = useState();
    const [entrySocial, loadSocial] = useState();
    
    useEffect(()=>{

        loadCards(Array.from(cards, ([key, [img, url]], index) => {
                console.log(key)
                return <LinkTreeSingleLink name={key} img={img} index={index} clickCallBack={()=>window.open(url, '_blank').focus()} />
            })
        );
        
        loadSocial(Array.from(socials,(value, index) =>{
            console.log(value);
            return <SocialIcon url={value} key={index} className={"socialIcon"}/>
        } ))


    }, [cards, socials]);


    return (
        <Card sx={{ 
            display: "flex",
            flexDirection: "column",
            maxHeight: "95vh",
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.5)"
        }} className={"linkTree"}>
            <CardContent sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                rowGap: 1,
                justifyContent: "center"}}>
                <CardMedia
                    component="img"
                    image={imgDavide}
                    sx={{
                        minWidth: "120px",
                        maxWidth: "150px",
                        borderRadius: 100,
                        width: "30%",
                    }}
                    alt="foto di Davide Crisante"/>
                <Typography variant="h5">Davide Crisante</Typography>
            </CardContent>

            <div id="socialIcons">
                {entrySocial}
            </div>

            <Box sx={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                overflow:"scroll",
                scrollbarWidth: 'thin',
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