const path = require("path");
const { Command } = require('yuuko');

module.exports = new Command('resume', async (message, args, context) => {
    this.client = context.client
        const voiceChannel = message.member.voiceState;
        if(!voiceChannel.channelID) return message.channel.createMessage(`${this.client.emojis.cross} | You must be in a Voice Channel to use \`resume\` command.`);
        const queue = this.client.music.getQueue(message.channel.guild);
        if(!queue) return message.channel.createMessage(`${this.client.emojis.cross} | Nothing is playing to use \`resume\` command.`);
        const playing = this.client.music.isPlaying(message.channel.guild);
        if(playing == false) {
            this.client.music.resume(message.channel.guild);
            message.channel.createMessage(`${this.client.emojis.tick} | Music has been **Resumed**.`);
            return;
        } else return message.channel.createMessage(`${this.client.emojis.tick} | Music is already **Resumed**.`);
    });