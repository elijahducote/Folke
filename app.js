const Discord = require("discord.js");
const folke = new Discord.Client();
// const prefix = "<@380117580242878484>";

folke.on("ready", () => {
  folke.user.setGame(`​**​**\down **${client.users.size} players** | **${client.guilds.size} server(s)** **​**​**`);
});


folke.login(process.env.APP_TOKEN); // Authorize login
