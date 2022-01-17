const path = require("path");
const { Command } = require('yuuko');

module.exports = new Command('bassboost', async (message, args, context) => {
    this.client = context.client
        const voiceChannel = message.member.voiceState;
        if(!voiceChannel.channelID) return message.channel.createMessage(`${this.client.emojis.cross} | You must be in a Voice Channel to use \`bassboost\` command.`);
        const queue = this.client.music.getQueue(message.channel.guild);
        if(!queue) return message.channel.createMessage(`${this.client.emojis.cross} | Nothing is playing to use \`bassboost\` command.`);
        if(!args[0]) return message.channel.createMessage(`${this.client.emojis.music} | Bassboost is currently **${queue.bassboost ? "Enabled" : "Disabled"}**.`);
        if(args[0].toLowerCase() == "off") {
            if(this.client.music.getBassboost(message.channel.guild) == false) return message.channel.createMessage(`${this.client.emojis.tick} | Bassboost is already **Disabled**.`);
            this.client.music.setBassboost(message.channel.guild, false);
            message.channel.createMessage(`${this.client.emojis.tick} | Bassboost will be **Disabled** from Next Song.`);
            return;
        }
        if(args[0].toLowerCase() == "on") {
            if(this.client.music.getBassboost(message.channel.guild) == true) return message.channel.createMessage(`${this.client.emojis.tick} | Bassboost is already **Enabled**.`);
            this.client.music.setBassboost(message.channel.guild, true);
            message.channel.createMessage(`${this.client.emojis.tick} | Bassboost will be **Enabled** from Next Song.`);
            return;
        }
    });