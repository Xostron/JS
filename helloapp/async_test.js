function displaySync(data, callback) {
    var randInt = Math.random() * (10 - 1) + 1
    //тернарное выражение
    // (условие) ? действие-true : действие-false
    var err = randInt > 5 ? new Error("Ошибка выполнения, переменная>5") : null
    setTimeout(function () {
        callback(err, data)
    }, 0)
    //console.log(data);
}

console.log("Начало работы программы");

displaySync("Обработка данных...", function (err, data) {
    if (err) throw err
    console.log(data)
});

console.log("Завершение работы программы");