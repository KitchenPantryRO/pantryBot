const Discord = require('discord.js');
/**
 *
 * @param {string} cmd
 * @param {string []} argTokens
 * @param {Discord message obj} message
 */
const test1 = (cmd, argTokens, message) => {
  // $test1
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'test1' && argTokens.length === 0) {
    message.reply('Test with one command successful');
  }
};

/**
 *
 * @param {string} cmd
 * @param {string []} argTokens
 * @param {Discord message object} message
 */
const test2 = (cmd, argTokens, message) => {
  // $test2 three
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'test2' && argTokens.length === 1) {
    const event = argTokens[0].toLowerCase();
    if (event === 'three') {
      message.reply('```test2 three```');
      // $test2 four
    } else if (event === 'four') {
      message.reply('```test2 four```');
    } else {
      message.reply('test2 NOT A COMMAND');
    }
  }
};
/**
 *
 * @param {string} cmd
 * @param {string []} argTokens
 * @param {Discord message object} message
 */
const test3 = (cmd, argTokens, message) => {
  // $test3 one two
  const cmdToken = cmd.toLowerCase();
  //extracts the subcommand 'one'
  const subCommand = argTokens.length >= 2 ? argTokens[0].toLowerCase() : '';
  if (cmdToken === 'test3' && argTokens.length >= 2 && subCommand === 'one') {
    //extracts sub command arguments 'two'
    const subCommandArgs = argTokens[1].toLowerCase();
    if (subCommandArgs === 'two') {
      message.reply(`Testing, One, Two`);
      // $test3 one three
    } else if (subCommandArgs === 'three') {
      message.reply(`Testing, One, three`);
    } else {
      message.reply(`Testing, One, OOFF`);
    }
  }
};
const test4 = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'test4' && argTokens.length === 0) {
    const embed = new Discord.RichEmbed()
      .setTitle('🌿PantryBot Test4 Menu')
      .setDescription('This is where you put your description')
      .addField(
        'This is a field -- discord ***markup*** **language** *works*',
        'Here you put the contents'
      )
      .setColor(0x00ae86)
      .setFooter('Powered by 🦋Technology')
      .setTimestamp();
    message.channel.send({ embed });
  }
};

module.exports = { test1: test1, test2: test2, test3: test3, test4: test4 };
