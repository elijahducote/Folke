const Discord = require("discord.js");
const client = new Discord.Client();
// const prefix = "<@380117580242878484>";

client.on("ready", () => {
  client.user.setGame(`﻿${client.users.} players | ${client.guilds.size} server(s)`, "https://www.twitch.tv/theoraclegamer");
});


client.login(process.env.APP_TOKEN); // Authorize login
