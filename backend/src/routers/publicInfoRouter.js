const path = require("path");
const publicInfoRouter = require("express").Router();
const PUBLIC_PATHS = ["/", "/link"];

publicInfoRouter.get(PUBLIC_PATHS, (req, res)=>{
    res.sendFile(path.join(appRoot, "build", "index.html"));    //TODO uncomment in build
}).get("/*", (req, res)=>{
    res.sendFile(path.join(appRoot, "build", "index.html"));    //TODO uncomment in build
})



module.exports = publicInfoRouter;