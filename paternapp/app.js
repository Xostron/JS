const express = require("express"); //подключаем модуль express
const mongoose = require("mongoose")
const app = express(); //создаем приложение express
const userRouter = require("./routes/userRouter")
const homeRouter = require("./routes/homeRouter")


app.set('views', __dirname + '/views');
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter)
app.use("/", homeRouter)


// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});


mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true }, function (err) {
    if (err) return console.log(err)
    app.listen(3000, function () {
        console.log("Сервер OK\n\
    Доступные страницы(маршруты):\
    \nhttp://localhost:3000/ \nhttp://localhost:3000/about\n\
    http://localhost:3000/users \nhttp://localhost:3000/users/create")
    });
})



/* Итог: имеется 4 страницы: 
-Главная
-О нас
-Пользователи
-Добавить пользователя
 */