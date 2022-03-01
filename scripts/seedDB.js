const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mentorMern"
);

const mentorSeed = [
  {
    nameM: "Simon Kim",
    location: "Online",
    date: new Date(Date.now())
  },
  {
    nameM: "James Kim",
    location: "In-person",
    date: new Date(Date.now())
  },
  {
    nameM: "Jenny Hahn",
    location: "In-Person",
    date: new Date(Date.now())
  },
  {
    nameM: "Khloe Pang",
    location: "Both",
    date: new Date(Date.now())
  },
];

db.Mentor
  .remove({})
  .then(() => db.Mentor.collection.insertMany(mentorSeed))
  .then(data => {
    console.log("Mentors inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
