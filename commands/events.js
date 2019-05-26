const whenIs = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'whenis') {
    const event = argTokens[0].toLowerCase();
    if (event === 'woe') {
      message.reply(
        '```WoE happens every Thursday and Sunday at the following times\n\n8PM Pacific Time\n8PM Arizona Time\n9PM Mountain Time\n10PM Central Time\n11PM Eastern Time```'
      );
    }
  }
};

module.exports = { whenIs: whenIs };
