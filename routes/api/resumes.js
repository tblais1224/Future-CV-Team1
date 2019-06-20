const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);


const validateResumeInput = require("../../validations/resume");

const Resume = require("../../models/Resume");


// @route   POST /api/resume
// @desc   Create a resume
// @access   private
router.post(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const {
            errors,
            isValid
        } = validateResumeInput(req.body);
        //check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const resumeFields = {}
        resumeFields.user = req.user.id

        //if field is in body set it to profileFields
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.company) profileFields.company = req.body.company;
        if (req.body.website) profileFields.website = req.body.website;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;
        if (req.body.status) profileFields.status = req.body.status;


        const newResume = new Resume({
            user: req.user.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            cellphone: req.body.cellphone,
            email: req.body.email,
            githubURL: req.body.githubURL,
            linkedInURL: req.body.linkedInURL,
            twitterURL: req.body.twitterURL,
            personalWebsiteURL: req.body.personalWebsiteURL,
            aboutMe: req.body.aboutMe,
            devSkillsAcquiredVia: req.body.devSkillsAcquiredVia,
            jobExperience: req.body.jobExperience,
        });
        //save the post then return the post
        newResume.save().then(resume => res.json(resume));
    }
);

// @route   GET /api/resume
// @desc   get all resumes
// @access   Public
router.get("/", (req, res) => {
    //this finds resumes and sorts them by the most recent date
    Resume.find()
        .sort({
            date: -1
        })
        .then(resumes => res.json(resumes))
        .catch(err => res.status(404).json({
            error: "No resumes could be found!"
        }));
});

module.exports = router;