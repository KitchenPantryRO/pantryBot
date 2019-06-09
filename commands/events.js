const whenIs = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'whenis' && argTokens.length === 1) {
    const event = argTokens[0].toLowerCase();
    if (event === 'woe') {
      message.reply(
        '```WoE happens every Thursday and Sunday at the following times\n\n8PM Pacific Time\n8PM Arizona Time\n9PM Mountain Time\n10PM Central Time\n11PM Eastern Time```'
      );
    } else if (event === 'ufo') {
      message.reply(
        '```Big Cat Invasion happens every Saturday the following times\n\n7PM Pacific Time\n7PM Arizona Time\n8PM Mountain Time\n9PM Central Time\n10PM Eastern Time```'
      );
    } else if (event === 'mvp') {
      message.reply(
        '```MVP Battle happens every Friday at the following times\n\n7PM Pacific Time\n7PM Arizona Time\n8PM Mountain Time\n9PM Central Time\n10PM Eastern Time```'
      );
    } else {
      message.reply(
        "I'll have to get back to you on that 🔮in the mean time you can choose between `woe`, `ufo` or `mvp` to find out what time it starts ```example: $whenis woe```"
      );
    }
  } else if (cmdToken === 'whenis' && argTokens.length != 1) {
    message.reply(
      'Hello! Choose between `woe`, `ufo` or `mvp` to find out what time it starts```example: $whenis woe```'
    );
  }
};

module.exports = { whenIs: whenIs };
