import express from "express"
import user from "./routes/v1/user"
import message from "./routes/v1/message"
import list from "express-list-endpoints"

const app = express()

const v1 = express.Router()

v1.use("/user", user)
v1.use("/message", message)

app.use("/v1", v1)

app.listen(3000, () => {
    console.table(list(app))
    console.log("Example app listening on port 3000!")
})
