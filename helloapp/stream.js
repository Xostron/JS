const fs = require("fs")

//создание потока записи
let writeStream = fs.createWriteStream("horus.txt")
writeStream.write("Примарх Хорус Луперкаль. \n")
writeStream.write("Один из первых примархов найденный Императором на умирающей планете \n\
Впоследствии был отравлен влиянием хаоса, которому поспособствовал легион Несущих слово\n")
writeStream.end("Любимый сын Императора\n")

//создание потока чтения
let readStream = fs.createReadStream("horus.txt", "utf8")

//поток разбивается на чанки, и при считывании каждого такого куска
//возникает событие data. C помощью метода on() подписываемся на это событие и выводим кусок данных на консоль
readStream.on("data", function (chunk) {
    console.log(chunk)
})
//использование pipe - канал, который связывает поток для чтения и поток для записи 
//и позволяет сразу считать из потока чтения в поток записи

let writeStream2 = fs.createWriteStream("report1.txt")
readStream.pipe(writeStream2)