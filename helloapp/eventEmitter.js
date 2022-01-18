// const Emitter = require("events")
// let emitter = new Emitter()
// let eventName = "greet"
// emitter.on(eventName, function () {
//     console.log(`Событие ${eventName} (Приветствие, версия 1) - Activated!`)
// })

// emitter.on(eventName, function () {
//     console.log(`Событие ${eventName} (Hello, version 2) - Activated!`)
// })

//генерирует событие, в которое передается название события
//при вызове события в качестве 2 аргумента в функцию emit 
//можно передавать второй объект, который передаться в функцию обработчика события
// emitter.emit(eventName, "Lorem ipsum")


//Наследование от EventEmitter
// const util = require("util")
// const EventEmitter = require("events")

// function User() {
// }

// util.inherits(User, EventEmitter)

// let eventName = "greet"
// User.prototype.sayHi = function (data) {
//     this.emit(eventName, data)
// }

// let user = new User()

// user.on(eventName, function (data) {
//     console.log(data)
// })

// user.sayHi("sdfsjdhf;lskdfajs';dfjsdh129381204238")


//ES6 - упрощение примера наследования
const EventEmitter = require("events")
let eventName = "greet"

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data)
    }
}

let user = new User()
// добавляем к объекту user обработку события "greet"
user.on(eventName, function (data) {
    console.log(data)
})

user.sayHi("129893817281-291-29410-")