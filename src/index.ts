import express from "express"

let app = express()

app.get("/", (req, res) => {
    res.send("Hello World directly from TypeScript!")
})

app.use((req, res) => {
    res.send("Hello World from the error handler!")
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!")
})
