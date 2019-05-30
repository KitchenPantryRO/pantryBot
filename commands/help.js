const help = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'help') {
    message.reply(
      '```👋🏼Hello! 🌿PantryBot here!\nHere are some helpful commands\nThey all start with the "$" symbol\n\n$help\n$whenis woe\n\n⚔️To set your Role\nYou may choose from: Shield, Sword, Heals\n$set @username role shield\n$unset @username role shield\n\n🍳To set your class\nChose from Acolyte,Archer,Mage,Swordsman,Thief and Merchant\n$set @username class mage\n$unset @username class shield\n```'
    );
  }
};

module.exports = { help: help };
