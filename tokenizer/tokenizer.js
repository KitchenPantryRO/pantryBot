/* Turns messsage from discord into an array of tokens */
exports.tokens = message => {
  tokens = message ? message.split(' ') : [];
  return tokens;
};

// Returns Nth position of token
exports.getToken = (position, tokens) => {
  return tokens[position];
};

// Determines of the incoming message is a command
exports.isCmd = tokens => {
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
