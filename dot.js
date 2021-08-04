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


// i am not putting everything here since this is for public so if you want use your skills 
//posting this to make others work easier then doing all the coding themself 
// here you just make your own functions most of the things i have already made easier for you 

client.login(token);
