const setCategory = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'set' && argTokens.length >= 3) {
    const roleCommand = argTokens[1].toLowerCase();
    const roleCommandArgs = argTokens[2];
    if (roleCommand === 'role') {
      if (roleCommandArgs === 'shield') {
        let shieldRole = message.guild.roles.find(r => r.name === 'Shield');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(shieldRole).catch(console.error);
        message.reply(`set ${guildMember} to shield`);
      } else if (roleCommandArgs === 'heals') {
        let healsRole = message.guild.roles.find(r => r.name === 'Heals');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(healsRole).catch(console.error);
        message.reply(`set ${guildMember} to Heals`);
      } else if (roleCommandArgs === 'sword') {
        let swordRole = message.guild.roles.find(r => r.name === 'Sword');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(swordRole).catch(console.error);
        message.reply(`set ${guildMember} to Sword`);
      }
    }
  }
};

const unsetCategory = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'unset' && argTokens.length >= 3) {
    const roleCommand = argTokens[1].toLowerCase();
    const roleCommandArgs = argTokens[2];
    if (roleCommand === 'role') {
      if (roleCommandArgs === 'shield') {
        let shieldRole = message.guild.roles.find(r => r.name === 'Shield');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(shieldRole).catch(console.error);
        message.reply(`unset ${guildMember} from Shield`);
      } else if (roleCommandArgs === 'heals') {
        let healsRole = message.guild.roles.find(r => r.name === 'Heals');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(healsRole).catch(console.error);
        message.reply(`unset ${guildMember} from Heals`);
      } else if (roleCommandArgs === 'sword') {
        let swordRole = message.guild.roles.find(r => r.name === 'Sword');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(swordRole).catch(console.error);
        message.reply(`unset ${guildMember} from Sword`);
      }
    }
  }
};

const setClass = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'set' && argTokens.length >= 3) {
    const classCommand = argTokens[1].toLowerCase();
    const classCommandArgs = argTokens[2];
    if (classCommand === 'class') {
      if (classCommandArgs === 'acolyte') {
        let acolyteClass = message.guild.roles.find(r => r.name === 'Acolyte');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(acolyteClass).catch(console.error);
        message.reply(`set ${guildMember} to Acolyte`);
      } else if (classCommandArgs === 'archer') {
        let archerClass = message.guild.roles.find(r => r.name === 'Archer');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(archerClass).catch(console.error);
        message.reply(`set ${guildMember} to Archer`);
      } else if (classCommandArgs === 'mage') {
        let mageClass = message.guild.roles.find(r => r.name === 'Mage');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(mageClass).catch(console.error);
        message.reply(`set ${guildMember} to Mage`);
      } else if (classCommandArgs === 'merchant') {
        let merchantClass = message.guild.roles.find(r => r.name === 'Merchant');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(merchantClass).catch(console.error);
        message.reply(`set ${guildMember} to Merchant`);
      } else if (classCommandArgs === 'swordsman') {
        let swordClass = message.guild.roles.find(r => r.name === 'Swordsman');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(swordClass).catch(console.error);
        message.reply(`set ${guildMember} to Swordsman`);
      } else if (classCommandArgs === 'thief') {
        let thiefRole = message.guild.roles.find(r => r.name === 'Thief');
        let guildMember = message.mentions.members.first();
        guildMember.addRole(thiefRole).catch(console.error);
        message.reply(`set ${guildMember} to Thief`);
      }
    }
  }
};

const unsetClass = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'unset' && argTokens.length >= 3) {
    const classCommand = argTokens[1].toLowerCase();
    const classCommandArgs = argTokens[2];
    if (classCommand === 'class') {
      if (classCommandArgs === 'acolyte') {
        let acolyteClass = message.guild.roles.find(r => r.name === 'Acolyte');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(acolyteClass).catch(console.error);
        message.reply(`unset ${guildMember} to Acolyte`);
      } else if (classCommandArgs === 'archer') {
        let archerClass = message.guild.roles.find(r => r.name === 'Archer');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(archerClass).catch(console.error);
        message.reply(`unset ${guildMember} to Archer`);
      } else if (classCommandArgs === 'mage') {
        let mageClass = message.guild.roles.find(r => r.name === 'Mage');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(mageClass).catch(console.error);
        message.reply(`unset ${guildMember} to Mage`);
      } else if (classCommandArgs === 'merchant') {
        let merchantClass = message.guild.roles.find(r => r.name === 'Merchant');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(merchantClass).catch(console.error);
        message.reply(`unset ${guildMember} to Merchant`);
      } else if (classCommandArgs === 'swordsman') {
        let swordClass = message.guild.roles.find(r => r.name === 'Swordsman');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(swordClass).catch(console.error);
        message.reply(`unset ${guildMember} to Swordsman`);
      } else if (classCommandArgs === 'thief') {
        let thiefRole = message.guild.roles.find(r => r.name === 'Thief');
        let guildMember = message.mentions.members.first();
        guildMember.removeRole(thiefRole).catch(console.error);
        message.reply(`unset ${guildMember} to Thief`);
      }
    }
  }
};

module.exports = {
  setCategory: setCategory,
  unsetCategory: unsetCategory,
  setClass: setClass,
  unsetClass: unsetClass
};

// $set @username color shield
// $set @username class Swordsman
// $set @username job Lord Knight
// $set @username pronouns He/Him

// $edit @username color shield
// $edit @username class Swordsman
// $edit @username job Hunter

// $unset @username color shield
// $unset @username class Swordsman
// $unset @username job Lord Knight
// $unset @username pronouns he/him
