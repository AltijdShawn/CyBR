const path = require("path");
const { Command } = require('yuuko');

module.exports = new Command('remove', async (message, args, context) => {
    this.client = context.client
        const voiceChannel = message.member.voiceState;
        if(!voiceChannel.channelID) return message.channel.createMessage(`${this.client.emojis.cross} | You must be in a Voice Channel to use \`previous\` command.`);
        const queue = this.client.music.getQueue(message.channel.guild);
        if(!queue) return message.channel.createMessage(`${this.client.emojis.cross} | Nothing is playing to use \`previous\` command.`);
        const position = (args[0] && (isNaN(args[0]) == false)) ? parseInt(args[0]) - 1: false;
        if(!position || (position && position < 0)) return message.channel.createMessage(`${this.client.emojis.cross} | Specify the Song Number to be removed.`);
        if(position > this.client.music.getQueue(message.channel.guild).songs.length) return message.channel.createMessage(`${this.client.emojis.cross} | Specified the Song Number doesn\'t Exist.`);
        if(position == 0) return message.channel.createMessage(`${this.client.emojis.cross} | Current Playing Song cannot be removed.`);
        const song = this.client.music.getSong(message.channel.guild, position);
        let removed = this.client.music.removeTrack(message.channel.guild, position);
        if(removed) return message.channel.createMessage(`${this.client.emojis.tick} | Removed **${song.title}** from the Queue.`)
        else return message.channel.createMessage(`${this.client.emojis.tick} | Something Went Wrong.`);
    });