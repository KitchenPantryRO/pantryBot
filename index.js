require('dotenv').config();
const Discord = require('discord.js');
const tokenizer = require('./tokenizer/tokenizer.js');
const commands = require('./commands');

const pantryBot = new Discord.Client();

pantryBot.on('ready', () => {
  console.log('Anyone down for ET?');
});

pantryBot.on('message', message => {
  const tokens = tokenizer.tokens(message.content);
  const numTokens = tokenizer.getTokensLen(tokens);
  if (numTokens > 0) {
    const firstToken = tokenizer.getToken(0, tokens);
    const isCmd = tokenizer.isCmd(firstToken);
    if (isCmd) {
      const cmdToken = tokenizer.getCmd(firstToken);
      const argTokens = numTokens >= 2 ? tokenizer.getArgTokens(tokens) : [];
      commands.eggs.cellar(cmdToken, argTokens, message);
      commands.help.help(cmdToken, argTokens, message);
      commands.events.whenIs(cmdToken, argTokens, message);
      commands.roles.setRole(cmdToken, argTokens, message);
      commands.roles.unsetRole(cmdToken, argTokens, message);
      commands.roles.setClass(cmdToken, argTokens, message);
      commands.roles.unsetClass(cmdToken, argTokens, message);
      commands.roles.setTimezone(cmdToken, argTokens, message);
      commands.roles.unsetTimezone(cmdToken, argTokens, message);
    }
  }
});
pantryBot.login(process.env.BOT_TOKEN);
