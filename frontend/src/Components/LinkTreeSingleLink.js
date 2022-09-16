import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"


export default function LinkTreeSingleLink ({name, img, index, clickCallBack}) {
    return <CardActionArea key={index}
                onClick={()=>clickCallBack()}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius:5,
                    marginBottom: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
                    width: "30%",
                }}
                alt={"immagine non trovata"}/>
                <Typography sx={{width: "100%", textAlign: "center"}} variant={"h6"}>{name}</Typography>    
                </CardContent>
            </CardActionArea>
}