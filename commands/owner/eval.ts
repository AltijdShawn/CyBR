const { Command } = require("yuuko")
let db = require("quick.db");
const cfg = require('../../cfg');
process.env=cfg;

module.exports = new Command("eval", (message, args, context) => {
    if (message.author.id == process.env.OWNER) {
        const client = context.client;
        this.client = client;
        try {
            let code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
            evaled = clean(evaled);
            if(evaled.length < 1900) this.client.createMessage(message.channel.id, `${this.client.emojis.tick} | Success\n\`\`\`${evaled}\`\`\``)
            else {
                this.client.createMessage(message.channel.id, `${this.client.emojis.tick} | Success, Check Console.`);
                this.client.log(`Eval (Success)\n${evaled}`);
            }
        } catch(err) {
            let error = clean(err);
            if(error.length < 1900) this.client.createMessage(message.channel.id, `${this.client.emojis.cross} | Error\n\`\`\`${error}\`\`\``)
            else {
                this.client.createMessage(message.channel.id, `${this.client.emojis.cross} | Error, Check Console.`);
                this.client.log(`Eval (Error)\n${error}`);
            }
        }
    }
    else return message.channel.createMessage("You can't use Owner only commands")
})