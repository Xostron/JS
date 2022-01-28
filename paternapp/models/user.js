//Без БД, данные о пользователях хранились в массиве users, в виде объектов User
// const users = [] 

// module.exports = class User {

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     save() {
//         users.push(this)
//     }
//     static getAll() {
//         return users
//     }
// }

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userScheme = new Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model("User", userScheme)