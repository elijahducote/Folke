const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '<@380117580242878484>';

client.on('ready', () => {
  client.user.setGame(` ${client.users.size - 4}  players  |  ${client.guilds.size}  server (s)`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix)) {
    if (message.content.startsWith(prefix)) return;
    const getter = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = getter.pop().toLowerCase();
    if (command === 'quack') {
      message.channel.send('**Q u a c k  .**');
    }
  }
});

client.on('message', message => {
  if (message.content.endsWith(prefix)) {
    if (message.content.endsWith(prefix)) return;
    const getter = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = getter.shift().toLowerCase();
    if (command === 'quack') {
      message.channel.send('**Q u a c k .**');
    }
  }
});


client.login(process.env.APP_TOKEN); // Authorize login
