// const http = require("http");
// const fs = require("fs");

// http.createServer(function (request, response) {

//     let filePath = __dirname + "/public/index.html";
//     console.log("test1 = ", filePath)

//     if (request.url !== "/") {
//         // получаем путь после слеша
//         filePath = __dirname + "/public/" + request.url.substr(1);
//         console.log("test2 = ", filePath)
//     }
//     fs.readFile(filePath, function (error, data) {

//         if (error) {

//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else {
//             response.end(data);
//         }
//     });

// }).listen(3000, function () {
//     console.log("Server started at 3000 http://localhost:3000");
// });

/*
const express = require("express")
const app = express()



app.use(express.static(__dirname + "/public"));

app.use("/", function (request, response) {
    response.send(`<h2>Страницы с URL \"http://localhost:3000${request.url}" пока не существует</h2>`);
});

app.listen(3000, function () {
    console.log("Connect to\n\
    http://localhost:3000/,\n\
    http://localhost:3000/addw.html")
})
 */
const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {

    fs.readFile("react/public/index.html", function (error, data) {
        response.end(data);
    });

}).listen(3000, function () {
    console.log("Server started at 3000");
});