const { EventListener } = require("yuuko");
const { init } = require("../utils/init")
module.exports = new EventListener("ready", ({ client }) => {
  // context.client = bot
  init(client);

  client.log(
    client.chalk.blue(
      `Logged in as ${client.chalk.red(
        client.user.username + "#" + client.user.discriminator
      )} (${client.chalk.yellow(client.guilds.size)}) Servers!`
    )
  );

});
