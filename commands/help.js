const Discord = require('discord.js');
const help = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'help') {
    const embed = new Discord.RichEmbed()
      .setTitle('🌿PantryBot Menu')
      .setDescription(
        "Below you'll find a list of commands, their descriptions and examples.\nWe're always open to feedback + suggestions!\nPost your questions/suggestions in #pantryBot channel"
      )
      .addField(
        'COMMAND: ```$help```',
        '👀 Description: This is the $help command\n🐱 Supported options: none\n🐚 Example:\n```$help```\n\n '
      )
      .addField(
        'COMMAND: ```$et```',
        "👀 Description: Shows MVP bosses for all ET floors.Use the arrow reacts to toggle between channels and the trashbin react to delete the message as soon as you're done\n🐱 Supported options: none\n🐚 Example:\n```$et```"
      )
      .addField(
        'COMMAND: ```$whenis [EVENT]```',
        '👀 Description: Provides time of [EVENT]\n🐱 Supported [EVENTS]: woe\n🐚 Example:\n```$whenis woe```'
      )
      .addField(
        'COMMAND: ```$set @username#0123 role [ROLE]```',
        '👀 Description: This command sets your role on discord\n🐱 Supported [ROLE]: shield,sword,heals\n🐚 Example:\n```$set @username#0123 role sword```'
      )
      .addField(
        'COMMAND: ```$set @username#0123 class [CLASS]```',
        '👀 Description:This command sets your class on discord\n🐱 Supported [CLASS]:\nAcolyte,Archer,Mage,Swordsman,Thief or Merchant\n🐚 Example:\n```$set @username#0123 class swordsman```'
      )
      .setColor(0x00ae86)
      .setFooter('Powered by 🦋Technology')
      .setTimestamp();
    message.channel.send({ embed });
  }
};

module.exports = { help: help };
