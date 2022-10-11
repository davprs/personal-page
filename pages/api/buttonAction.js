export default function handler (req, res) {
    res.status(200).json({text: "Ciao!"})
    //res.status(500).send('Internal Server Error.')
}