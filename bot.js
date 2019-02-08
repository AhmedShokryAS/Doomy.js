const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543206507567906829")
setInterval(function() {
channel.send(` الشيخ فريزر الي بيشيل باليزر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);



client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'credit7') {
      message.channel.send(`#credit`)
  }
  });
