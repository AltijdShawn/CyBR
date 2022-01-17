const chalk = require("chalk");
const figlet = require('figlet');
import { bot } from "../index";
const db = bot.db;
const pkg = require("../package.json");
const cfg = require("../cfg");
process.env = cfg;

module.exports = {
  init: async (client) => {
    // Init DB
    db.set("Bot-username", client.user.username);
    db.set("Bot-discriminator", client.user.discriminator);
    db.set("Bot-version", pkg.version);
    db.set("Bot-desc", pkg.description);
    db.set("Bot-authors", pkg.author);
    db.set("Servers-size", client.guilds.size);
    db.set("Bot-usrid", client.user.id);

    // Init Client
    client.editStatus("dnd", {
      name: `Prefix: " ${client.prefix} "\n♪ My music sounds good :)`,
      type: 3,
    });

    // Init 
    figlet.text(client.user.username, {font: 'Small'}, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      console.log(chalk.yellow(data));
    })
    console.log(`
  ${chalk.greenBright(">===============================================<")}
                  Made by ${chalk.magenta("AmyTheCutie")}
                  
  GitHub: ${chalk.white(cfg.REPO)}
  Discord: ${chalk.white("https://discord.gg/pvtzCgfTJ4")}
  ${chalk.greenBright(">===============================================<")}
  `);
  },
};