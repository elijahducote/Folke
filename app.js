const Discord = require("discord.js");
const client = new Discord.Client();
// const prefix = "<@380117580242878484>";

client.on("ready", () => {
  var acc = ${client.users.size} - 2;
  client.user.setGame(`﻿${acc} players | ${client.guilds.size} server(s)`);
});


client.login(process.env.APP_TOKEN); // Authorize login
