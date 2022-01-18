/*
https://habr.com/ru/post/435970/    Руководство для начинающих по серверной веб-разработке с Node.js
*/

// получаем модуль express
const express = require("express")
// создаем объект приложения
const app = express()

/* 
В Express мы можем связать обработку запросов с определенными маршрутами. 
Например, "/" - представляет главную страницу или корневой маршрут. 
Для обработки запроса вызывается функция app.get(). Первый параметр функции - маршрут, 
а второй - функция, которая будет обрабатывать запрос по этому маршруту.
*/

//устанавливаем обработчик для маршрута
app.get("/", function (request, response) {
    response.end("Hello from Express !!! - by Loken (Warhammer 30k)")
})
app.get("/home", function (request, response) {
    response.end("Home - by Loken (Warhammer 30k)")
})
//начинаем прослушивание подключений на 3000 порту
app.listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание по 3000 порту")
})

