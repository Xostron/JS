const morning = require("./morning.js")
const evening = require("./evening.js")

module.exports =
{
    getMorMsg: function () {
        console.log(morning)
    },
    getEvnMsg: function () {
        console.log(evening)
    }
}