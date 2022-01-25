const express = require('express')
const fs = require("fs")

const app = express()

//Для работы со статическими файлами в Express определен специальный 
//компонент express.static(), который указывает на каталог с файлами.
//C помощью __dirname получаем абсолютный путь к текущему проекту 
//и затем добавляем к нему путь к файлу в рамках текущего проекта
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({ extended: false });

app.use("/static", express.static(__dirname + "/public"))


app.post("/static", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});


app.use("/", function (request, response) {
    response.send(`<h2>Страницы с URL \"http://localhost:3000${request.url}" пока не существует</h2>`)
})



app.listen(3000, function () {
    console.log("Connect to http://localhost:3000/static")
})


// const express = require("express");
// const hbs = require("hbs");
// const app = express();
// // Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция:l0
// app.set("view engine", "hbs");

// hbs.registerPartials(__dirname + "/views/partials");

// app.use("/contact", function (request, response) {

//     response.render(__dirname + "/views/contact.hbs", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// });


// app.use("/", function (request, response) {

//     response.render("home.hbs");
// });
// app.listen(3000, function () { console.log("http://localhost:3000/contact or \nhttp://localhost:3000/") });