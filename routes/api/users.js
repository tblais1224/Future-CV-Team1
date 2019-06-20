const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const passport = require("passport")

//import validations
const validateRegisterInput = require("../../validations/register")
const validateLoginInput = require("../../validations/login")

//load mongo model
const User = require("../../models/User")


// @route  POST  /api/user
// @desc   Register user
// @access  Public
// data passed in the body
router.post("/register", (req, res) => {
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body)
    //check for validation errors
    if (!isValid) {
        return res.status(400).json(errors)
    }
    //add to mongo
    User.findOne({
        email: req.body.email
    }).then(user => {
        //return error if email exists
        if (user) {
            errors.email = "Email is already used for an account."
            return res.status(400).json(errors)
        } else {
            //create user
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                type: req.body.type
            })
            //generate password salt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err))
                })
            })
        }
    })
})

// @route  POST  /api/user
// @desc   Register user
// @access  Public
router.post("/login", (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email
    const password = req.body.password

    User.findOne({
        email
    }).then(user => {
        if (!user) {
            errors.email = "User could not be found! Try a different email."
            return res.status(404).json(errors)
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user._id,
                    name: user.name
                }
                //create jwt token
                jwt.sign(
                    payload,
                    keys.secret,
                    //one hour token auth time 
                    {expiresIn: 3600},
                    //callback
                    (err, token) => res.json({success: true, token: "Bearer " + token})
                )
            } else {
                errors.password = "Password is incorrect!"
                return res.status(400).json(errors)
            }
        })
    })
})

module.exports = router