// Здесь определена стандартная функция конструктора User, которая принимает два параметра. 
// При этом весь модуль теперь указывает на эту функцию конструктора:

function User(name, age) {
    this.name = name
    this.age = age
    this.displayInfo = function () {
        console.log(`Имя: ${this.name} Возраст ${this.age}`)
    }
}

User.prototype.sayHi = function () {
    console.log(`Привет, меня зовут ${this.name}`)
}

module.exports = User