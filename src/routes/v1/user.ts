import * as express from "express"

const user = express.Router()

user.get("/", (req, res) => {
    res.send("Hello World from user get!")
})

user.post("/:id", (req, res) => {
    res.send("Hello World from user post!")
})

user.put("/:id", (req, res) => {
    res.send("Hello World from user put!")
})

user.delete("/:id", (req, res) => {
    res.send("Hello World from user delete!")
})

export default user
