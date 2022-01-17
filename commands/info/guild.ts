const { Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command(['guild', 'server'], (message) => {
    const guild = message.channel.guild;
    const owner = guild.members.get(guild.ownerID);
    message.channel.createMessage({
        embed: {
            title: 'Guild Information',
            description: `Guild information for ${guild.name} (id: \`${guild.id}\`)`,
            color: 11272041,
            thumbnail: {
                url: guild.iconURL,
            },
            fields: [
                {
                    name: 'Owner:',
                    value: `${owner.username}#${owner.discriminator} (id: \`${guild.ownerID}\`)`,
                    inline: false,
                },
                {
                    name: 'Created at:',
                    value: `${moment.utc(guild.createdAt).format('MMMM, Do YYYY, h:mm:ss a')}`,
                    inline: false,
                },
                {
                    name: 'Member count:',
                    value: `${guild.memberCount} members`,
                    inline: false,
                },
            ],
        },
    });
});