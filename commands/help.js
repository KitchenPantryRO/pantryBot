const help = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'help') {
    message.reply(
      '```👋🏼Hello! 🌿PantryBot here!\nHere are some helpful commands\nThey all start with the "$" symbol\n\n$help\n$whenis woe\n\n🐲To set your Role\nYou may choose from: Shield, Sword, Heals\n$set @username role shield\n$unset @username role shield\n\n🍳To set your class\nChose from Acolyte,Archer,Mage,Swordsman,Thief or Merchant\n$set @username class mage\n$unset @username class mage\n\n🕰To set your Timezone\nYou may choose from: PST, EST, MST or CST\n$set @username thyme pst\n$unset @username thyme pst\n\n```'
    );
  }
};

module.exports = { help: help };
