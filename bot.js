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
var prefix = '!';//D
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.send(args.join("  "))
   message.delete()
  }
 });


