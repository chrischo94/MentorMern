const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  nameM: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now}
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
