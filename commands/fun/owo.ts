const { Command } = require('yuuko');

module.exports = new Command('owo', (message, args, context) => {
  message.channel.createMessage('OwO');
});