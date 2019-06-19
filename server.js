const express = require("express")
const mongoose = require("mongoose")
const mongoURI = require("./config/keys").mongoURI
const passport = require("passport")
const bodyParser = require("body-parser")

const app = express()
 
//middleware
app.use(bodyParser.urlencoded({ extended: false }));
//if below line causes error move into routes with post forms
app.use(bodyParser.json)
//makes passport available in all routes
app.use(passport.initialize())


mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log("mongo atlas connected"))
    .catch((err) => console.log(err))


app.get("/test", (req, res) => res.send("HELLLOOOOO WORLD!!!"))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Server is running on port: " + PORT))