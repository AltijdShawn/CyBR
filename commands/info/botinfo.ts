const { Command } = require('yuuko');
import { bot } from "./index";
const db = bot.db;
const moment = require('moment');
module.exports = new Command(['bi', 'botinfo'], (message, args, context) => {
    this.client = context.client
    let emojis = this.client.emojis;
    message.channel.createMessage({
        embed: {
            title: 'Bot Information',
            description: `Information about ${db.get("Bot-username")}`,
            color: 11141222,
            thumbnail: {
                url: this.client.user.avatarURL,
            },
            fields: [
                {
                    name: 'Owner:',
                    value: `<@${this.client.cfg.OWNER}> (id: \`${this.client.cfg.OWNER}\`)`,
                    inline: false,
                },
                {
                    name: 'Eris and yuuko version',
                    value: `Eris: ${require("../../package.json").dependencies.eris}\nYuuko: ${require("../../package.json").dependencies.yuuko}`,
                    inline: false,
                },
                {
                    name: 'Guild count:',
                    value: `${db.get("Servers-size")} guilds`,
                    inline: false,
                },
                {
                    name: `Emoji's `,
                    value: `${emojis.amber.normal} ${emojis.amber.cry} ${emojis.amber.hearteyes} ${emojis.amber.CyBR} ${emojis.amber.CyBR_Round} ${emojis.amber.status_dnd} ${emojis.amber.status_idle} ${emojis.amber.status_offline} ${emojis.amber.status_online}`,
                    inline: false,
                },
            ],
        },
    });
});