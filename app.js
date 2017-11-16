const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '<@380117580242878484>';
const handle = "@Folke#2390";

client.on('ready', () => {
  client.user.setGame(` ${client.users.size - 4}  players  |  ${client.guilds.size}  server (s)`);
});

client.on('message', message => {
  if (message.content.endsWith(handle)) {
    const args = message.content.slice(handle.length).trim().split(' ');
    const cmmd = args.shift().toLowerCase();
    if (cmmd === 'quack') {
      message.channel.send('.');
    }
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix)) {
    if (msg.author.bot || !msg.content.startsWith(prefix));
    const getter = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = getter.shift().toLowerCase();
    if (command === 'quack') {
      msg.channel.send('.');
    }
  }
});


client.login(process.env.APP_TOKEN); // Authorize login
