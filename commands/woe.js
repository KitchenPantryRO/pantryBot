const Discord = require('discord.js');
const GOOGLE = require('../services/google');

const getMyTeam = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const roleCommand = argTokens.length >= 0 ? argTokens[0].toLowerCase() : '';
  if (cmdToken === 'woe' && argTokens.length >= 1 && roleCommand === 'myteam') {
    const { tag } = message.author;
    const IN_GAME_NAME = await GOOGLE.getUsername(tag);
    const TEAM_ROSTER = await GOOGLE.getTeams();
    const TEAM_NAMES = Object.keys(TEAM_ROSTER);
    const DESC_MEMBERS = Object.values(TEAM_ROSTER);
    const team = GOOGLE.getTeam(IN_GAME_NAME, TEAM_NAMES, DESC_MEMBERS);
    if (team.length > 1) {
      const embed = new Discord.RichEmbed()
        .setTitle(`Team Name: ${team[0]}`)
        .addField('Team Objective', `${team[1]}`)
        .addField(
          'Team Members',
          `${team[2]}\n${team[3]}\n${team[4]}\n${team[5]}\n${team[6]}`
        )
        .setColor(0x00ae86)
        .setFooter('Powered by 🦋Technology')
        .setTimestamp();
      message.channel.send({ embed });
    } else {
      message.reply(
        "Hello! Either you're not on a team for WoE or your @username for discord is not on the list"
      );
    }
  } else {
    message.reply('The only commands I suppoort for WoE right now are $woe myteam');
  }
};
module.exports = {
  getMyTeam: getMyTeam
};
