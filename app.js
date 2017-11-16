const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '<@380117580242878484>';

client.on('ready', () => {
  client.user.setGame(` ${client.users.size - 4}  players  |  ${client.guilds.size}  server (s)`);
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix)) {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmnd = args.shift().toLowerCase();
    if (cmnd === 'quack') {
      msg.channel.send('**Q u a c k  .**');
    }
  }  
  
  if (msg.content.endsWith(prefix)) {
    if (msg.author.bot || !msg.content.endsWith(prefix)) return;
    const getter = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = getter.shift().toLowerCase();
    if (command === 'quack') {
      msg.channel.send('**Q u a c k .**');
    }
  }
});


client.login(process.env.APP_TOKEN); // Authorize login
