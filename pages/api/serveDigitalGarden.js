import fs from "fs";
const filenameBase = "public/digital-garden/";
const indexName = "/index.html"

export default async function api(req, res) {
    let filename = req.query.slug!==undefined ? filenameBase + req.query.slug[0] + indexName : filenameBase + indexName
    console.log(filename)

    console.log("REQ ARRIVATA")
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(await fs.readFileSync(filename, "utf-8"));
    res.end();
    //res.status(200).json({text: "Ciao!"})
}