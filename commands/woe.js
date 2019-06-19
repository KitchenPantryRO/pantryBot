const Discord = require('discord.js');
const GOOGLE = require('../services/google');

/**
 *
 * @param {string} cmd
 * @param {array of strings} argTokens
 * @param {Discord Message Obj} message
 */
const getMyTeam = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const roleCommand = argTokens.length > 0 ? argTokens[0].toLowerCase() : '';
  if (cmdToken === 'woe' && argTokens.length >= 1 && roleCommand === 'myteam') {
    const { tag } = message.author;
    const IN_GAME_NAME = await GOOGLE.getUsername(tag);
    const TEAM_ROSTER = await GOOGLE.getTeams();
    const TEAM_NAMES = Object.keys(TEAM_ROSTER);
    const DESC_MEMBERS = Object.values(TEAM_ROSTER);
    const team = GOOGLE.getTeam(IN_GAME_NAME, TEAM_NAMES, DESC_MEMBERS);
    const teamSpec = await GOOGLE.getClassAndBuilds(team);
    if (team.length > 1 && teamSpec.length > 1) {
      const embed = new Discord.RichEmbed()
        .setTitle(`${team[0]}`)
        .addField('Team Objective', `${team[1]}`)
        .setColor(0x00ae86)
        .setFooter('Powered by 🦋Technology')
        .setTimestamp();

      for (let index = 0; index < teamSpec.length; index++) {
        embed.addField(
          'Member',
          `Name:${teamSpec[index][0]}\nClass: ${teamSpec[index][1]}\nBuild: ${
            teamSpec[index][2]
          }`
        );
      }
      message.channel.send({ embed });
    } else {
      message.reply(
        "Hello! Either you're not on a team for WoE or your @username for discord is not on the list"
      );
    }
  }
};

const getAttendance = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const roleCommand = argTokens.length > 0 ? argTokens[0].toLowerCase() : '';
  if (cmdToken === 'woe' && argTokens.length >= 1 && roleCommand === 'attendance') {
    const { tag } = message.author;
    const IN_GAME_NAME = await GOOGLE.getUsername(tag);
    const attendance = await GOOGLE.getAttendance(IN_GAME_NAME);
    if (attendance.length > 1) {
      if (attendance[1].toLowerCase() === 'absent') {
        const embed = new Discord.RichEmbed()
          .setTitle(`${attendance[0] !== '' ? attendance[0].toUpperCase() : 'none'}`)
          .addField('Attendance', `${attendance[1] !== '' ? attendance[1] : 'none'}`)
          .setColor(0x00ae86)
          .setFooter('Powered by 🦋Technology')
          .setTimestamp();
        message.channel.send({ embed });
      } else {
        const embed = new Discord.RichEmbed()
          .setTitle(`${attendance[0] !== '' ? attendance[0].toUpperCase() : 'none'}`)
          .addField('Attendance', `${attendance[1] !== '' ? attendance[1] : 'none'}`)
          .addField('Class', `${attendance[2] !== '' ? attendance[2] : 'none'}`)
          .addField('Build', `${attendance[3] !== '' ? attendance[3] : 'none'}`)
          .setColor(0x00ae86)
          .setFooter('Powered by 🦋Technology')
          .setTimestamp();
        message.channel.send({ embed });
      }
    } else {
      message.reply(
        "Hello! I currently can't provide you information for your attendance, please make sure to fill out the attendance before using this command"
      );
    }
  }
};
/**
 * setAttendance supports the following commands
 * $woe present class [claas] build [build]
 * $woe absent
 * $woe standby class [class] build [build]
 * @param {string} cmd
 * @param {string []} argTokens
 * @param {Discord message object} message
 */
const setAttendance = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const attendanceCommand = argTokens.length > 0 ? argTokens[0].toLowerCase() : '';
  if (
    cmdToken === 'woe' &&
    argTokens.length >= 1 &&
    (attendanceCommand === 'present' || attendanceCommand === 'standby')
  ) {
    const classCommand = argTokens.length > 1 ? argTokens[1].toLowerCase() : '';
    var classDescription = [];
    var buildDescription = [];
    if (classCommand === 'class') {
      for (let index = 2; index < argTokens.length; index++) {
        let classDesc = argTokens[index].trim().toLowerCase();
        if (classDesc === 'build') {
          for (let currIndex = index + 1; currIndex < argTokens.length; currIndex++) {
            let buildDesc = argTokens[currIndex];
            buildDescription.push(buildDesc);
          }
          break;
        }
        classDescription.push(classDesc);
      }
      if (classDescription.length > 0 && buildDescription.length > 0) {
        const CLASS_DESCRIPTION = classDescription.join(' ');
        const BUILD_DESCRIPTION = buildDescription.join(' ');
        const { tag } = message.author;
        const IN_GAME_NAME = await GOOGLE.getUsername(tag);
        const GUILD_ATTENDANCE = await GOOGLE.setAttendance(
          IN_GAME_NAME,
          attendanceCommand,
          CLASS_DESCRIPTION,
          BUILD_DESCRIPTION
        );
        if (GUILD_ATTENDANCE) {
          message.reply(
            `Hi ${IN_GAME_NAME}, thank you for submitting your attendance! Your attendance for WoE is set! You are currently marked as ${attendanceCommand}, you can check your attendance my typing $woe attendance`
          );
        } else {
          message.reply(
            `Hi ${IN_GAME_NAME}, I wasn't able to set up your attendance, could you please ping someone in charge of WoE?`
          );
        }
      } else {
        message.reply(
          "Hello! I wasn't able to set up your attendance, make sure your command has the following format ```COMMAND: $woe present class [YOUR CLASS] build [YOUR BUILD]\n\nExample: $woe present class Rune Knight build agi-crit```"
        );
      }
    }
  } else if (
    cmdToken === 'woe' &&
    argTokens.length >= 1 &&
    attendanceCommand === 'absent'
  ) {
    const CLASS_DESCRIPTION = '';
    const BUILD_DESCRIPTION = '';
    const { tag } = message.author;
    const IN_GAME_NAME = await GOOGLE.getUsername(tag);
    const GUILD_ATTENDANCE = await GOOGLE.setAttendance(
      IN_GAME_NAME,
      attendanceCommand,
      CLASS_DESCRIPTION,
      BUILD_DESCRIPTION
    );
    if (GUILD_ATTENDANCE) {
      message.reply(
        `Hi ${IN_GAME_NAME}, thank you for for submitting your attendance! I'm sad you'll be missing WoE! But hope you get to join us next time!`
      );
    } else {
      message.reply(
        `Hi ${IN_GAME_NAME}, I wasn't able to set up your attendance on the sheet, could you please ping someone in charge of WoE?`
      );
    }
  }
};
module.exports = {
  getMyTeam: getMyTeam,
  setAttendance: setAttendance,
  getAttendance: getAttendance
};
