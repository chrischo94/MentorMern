const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mentorMern");




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

