const http = require("http") //модуль http, для его загрузки применяется функция require()
//createServer() создается новый сервер для прослушивания входящих подключений и обработки запросов.
http.createServer(function (request, response) {
    /* В качестве параметра этот метод принимает функцию, которая имеет два параметра. 
    Первый параметр request хранит всю информацию о запросе, 
    а второй параметр response используется для отправки ответа. 
    В данном случае ответ представляет простую строку "Hello NodeJS!" 
    и отправляется с помощью метода response.end().*/
    response.end("<h1>Hello, hello NodeJS!</h1>")
    /*Но метод http.createServer() только создает сервер. 
    Чтобы сервер начал прослушивать входящие подключения у него надо вызвать метод listen:
    Этот метод принимает три параметра. Первый параметр указывает на локальный порт, 
    по которому запускается сервер. Второй параметр указывает на локальный адрес. 
    То есть в данном случае сервер будет запускаться по адресу 127.0.0.1 или 
    localhost на порту 3000.
    Третий параметр представляет функцию, которая запускается при начале прослушивания подключений. 
    Здесь эта функция просто выводит диагностическое сообщение на консоль.*/
}).listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000")
})

/* 
используем модуль os, который предоставляет информацию об 
окружении и операционной системе:
 */
const os = require("os")
let userName = os.userInfo().username
console.log("userName = ", userName)

//Поключение модуля greeting.js
let greeting = require("./greeting")
console.log(`Дата запроса: ${greeting.date}`)
console.log(greeting.getMessage(userName))
console.log(`Hello ${greeting.name}`)

let greeting2 = require("./greeting.js")
greeting2.name = "Sofia"

console.log(`Hello ${greeting.name}`)
console.log(`Hello ${greeting2.name}`)
//Подключение модуля user.js
const User = require("./user.js")
let myName = new User("Loken", 28)
myName.sayHi();

const welcome = require("./welcome")
welcome.getMorMsg()
welcome.getEvnMsg()
