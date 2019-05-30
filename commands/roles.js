const setRole = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const roleCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'set' && argTokens.length >= 3 && roleCommand === 'role') {
    const roleCommandArgs = argTokens[2].toLowerCase();
    if (roleCommandArgs === 'shield') {
      let shieldRole = message.guild.roles.find(r => r.name === 'Shield');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(shieldRole).catch(console.error);
      message.reply(`Added ${guildMember} to the Shield role`);
    } else if (roleCommandArgs === 'heals') {
      let healsRole = message.guild.roles.find(r => r.name === 'Heals');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(healsRole).catch(console.error);
      message.reply(`Added ${guildMember} to the Heals role`);
    } else if (roleCommandArgs === 'sword') {
      let swordRole = message.guild.roles.find(r => r.name === 'Sword');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(swordRole).catch(console.error);
      message.reply(`Added ${guildMember} to the Sword role`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(`${guildMember} I\'m not sure I can give that to you...`);
    }
  }
};

const unsetRole = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const roleCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'unset' && argTokens.length >= 3 && roleCommand === 'role') {
    const roleCommandArgs = argTokens[2].toLowerCase();
    if (roleCommandArgs === 'shield') {
      let shieldRole = message.guild.roles.find(r => r.name === 'Shield');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(shieldRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the Shield role`);
    } else if (roleCommandArgs === 'heals') {
      let healsRole = message.guild.roles.find(r => r.name === 'Heals');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(healsRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the Heals role`);
    } else if (roleCommandArgs === 'sword') {
      let swordRole = message.guild.roles.find(r => r.name === 'Sword');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(swordRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the Sword role`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(`${guildMember} you are already beautiful the way you are`);
    }
  }
};

const setClass = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const classCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'set' && argTokens.length >= 3 && classCommand === 'class') {
    const classCommandArgs = argTokens[2].toLowerCase();
    if (classCommandArgs === 'acolyte') {
      let acolyteClass = message.guild.roles.find(r => r.name === 'Acolyte');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(acolyteClass).catch(console.error);
      message.reply(`Added ${guildMember} to the Acolyte class`);
    } else if (classCommandArgs === 'archer') {
      let archerClass = message.guild.roles.find(r => r.name === 'Archer');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(archerClass).catch(console.error);
      message.reply(`Added ${guildMember} to the Archer`);
    } else if (classCommandArgs === 'mage') {
      let mageClass = message.guild.roles.find(r => r.name === 'Mage');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(mageClass).catch(console.error);
      message.reply(`Added ${guildMember} to the Mage class`);
    } else if (classCommandArgs === 'merchant') {
      let merchantClass = message.guild.roles.find(r => r.name === 'Merchant');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(merchantClass).catch(console.error);
      message.reply(`Added ${guildMember} to the Merchant`);
    } else if (classCommandArgs === 'swordsman') {
      let swordClass = message.guild.roles.find(r => r.name === 'Swordsman');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(swordClass).catch(console.error);
      message.reply(`Added ${guildMember} to the Swordsman class`);
    } else if (classCommandArgs === 'thief') {
      let thiefRole = message.guild.roles.find(r => r.name === 'Thief');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(thiefRole).catch(console.error);
      message.reply(`Added ${guildMember} to the Thief class`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(
        `I'm sorry ${guildMember} I\'m afraid I can\'t do that, your role will come in due time ❤️`
      );
    }
  }
};

const unsetClass = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const classCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'unset' && argTokens.length >= 3 && classCommand === 'class') {
    const classCommandArgs = argTokens[2].toLowerCase();
    if (classCommandArgs === 'acolyte') {
      let acolyteClass = message.guild.roles.find(r => r.name === 'Acolyte');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(acolyteClass).catch(console.error);
      message.reply(`Removed ${guildMember} from the Acolyte class`);
    } else if (classCommandArgs === 'archer') {
      let archerClass = message.guild.roles.find(r => r.name === 'Archer');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(archerClass).catch(console.error);
      message.reply(`Removed ${guildMember} from the Archer class`);
    } else if (classCommandArgs === 'mage') {
      let mageClass = message.guild.roles.find(r => r.name === 'Mage');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(mageClass).catch(console.error);
      message.reply(`Removed ${guildMember} from the Mage class`);
    } else if (classCommandArgs === 'merchant') {
      let merchantClass = message.guild.roles.find(r => r.name === 'Merchant');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(merchantClass).catch(console.error);
      message.reply(`Removed ${guildMember} from the Merchant class`);
    } else if (classCommandArgs === 'swordsman') {
      let swordClass = message.guild.roles.find(r => r.name === 'Swordsman');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(swordClass).catch(console.error);
      message.reply(`Removed ${guildMember} from the Swordsman class`);
    } else if (classCommandArgs === 'thief') {
      let thiefRole = message.guild.roles.find(r => r.name === 'Thief');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(thiefRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the Thief class`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(`I'm sorry ${guildMember} I\'m afraid I can\'t do that`);
    }
  }
};
const setTimezone = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const timezoneCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'set' && argTokens.length >= 3 && timezoneCommand === 'thyme') {
    const timezoneCommandArgs = argTokens[2].toLowerCase();
    if (timezoneCommandArgs === 'pst') {
      let pstRole = message.guild.roles.find(r => r.name === 'PST');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(pstRole).catch(console.error);
      message.reply(`Added ${guildMember} to the PST timezone`);
    } else if (timezoneCommandArgs === 'mst') {
      let mstRole = message.guild.roles.find(r => r.name === 'MST');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(mstRole).catch(console.error);
      message.reply(`Added ${guildMember} to the MST timezone`);
    } else if (timezoneCommandArgs === 'cst') {
      let cstRole = message.guild.roles.find(r => r.name === 'CST');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(cstRole).catch(console.error);
      message.reply(`Added ${guildMember} to the CST timezone`);
    } else if (timezoneCommandArgs === 'est') {
      let estRole = message.guild.roles.find(r => r.name === 'EST');
      let guildMember = message.mentions.members.first();
      guildMember.addRole(estRole).catch(console.error);
      message.reply(`Added ${guildMember} to the EST timezone`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(`I'm sorry ${guildMember} I\'m afraid I can\'t do that`);
    }
  }
};

const unsetTimezone = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  const timezoneCommand = argTokens.length >= 3 ? argTokens[1].toLowerCase() : '';
  if (cmdToken === 'unset' && argTokens.length >= 3 && timezoneCommand === 'thyme') {
    const timezoneCommandArgs = argTokens[2].toLowerCase();
    if (timezoneCommandArgs === 'pst') {
      let pstRole = message.guild.roles.find(r => r.name === 'PST');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(pstRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the PST timezone`);
    } else if (timezoneCommandArgs === 'mst') {
      let mstRole = message.guild.roles.find(r => r.name === 'MST');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(mstRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the MST timezone`);
    } else if (timezoneCommandArgs === 'cst') {
      let cstRole = message.guild.roles.find(r => r.name === 'CST');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(cstRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the CST timezone`);
    } else if (timezoneCommandArgs === 'est') {
      let estRole = message.guild.roles.find(r => r.name === 'EST');
      let guildMember = message.mentions.members.first();
      guildMember.removeRole(estRole).catch(console.error);
      message.reply(`Removed ${guildMember} from the EST timezone`);
    } else {
      let guildMember = message.mentions.members.first();
      message.reply(
        `I'm sorry ${guildMember} I\'m afraid I can\'t do that, no one seems to live in that timezone`
      );
    }
  }
};

module.exports = {
  setRole: setRole,
  unsetRole: unsetRole,
  setClass: setClass,
  unsetClass: unsetClass,
  setTimezone: setTimezone,
  unsetTimezone: unsetTimezone
};
