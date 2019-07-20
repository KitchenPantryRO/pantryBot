/* Turns messsage from discord into an array of tokens */
exports.tokens = message => {
  tokens = message ? message.split(' ') : [];
  return tokens;
};

// Returns Nth position of token
exports.getToken = (position, tokens) => {
  return tokens[position];
};

// Returns String Command $help -> help
exports.getCmd = tokens => {
  return tokens.splice(1);
};

// Determines of the incoming message is a command
exports.isCmd = tokens => {
  const command = this.getCmd(tokens);
  switch (command) {
    case 'test':
      return true;
    case 'test1':
      return true;
    case 'test2':
      return true;
    case 'test3':
      return true;
    case 'test4':
      return true;
    case 'pp':
      return true;
    case 'mm':
      return true;
    case 'woe':
      return true;
    case 'help':
      return true;
    case 'et':
      return true;
    case 'whenis':
      return true;
    case 'set':
      return true;
    case 'unset':
      return true;
    case 'suz':
      return true;
    case 'marmalade':
      return true;
    default:
      return false;
  }
};

// Determines of the incoming message contains the $ delimiter
exports.isDelimiter = tokens => {
  const cmdToken = this.getToken(0, tokens);
  return cmdToken.startsWith('$');
};

// Returns command without $ delimiter
exports.getCmd = token => {
  const cmdToken = token.substring(1);
  return cmdToken;
};

// Returns argumment tokens of command
exports.getArgTokens = tokens => {
  let argTokens = [];
  for (let index = 1; index < tokens.length; index++) {
    argTokens.push(tokens[index]);
  }
  return argTokens;
};

// Returns length of tokens
exports.getTokensLen = tokens => {
  return tokens.length;
};
