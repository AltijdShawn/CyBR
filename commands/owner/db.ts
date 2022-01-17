const { Command } = require("yuuko")
let db = require("quick.db");
const cfg = require('../../cfg');
process.env=cfg;

let setDB = (CellName, Value) => db.set(CellName, Value);
let getDB = (CellName, Value) => { return db.get(CellName); }

module.exports = new Command("db", (message, args, context) => {
    if (message.author.id == process.env.OWNER) {
        const client = context.client;
        if (args[0] === "set") {
            setDB(args[1], args[2])//.then(() => {
            message.channel.createMessage(`Set Value of **${args[1]}** to **${args[2]}**`)
        //})
        }
        if (args[0] === "get") {
            message.channel.createMessage(`**${getDB(args[1])}**`)
        }
        if (args[0] === "eval") {
            eval(`${getDB(args[1])}`)
        }
    }
    else return message.channel.createMessage("You can't use Owner only commands")
})