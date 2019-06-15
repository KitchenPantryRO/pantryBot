require('dotenv').config();
const Discord = require('discord.js');
const tokenizer = require('./tokenizer/tokenizer.js');
const commands = require('./commands');

const pantryBot = new Discord.Client();

pantryBot.on('ready', () => {
  console.log('Anyone down for ET?');
  console.log(
    `${pantryBot.user.username} currently cooking on ${pantryBot.guilds.size} servers`
  );
  console.log(new Date());
});

pantryBot.on('message', message => {
  const tokens = tokenizer.tokens(message.content);
  const numTokens = tokenizer.getTokensLen(tokens);
  if (numTokens > 0) {
    const firstToken = tokenizer.getToken(0, tokens);
    const isCmdDelimiter = tokenizer.isDelimiter(firstToken);
    const isCmd = tokenizer.isCmd(firstToken);
    if (isCmdDelimiter) {
      if (isCmd) {
        const cmdToken = tokenizer.getCmd(firstToken);
        const argTokens = numTokens >= 2 ? tokenizer.getArgTokens(tokens) : [];
        commands.woe.getMyTeam(cmdToken, argTokens, message);
        commands.et.getET(cmdToken, argTokens, message);
        commands.events.whenIs(cmdToken, argTokens, message);
        commands.roles.setRole(cmdToken, argTokens, message);
        commands.roles.unsetRole(cmdToken, argTokens, message);
        commands.roles.setClass(cmdToken, argTokens, message);
        commands.roles.unsetClass(cmdToken, argTokens, message);
        commands.roles.setTimezone(cmdToken, argTokens, message);
        commands.roles.unsetTimezone(cmdToken, argTokens, message);
        commands.eggs.cellar(cmdToken, argTokens, message);
        commands.help.help(cmdToken, argTokens, message);
      } else {
        message.reply(
          "I'm not sure I know that command, ask me for a list of commands by typing ```$help```"
        );
      }
    }
  }
});
pantryBot.login(process.env.BOT_TOKEN);
