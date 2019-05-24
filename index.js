require('dotenv').config();
const Discord = require('discord.js');

const pantryBot = new Discord.Client();

pantryBot.on('ready', () => {
  console.log('Anyone down for ET?');
});

pantryBot.on('message', message => {
  if (message.content === 'Suz') {
    message.reply('Did you mean Queen of the Alts?');
  }
});
pantryBot.login(process.env.BOT_TOKEN);
