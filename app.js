const Discord = require("discord.js");
const client = new Discord.Client();
const entity = "<@380117580242878484>";

client.on("ready", () => {
  client.user.setGame(` ${client.users.size - 4}  players  |  ${client.guilds.size}  server (s)`);
});

client.on("message", message => {
  const args = message.content.slice(entity.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(entity + command)) {
    if (command === "quack") {
      message.channel.send("Quack");
    }
  }
  if (message.content.endsWith(command + entity)) {
    if (command === "quack") {
        message.channel.send("Quack");
    }
  }
});


client.login(process.env.APP_TOKEN); // Authorize login
