const chalk = require("chalk");
const { Client } = require("yuuko");
const db = require("quick.db");
const moment = require("moment");
const path = require("path");
const musicClient = require("./base/Music");
const cfg = require("./cfg");
process.env = cfg;
const youtube = new (require("simple-youtube-api"))(process.env.YTTOKEN);
export const bot = new Client({
  token: process.env.TOKEN,
  prefix: db.get("Bot-prefix") || process.env.PREFIX,
  ignoreBots: true,
});
bot.Eris = Client;
bot.cfg = cfg;
bot.wait = require("util").promisify(setTimeout);
bot.chalk = chalk;
bot.log = (text) =>
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]: ${text}`);
bot.webServer = require("./web/index");
bot.music = new musicClient(youtube, bot);
bot.emojis = {
  tick: "✅",
  search: "🔍",
  music: "🎵",
  cross: "❌",
  headphones: "🎧",
  amber: {
    normal: "<:Amber:731910188335890453>",
    cry: "<:AmberCry:731967735939989605>",
    hearteyes: "<:AmberHeartEyes:731967736019812433>",
    CyBR: "<:CyBR:877630544769327154>",
    CyBR_Round: "<:CyBR_Round:877630544245039145>",
    status_dnd: "<:dnd:821099094851453000>",
    status_idle: "<:idle:821099095506026496> ",
    status_offline: "<:offline:821099095284383804>",
    status_online: "<:online:821099095225532516>",
  },
};
bot.replies = {
  hru: [
    "Fine, How are you",
    "Good, Thanks for asking :smile:",
    "I'm doing great, and you? :smile:",
  ],
};
bot.extendContext({
  variableOne: "Variable number 1!",
}); // edits bot status
bot.on("error", (err) => {
  console.error(err);
});
bot.globalCommandRequirements = {
  guildOnly: true,
};
bot
  .addDir(path.join(__dirname, "commands/fun"))
  .addDir(path.join(__dirname, "commands/info"))
  .addDir(path.join(__dirname, "commands/music"))
  .addDir(path.join(__dirname, "commands/owner"))
  .addDir(path.join(__dirname, "commands/testmoderation"))
  .addDir(path.join(__dirname, "events"))
  .connect();