const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543206776431181835")
setInterval(function() {
channel.send(`<@536186199987978240>
 مادي فوق مادي فوق `);
}, 30)
})

client.login(process.env.BOT_TOKEN);



client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'credit2') {
      message.channel.send(`#credit`)
  }
  });
