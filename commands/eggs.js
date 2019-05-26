const cellar = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'suz') {
    message.reply('Did you mean Queen of the Alts?');
  }
};

module.exports = { cellar: cellar };
