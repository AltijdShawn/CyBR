const cfg = require("./cfg");
import { bot } from "./index";
const db = bot.db;

let setDBDefaults = () => {
    db.set("Bot-prefix", cfg.PREFIX)
}

setDBDefaults()