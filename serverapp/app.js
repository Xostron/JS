const fs = require("fs")
const http = require("http")

http.createServer(
    function (request, response) {
        // console.log("Url: " + request.url)
        // console.log("headers: " + request.headers)
        // console.log("methods: " + request.method)


        const filePath = request.url.substr(1)
        console.log("filePath: " + filePath)

        fs.readFile(filePath, function (error, data) {
            if (error) {
                response.statusCode = 404
                response.end("Resources not found!")
            }
            else {
                response.end(data)
            }
        })




    }).listen(3000, function () { console.log("server started at 3000") })