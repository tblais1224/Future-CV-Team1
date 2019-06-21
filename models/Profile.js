const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    devRoles: [{
        role: {
            type: String
        }
    }],
    education: [{
        schoolName: {
            type: String,
            required: true
        },
        //bachelors, etc...
        diplomaAttained: {
            type: String,
            required: true
        },
        //computer science, etc...
        diplomaTitle: {
            type: String,
            required: true
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Profile = mongoose.model("profile", ProfileSchema)