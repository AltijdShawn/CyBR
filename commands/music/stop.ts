const path = require("path");
const { Command } = require('yuuko');

module.exports = new Command('stop', async (message, args, context) => {
    this.client = context.client

    const voiceChannel = message.member.voiceState;
    if(!voiceChannel.channelID) return message.channel.createMessage(`${this.client.emojis.cross} | You must be in a Voice Channel to use \`stop\` command.`);
    const queue = this.client.music.getQueue(message.channel.guild);
    if(!queue) return message.channel.createMessage(`${this.client.emojis.cross} | Nothing is playing to use \`stop\` command.`);
    this.client.music.stop(message.channel.guild);
    return;
});
