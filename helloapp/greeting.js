let currentDate = new Date()


// Node.js предоставляет специальный объект global, который 
//предоставляет доступ к глобальным, то есть доступным из 
//каждого модуля приложения, переменным и функциям.
global.date = currentDate


module.exports.name = "Styuna"

module.exports.getMessage = function () {
    let hour = currentDate.getHours()
    if (hour > 16)
        return "Добрый вечер, " + global.name
    else if (hour > 10)
        return "Добрый день, " + name
    else
        return "Доброе утро, " + name
}