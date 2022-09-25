
const mktDict = {
    0: "zh-CN",
    1: "en-US",
    2: "ja-JP",
    3: "en-AU",
    4: "en-GB",
    5: "de-DE",
    6: "en-NZ",
    7: "en-CA",
    8: "en-IN"
}

export default function getRandomBackgroundImage(){
    const idx = Math.floor(Math.random() * 8); // [0, 8]
    const mkt = mktDict[Math.floor(Math.random() * 8)] // [0, 8]
    return "https://www.bing.com/HPImageArchive.aspx?format=js&idx=" + idx + "&n=1&mkt=" + mkt;
}