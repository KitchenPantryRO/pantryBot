/**
 *
 * @param {string} cmd
 * @param {string []} argTokens
 * @param {Discord message OBJECT} message
 */
const cellar = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'suz') {
    message.reply('Did you mean Queen of the Alts?');
  } else if (cmdToken === 'marmalade') {
    message.reply(
      'Did you mean, ```Marmalade Milktea of the House Fox, First of Her Name, the Unburnt, Queen of the Pantry and of the First Ragnarokers, Archbishop of the Great land of Juno, Breaker of Lightning Chains, and Mother of Dragons```'
    );
  }
};

module.exports = { cellar: cellar };
