const express = require("express")
const fs = require("fs")

const app = express()
const jsonParser = express.json()

app.use(express.static(__dirname + "/public"))

const filePath = "users.json"

app.get("/api/users", function (request, response) {
    const content = fs.readFileSync(filePath, "utf8")
    const users = JSON.parse(content)
    response.send(users)
})

