const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    type: {
        type: String,
        required: true
    },
    // implement a way to use company email if you are registering as a employer
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = User = mongoose.model("users", UserSchema)