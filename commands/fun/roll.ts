const { Command } = require('yuuko');
const cfg = require('../../cfg');
process.env=cfg;
module.exports = new Command(['roll', 'rolladie', 'rolladice'], (message, args) => {
    const arg = args.join(' ');
    if(!args.length) {
        message.channel.createMessage({
            embed: {
                title: `${message.author.username} rolled a die!`,
                description: `${message.author.mention} rolled a die and got **${Math.floor(Math.random() * 6) + 1}**!`,
                color: 12252021,
                fields: [
                ],
            },
        });
    }
    else {
        try {
            const num = arg.trim().split('d');
            const times = parseInt(num[0]);
            const max = parseInt(num[1]) || 6;
            const nums = [];
            for(let i = 0; i < times; i++) {
                let result = Math.floor(Math.random() * max); // eslint-disable-line prefer-const
                result = result + 1;
                nums.push(result);
            }
            message.channel.createMessage({
                embed: {
                    title: `${message.author.username} rolled a ${times} dice!`,
                    description: `${message.author.mention} rolled a ${times} dice and got [ **${nums.join(' ')}** ]!`,
                    color: 12252021,
                },
            });
        }
        catch(err) {
            console.warn(err);
            message.channel.createMessage(`${message.author.mention}, the correct usage would be \`${process.env.PREFIX} roll <number of dice to roll>d<highest number on the die>\``);
        }
    }
});