const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: false,
      default: 0
    }
  },
  { versionKey: false }
);

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
