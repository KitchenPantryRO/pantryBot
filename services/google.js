require('dotenv').config();
const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./client_secret');

/**
 *
 * @param {string} discordName
 */
const getUsername = async discordName => {
  const DISCORD_SHEET_ID = process.env.DISCORD_SHEET_ID;
  const DISCORD_NAME = discordName.trim().toLowerCase();
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const worksheets = info.worksheets;
  var sheetDiscord = null;
  for (let index = 0; index < worksheets.length; index++) {
    let tempSheet = info.worksheets[index];
    if (tempSheet['id'] === DISCORD_SHEET_ID) {
      sheetDiscord = tempSheet;
    }
  }
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

/**
 *  No params
 */
const getTeams = async () => {
  //sanitize input
  var TEAMS = {};
  const TEAMS_SHEET_ID = process.env.TEAMS_SHEET_ID;
  const WHITE_LST = ['_xml', 'id', 'app:edited', '_links', 'save', 'del'];
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const worksheets = info.worksheets;
  var sheetTeams = null;
  for (let index = 0; index < worksheets.length; index++) {
    let tempSheet = info.worksheets[index];
    if (tempSheet['id'] === TEAMS_SHEET_ID) {
      sheetTeams = tempSheet;
    }
  }

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

/**
 *
 * @param {string} inGameName
 * @param {string} attendanceCommand
 * @param {string} classDescription
 * @param {string} buildDescription
 */
const setAttendance = async (
  inGameName,
  attendanceCommand,
  classDescription,
  buildDescription
) => {
  //sanitize input
  const IN_GAME_NAME = inGameName.trim().toLowerCase();
  const ATTENDANCE_SHEET_ID = process.env.ATTENDANCE_SHEET_ID;
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const worksheets = info.worksheets;
  var sheetAttendees = null;
  for (let index = 0; index < worksheets.length; index++) {
    let tempSheet = info.worksheets[index];
    if (tempSheet['id'] === ATTENDANCE_SHEET_ID) {
      sheetAttendees = tempSheet;
    }
  }
  const rowsAttendance = await promisify(sheetAttendees.getRows)({
    query: `name = ${IN_GAME_NAME}`
  });
  if (rowsAttendance.length > 0) {
    if (attendanceCommand === 'present' || attendanceCommand === 'standby') {
      rowsAttendance.forEach(row => {
        row.name = IN_GAME_NAME;
        row.class = classDescription;
        row.build = buildDescription;
        row.attendance = attendanceCommand;
        row.save();
      });
      return true;
    } else if (attendanceCommand === 'absent') {
      rowsAttendance.forEach(row => {
        row.name = IN_GAME_NAME;
        row.class = '';
        row.build = '';
        row.attendance = attendanceCommand;
        row.save();
      });
      return true;
    }
  } else {
    if (attendanceCommand === 'present' || attendanceCommand === 'standby') {
      const row = {
        name: IN_GAME_NAME,
        class: classDescription,
        build: buildDescription,
        attendance: attendanceCommand
      };
      await promisify(sheetAttendees.addRow)(row);
      return true;
    } else if (attendanceCommand === 'absent') {
      const row = {
        name: IN_GAME_NAME,
        class: '',
        build: '',
        attendance: attendanceCommand
      };
      await promisify(sheetAttendees.addRow)(row);
      return true;
    }
  }
  return false;
};

const getAttendance = async inGameName => {
  //sanitize input
  const IN_GAME_NAME = inGameName.trim().toLowerCase();
  const ATTENDANCE_SHEET_ID = process.env.ATTENDANCE_SHEET_ID;
  const doc = new GoogleSpreadsheet(`${process.env.KP_SHEET_ID}`);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const worksheets = info.worksheets;
  var sheetAttendees = null;
  for (let index = 0; index < worksheets.length; index++) {
    let tempSheet = info.worksheets[index];
    if (tempSheet['id'] === ATTENDANCE_SHEET_ID) {
      sheetAttendees = tempSheet;
    }
  }
  const rowsAttendance = await promisify(sheetAttendees.getRows)({
    query: `name = ${IN_GAME_NAME}`
  });
  var attendanceInfo = [];
  if (rowsAttendance.length > 0) {
    rowsAttendance.forEach(row => {
      attendanceInfo.push(row.name);
      attendanceInfo.push(row.attendance);
      attendanceInfo.push(row.class);
      attendanceInfo.push(row.build);
    });
    return attendanceInfo;
  } else {
    attendanceInfo.push('');
    return attendanceInfo;
  }
};

//@type: string, name:IN_GAME_NAME
//@type: string, name: NAME:TEAM_NAMES
//@type: string list, name: DESC_MEMBERS
/**
 *
 * @param {string} inGameName
 * @param {string} teamNames
 * @param {string []} desMembers
 */
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
  getTeam: getTeam,
  setAttendance: setAttendance,
  getAttendance: getAttendance
};
