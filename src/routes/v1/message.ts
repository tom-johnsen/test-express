import * as express from "express"

const message = express.Router()

message.get("/", (req, res) => {
    res.send("Hello World from message get!")
})

message.post("/:id", (req, res) => {
    res.send("Hello World from message post!")
})

message.put("/:id", (req, res) => {
    res.send("Hello World from message put!")
})

message.delete("/:id", (req, res) => {
    res.send("Hello World from message delete!")
})

export default message
