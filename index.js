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
  const firstToken = tokenizer.getToken(0, tokens);
  const isCmd = tokenizer.isCmd(firstToken);
  const argTokens = numTokens >= 2 ? tokenizer.getArgTokens(tokens) : [];

  if (isCmd) {
    const cmdToken = tokenizer.getCmd(firstToken);
    commands.eggs.cellar(cmdToken, argTokens, message);
    commands.help.help(cmdToken, argTokens, message);
    commands.events.whenIs(cmdToken, argTokens, message);
  }
});
pantryBot.login(process.env.BOT_TOKEN);
