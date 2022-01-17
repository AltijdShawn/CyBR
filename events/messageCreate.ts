const { EventListener } = require("yuuko");
import { bot } from "../index";
const db = bot.db;
const cfg = require('../cfg');
process.env=cfg;

module.exports = new EventListener("messageCreate", (message) => {
    let ChannelID = message.channel.id;
    let IfTrue = db.get(`Lock_${ChannelID}`);
    if(IfTrue == true) {
        if (message.author.id == process.env.OWNER) return;
        else {
            message.delete();
        }
    }
});
