const help = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'help') {
    message.reply(
      '```👋🏼Hello! 🌿PantryBot here!\nHere are some helpful commands\n\nthey all start with the "$" symbol\n\n$help\n$whenis woe\n```'
    );
  }
};

module.exports = { help: help };
