import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import NeededTheme from "../Themes/getNeededTheme";


export default function LinkTreeSingleLink ({name, img, index, clickCallBack}) {
    return <CardActionArea key={index}
                onClick={()=>clickCallBack()}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius:5,
                    marginBottom: "10px",
                    backgroundColor: NeededTheme().palette.cardElementBG.main,
                }} className="LinkTreeCardActionArea">
                <CardContent
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    columnGap: 2,
                }}>
                <CardMedia
                component="img"
                image={img}
                sx={{
                    aspectRatio: "14/10",
                    objectFit: "cover",
                    borderRadius: 3,
                    width: "20%",
                }}
                alt={"immagine non trovata"}/>
                <Typography sx={{width: "100%", textAlign: "left", fontSize: 15}} variant={"h6"}>{name}</Typography>
                </CardContent>
            </CardActionArea>
}