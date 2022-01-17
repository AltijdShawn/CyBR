const path = require("path");
const { Command } = require('yuuko');

module.exports = new Command('nowplaying', async (message, args, context) => {
    this.client = context.client
        const voiceChannel = message.member.voiceState;
        if(!voiceChannel.channelID) return message.channel.createMessage(`${this.client.emojis.cross} | You must be in a Voice Channel to use \`nowplaying\` command.`);
        const queue = this.client.music.getQueue(message.channel.guild);
        if(!queue) return message.channel.createMessage(`${this.client.emojis.cross} | Nothing is playing to use \`nowplaying\` command.`);
        const current = this.client.music.convertDuration(queue.connection.current.playTime);
        const duration = this.client.music.convertDuration(queue.songs[0].parsedDuration);
        const song = queue.songs[0];
        const embed = {
            color: 0x00ffff,
            fields: [
                {
                    name: `${this.client.emojis.headphones} | Now Playing`,
                    value: `[${song.title}](${song.url}) [<@${song.user}>]`,
                    inline: false
                }
            ],
            footer: {
                text: `${current} ${await createBar(queue.connection.current.playTime, song.parsedDuration)} ${duration}`
            }
        };
        message.channel.createMessage({ embed: embed });
        return;
    });

    let createBar = (prog, total) => {
        let emote = "🔘";
        let position = Math.floor((prog / total) * 20);
        let bar = "────────────────────".split("");
        if(position >= 1 && position <= 20) {
            bar.splice(position, 0, emote);
            bar = bar.join("")
        } else {
            bar = `${emote}────────────────────`;
        };
        return bar;
    }