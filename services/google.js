require('dotenv').config();
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./client_secret');

//@type: string, NAME: discordName
const getUsername = async discordName => {
  const DISCORD_NAME = discordName.trim().toLowerCase();
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const SHEET_INDEX_DISCORD = 3;
  const sheetDiscord = info.worksheets[SHEET_INDEX_DISCORD];
  var IN_GAME_NAME = '';
  const rowsUsers = await promisify(sheetDiscord.getRows)({
    offset: 1
  });
  rowsUsers.forEach(row => {
    let discordName = row.discord.trim().toLowerCase();
    if (discordName === DISCORD_NAME) {
      let inGameUserName = row.rom.trim().toLowerCase();
      IN_GAME_NAME = inGameUserName;
    }
  });
  return IN_GAME_NAME;
};

//@type: None, name: none
const getTeams = async () => {
  //sanitize input
  var TEAMS = {};
  const WHITE_LST = ['_xml', 'id', 'app:edited', '_links', 'save', 'del'];
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const SHEET_INDEX_TEAMS = 2;
  const sheetTeams = info.worksheets[SHEET_INDEX_TEAMS];
  const rowsTeams = await promisify(sheetTeams.getRows)({
    offset: 1
  });
  const FIRST_ROW = rowsTeams.shift();
  WHITE_LST.forEach(delKey => {
    delete FIRST_ROW[`${delKey}`];
  });
  const TEAM_NAMES = Object.keys(FIRST_ROW);
  const TEAM_DESCRIPTIONS = Object.values(FIRST_ROW);
  for (let index = 1; index < TEAM_NAMES.length; index++) {
    TEAMS[`${TEAM_NAMES[index]}`] = [`${TEAM_DESCRIPTIONS[index]}`];
  }
  rowsTeams.forEach(row => {
    WHITE_LST.forEach(delKey => {
      delete row[`${delKey}`];
    });
    let rowKeys = Object.keys(row);
    let rowValues = Object.values(row);
    for (let index = 1; index < rowKeys.length; index++) {
      let key = rowKeys[index];
      let preVal = TEAMS[`${key}`];
      if (preVal !== undefined) {
        preVal.push(rowValues[index].trim().toLowerCase());
        TEAMS[`${key}`] = preVal;
      }
    }
  });
  return TEAMS;
};

//@type: string, name:IN_GAME_NAME
//@type: string, name: NAME:TEAM_NAMES
//@type: string list, name: DESC_MEMBERS
const getTeam = (inGameName, teamNames, desMembers) => {
  const IN_GAME_NAME = inGameName.trim().toLowerCase();
  for (let index = 0; index < teamNames.length; index++) {
    if (desMembers[index].includes(IN_GAME_NAME)) {
      let retTeam = [`${teamNames[index]}`];
      desMembers[index].forEach(item => {
        retTeam.push(item);
      });
      return retTeam;
    }
  }
  return ['NONE'];
};

module.exports = {
  getUsername: getUsername,
  getTeams: getTeams,
  getTeam: getTeam
};
