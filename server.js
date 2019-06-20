const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Require routes
const users = require("./routes/api/users");
// const profiles = require("./routes/api/profiles");
// const resumes = require("./routes/api/resumes");
const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
//might throw error, if it does put in routes
app.use(bodyParser.json());
app.use(passport.initialize());

// DB Config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// API routes
app.use("/api/user", users);
// app.use("/api/profile", profiles);
// app.use("/api/resume", resumes);

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server is running on port ${port}`));
