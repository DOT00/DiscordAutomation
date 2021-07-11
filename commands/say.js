const Discord = require('discord.js');
module.exports = {

	name: 'say',
	description: 'says what the fuck you write example (prefix)say = message',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
        // Your account id so it will only respond if you use the command 
     if(message.author.id === "364747932316073984"){
    if (!args.length) {
            return message.channel.send(`Please Provide Some Text, ${message.author}!`);
        }
        message.delete();
        message.channel.send(`${args.join(" ")}`);
     }
	},
};