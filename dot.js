// DOting - If you have question you can send me a dm
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const { token } = require("./config.json");

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

//stream 24/7 + quotes 
// changes 5 sec 
var quote = [
  `🍃Just an Ordinary Human`,
  `🍃Die with memories, not dreams.`,
  `🍃Aspire to inspire before we expire.`,
  `🍃And still, I rise.`,
  `🍃Don’t tell people your plans. Show them your results.`,
  `🍃When nothing goes right, go left.`,
  `🍃Impossible is for the unwilling.`,
  `🍃Take the risk or lose the chance.`,
  `🍃Prove them wrong.`,
  `🍃Keep going.`,
  `🍃Leave no stone unturned.`,
  `🍃And so the adventure begins.`,
  `🍃You can if you think you can.`,
  `🍃Grow through what you go through.`,
  `🍃Do it with passion or not at all.`,
  `🍃She believed she could, so she did.`,
  `🍃The past does not equal the future.`,
  `🍃Dream without fear.`,
  `🍃Live the moment`,
  `🍃Work hard. Stay humble.`,
  `🍃Silence is an answer too.`,
  `🍃know your weakness`
];
client.on("message", message => {
  setInterval(() => {
    client.user.setActivity(
      `${quote[Math.floor(Math.random() * quote.length)]}`,
      {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
      }
    );
  }, "5000");
});



// simple rating random 1 to 100 - Doting my whole life 
 client.on('message', message => {
  if (message.content === `rateme dot`) {
    var rating = Math.floor(Math.random() * 100) + 1;
  message.reply(`I rate you ${rating}/100`);
 }
});






var dotnames = [
  `D0T 💢`,
  `D0T 🌀`,
  `D0T 🖌`,
  `D0T 🧬`,
  `D0T 💸`,
  `D0T 💎 `,
  `D0T 🌠`,
  `D0T 🛸`,
  `D0T 🚨`,
  `D0T 🎲`,
  `D0T 🎮`,
  `D0T 🍻 `,
  `D0T 🍰`,
  `D0T 🌊`,
  `D0T 🌙`,
  `D0T 🌿`,
  `D0T ☘️`,
  `D0T 🍀`,
  `D0T 🐾`,
  `D0T 👓`,
  `D0T 👀`,
  `D0T 🧠`,
  `D0T 🤑`,
  `D0T 👽`,
  `D0T 👾`,
  `D0T 🤖`,
  `D0T 💀`,
  `D0T ☠️`,
  `D0T 👻`,
  `D0T 🍜`,
  `D0T 🍖`,
  `D0T 🍥`,
  `D0T 🍟`,
  `D0T 🍕`,
  `D0T 🍤`,
  `D0T ✨`,
  `D0T ⚡️`,
  `D0T 🪐`,
  `D0T 💫`,
  `D0T 🔥`,
  `D0T 🌪`,
  `D0T ☄️`,
  `D0T 🥂 `
];

//nickname change everytime you send a message 
// you can put your account id in dotuser = "accountid";
  var dotuser = "364747932316073984";
client.on("message", async message => {
  if (message.author.id === dotuser) {
       message.guild.members.cache
      .get(dotuser)
      .setNickname(`${dotnames[Math.floor(Math.random() * dotnames.length)]}`);
  }
  
  // message auto react - change ("dot")
    if (message.content.toLowerCase().includes("dot")) {
    message.react("✨");
      }

  // edit your messages after sent ( ʚ˚ message  ˚ɞ )
   if(message.author.id === dotuser){
    setTimeout(() => {
    message.edit(`ʚ˚ ${message.content} ˚ɞ`)
    }, "300");
}
  
  
});


// i am not putting everything here since this is for public so if you want use your skills 
//posting this to make others work easier then doing all the coding themself 
// here you just make your own functions most of the things i have already made easier for you 

client.login(token);
