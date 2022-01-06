//Функция 
// function plus1(x) {
//     return x + 1
// }
// let x = 3, y
// y = plus1(x)
// console.log(y)

//стрелочная функция
// let x = 5, y
// const plus1 = x => x + 1
// y = plus1(x)
// console.log(y)

//Массив
let a = [1, 2, 3, 'styuna']
//a[0] = 10
console.log('array = ' + a)
a.push(410, 'xostron')
console.log('array push = ' + a)
a.reverse()
console.log('array reverse = ' + a)

//Объект (Словарь)
let book = { topic: "javaScript", edition: 7 }
console.log("Объект(словарь) = " + book.topic + '\n' +
    "Издание: " + book["edition"])

//определение собственного метода
let points = [{ x: 1, y: 1 }, { x: 2, y: 2 }]
points.dist = function () {
    let p1 = this[0]
    let p2 = this[1]
    console.log('p1 = ' + p1)
    console.log('p2 = ' + p2)
    let a = p2.x - p1.x
    let b = p2.y - p1.y
    console.log('a = ' + a)
    console.log('b = ' + b)
    return Math.sqrt(a * a + b * b)
}
let d = points.dist()
console.log('собственный метод = ' + d)

//condition if () {} else {}
function abs(x) {
    if (x >= 0) { return x }
    else { return -x }
}
console.log('abs = ' + abs(-10))

//cycle for
function sum(array) {
    let sum = 0
    for (let x of array) {
        sum += x
    }
    return sum
}

console.log('cycle for (array) = ' + sum([1, 2, 3, 4, 5]))

//cycle while
function factorial(n) {
    let product = 1
    while (n > 1) {
        product *= n
        n--
    }
    return product
}
console.log('cycle while = ' + factorial(4))

//cycle for v2
function factorial2(n) {
    let i, product = 1
    for (i = 2; i <= n; i++)
        product *= i
    return product
}
console.log('cycle for_v2 = ' + factorial2(4))

//class
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
let p = new Point(1, 1)
console.log('class Point, method: Distance = ' + p.distance())

//Histogram********************************************
class DefaultMap extends Map {
    constructor(defaultValue) {
        super()
        this.defaultValue = defaultValue
    }
    get(key) {
        if (this.has(key)) {
            return super.get(key)
        }
        else {
            return this.defaultValue
        }
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0)
        this.totalLetters = 0
    }
    add(text) {
        text = text.replace(/\s/g, "").toUpperCase()
        for (let character of text) {
            let count = this.letterCounts.get(character)
            this.letterCounts.set(character, count + 1)
            this.totalLetters++
        }
    }
    toString() {
        let entries = { ...this.letterCounts }
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1
            }
            else {
                return b[1] - a[1]
            }
        })
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100
        }
        entries = entries.filter(entry => entry[1] >= 1)
        let lines = entries.map(
            ([l, n]) => '${1}: $("#".repeat(Math.round(n))) ${n.toFixed(2)}%'
        )
        return lines.join("\n")
    }
}
async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8")
    let histogram = new Histogram()
    for await (let chunk of process.stdin) {
        histogram.add(chunk)
    }
    return histogram
}

//histogramFromStdin('test.txt').then(histogram => { console.log(histogram.toString()) })
//Histogram********************************************


//unicode - special symbols
console.log("The end \u{1F600}, e = \u{E9} or e\u{301}")

//date&time
let timestamp = Date.now()
console.log('Время: ' + timestamp) //число

let now = new Date()
console.log('Time obj =' + now.toString())
console.log('Time obj =' + now)

let iso = now.toISOString()
console.log('log = ' + iso)

//