require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${
    process.env.MONGODB_PASSWORD
  }@pantry0-pu4k6.mongodb.net/${
    process.env.MONGODB_DATABASE
  }?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
const Point = require('../Models/Point');

/**
 *
 * @param {string} cmd
 * @param {array of strings} argTokens
 * @param {Discord Message} message
 */
const points = async (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  var msg = message;
  if (cmdToken === 'pp') {
    const res = message.mentions.members.first();
    var username = res ? res.user.username : res;
    if (username) {
      Point.findOne({ username: username }, (err, point) => {
        if (err) {
          console.log(err);
        }
        if (point) {
          const { points } = point;
          let updatePoints = points + 1;
          let pointProps = { points: updatePoints };
          Point.findOneAndUpdate({ username: username }, pointProps).then(() =>
            Point.findOne({ username: username }).then(point => {
              const { points } = point;
              if (points === 1) {
                msg.reply(`${username} now has 🌿${points} PantryPoint!`);
              } else {
                msg.reply(`${username} now has 🌿${points} PantryPoints!`);
              }
            })
          );
        } else {
          const newPoint = new Point({ username: username, points: 1 });
          newPoint.save().then(() => {
            Point.findOne({ username: username }).then(point => {
              const { points } = point;
              if (points === 1) {
                msg.reply(`${username} now has 🌿${points} PantryPoint!`);
              } else {
                msg.reply(`${username} now has 🌿${points} PantryPoints!`);
              }
            });
          });
        }
      });
    } else {
      msg.reply(
        '🌿PantryPoints are for our friends, pick a friend you want to give a shoutout to by typing ```$pp @username```'
      );
    }
  } else if (cmdToken === 'mm' && argTokens.length === 1) {
    const res = message.mentions.members.first();
    var username = res ? res.user.username : res;
    if (username) {
      Point.findOne({ username: username }, (err, point) => {
        if (err) {
          console.log(err);
        }
        if (point) {
          const { points } = point;
          let updatePoints = points - 1;
          let pointProps = { points: updatePoints };
          Point.findOneAndUpdate({ username: username }, pointProps).then(() =>
            Point.findOne({ username: username }).then(point => {
              const { points } = point;
              if (points === 1) {
                msg.reply(`${username} now has 🌿${points} PantryPoint!`);
              } else {
                msg.reply(`${username} now has 🌿${points} PantryPoints!`);
              }
            })
          );
        } else {
          const newPoint = new Point({ username: username, points: -1 });
          newPoint.save().then(() => {
            Point.findOne({ username: username }).then(point => {
              const { points } = point;
              msg.reply(`${username} now has 🌿${points} PantryPoints!`);
            });
          });
        }
      });
    } else {
      msg.reply(
        '🌿PantryPoints are for our friends, but if you wanna take some away type ```$mm @username```'
      );
    }
  }
};

module.exports = { points: points };
