const User = require("../models/user.js")

// функция обработчик маршрута - добавление пользователя
exports.addUser = function (request, response) {
    response.render("create.hbs");
};

// Without DB
// функция обработчик маршрута - возвращает представление users.hbs, в которое 
// передает список пользователей с помощью вызова метода User.getAll()
// exports.getUsers = function (request, response) {
//     response.render("users.hbs", { users: User.getAll() });
// };

exports.getUsers = function (request, response) {
    User.find({}, function (err, allUsers) {
        if (err) {
            console.log(err)
            return response.sendStatus(400)
        }
        response.render("users.hbs", { users: allUsers })
    })
}
// Without DB
// функция обработчик - Метод postUser() получает отправленные данные, 
// создает объект User и вызывает у него метод save, тем самым сохраняя его 
// в массив users из файла user.js. После добавления идет переадресация на список пользователей.
// exports.postUser = function (request, response) {
//     const username = request.body.name;
//     const userage = request.body.age;
//     const user = new User(username, userage);
//     user.save();
//     response.redirect("/users");
// };

exports.postUser = function (request, response) {
    if (!request.body) return response.sendStatus(400)
    const userName = request.body.name
    const userAge = request.body.age
    const user = new User({ name: userName, age: userAge })

    user.save(function (err) {
        if (err) return console.log(err)
        response.redirect("/users")
    })

}