// DOting - If you have question you can send me a dm
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

// command handler - >W< to make things easier with prefix 
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./events/', (err, files) => {
  const eventHandler = require('./handler/eventHandler.js');
  eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
  const commandHandler = require('./handler/commandHandler.js');
  commandHandler(err, files, client);
});


// simple rating random 1 to 100 - Doting my whole life 
 client.on('message', message => {
  if (message.content === `rateme dot`) {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.reply(`I rate you ${rating}/100`);
 }
});



client.login(process.env.TOKEN);
