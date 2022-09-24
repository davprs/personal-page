import {CardActionArea, CardContent, CardMedia, Typography, useTheme} from "@mui/material"
import Image from "next/image";

export default function LinkTreeSingleLink ({name, img, index, clickCallBack}) {
    let {palette} = useTheme();


    return <CardActionArea key={index}
                           onClick={()=>clickCallBack()}
                           sx={{
                               display: "flex",
                               flexDirection: "column",
                               borderRadius:5,
                               marginBottom: "10px",
                               backgroundColor: palette.cardElementBG.main,
                           }} className="LinkTreeCardActionArea">
        <CardContent
            sx={{
                display: 'flex',
                alignItems: "center",
                columnGap: 2,
                width: "100%"
            }}>
            <CardMedia
                sx={{
                    aspectRatio: "14/10",
                    objectFit: "cover",
                    borderRadius: 3,
                    width: "26%",
                    overflow: "hidden"
            }}
                >
                <div className={"picWrapper"} style={{ position: 'relative'}}>
                    <Image src={img} alt={"immagine non trovata"} layout="fill" objectFit={"cover"} />
                </div>
            </CardMedia>
            <Typography sx={{width: "100%", textAlign: "left", fontSize: 15}} variant={"h6"}>{name}</Typography>
        </CardContent>
    </CardActionArea>
}