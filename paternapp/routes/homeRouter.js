//подключаем модуль express
const express = require("express");
//подключаем собственный модуль контроллера
const homeController = require("../controllers/homeController.js");
//определяем роутер
const homeRouter = express.Router();

// определяем маршруты и их обработчики внутри нашего роутера homeRouter
homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);
//экспортируем роутер
module.exports = homeRouter;