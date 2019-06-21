const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);


const validateResumeInput = require("../../validations/resume");

const Resume = require("../../models/Resume");


// @route   POST /api/resume
// @desc   Create or edit a resume
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
        //if field is in body set it to resumeFields
        if (req.body.firstName) resumeFields.firstName = req.body.firstName;
        if (req.body.lastName) resumeFields.lastName = req.body.lastName;
        if (req.body.address) resumeFields.address = req.body.address;
        if (req.body.city) resumeFields.city = req.body.city;
        if (req.body.state) resumeFields.state = req.body.state;
        if (req.body.zipCode) resumeFields.zipCode = req.body.zipCode;
        if (req.body.cellphone) resumeFields.cellphone = req.body.cellphone;
        if (req.body.email) resumeFields.email = req.body.email;
        if (req.body.githubURL) resumeFields.githubURL = req.body.githubURL;
        if (req.body.linkedInURL) resumeFields.linkedInURL = req.body.linkedInURL;
        if (req.body.twitterURL) resumeFields.twitterURL = req.body.twitterURL;
        if (req.body.personalWebsiteURL) resumeFields.personalWebsiteURL = req.body.personalWebsiteURL;
        if (req.body.aboutMe) resumeFields.aboutMe = req.body.aboutMe;
        //add to devRoles array in db 
        let devRole = {}
        if (req.body.role) resumeFields.role = req.body.role;
        
        if (req.body.devSkillsAcquiredVia) resumeFields.devSkillsAcquiredVia = req.body.devSkillsAcquiredVia;

        //add to education array in db
        if (req.body.schoolName) resumeFields.schoolName = req.body.schoolName;
        if (req.body.diplomaAttained) resumeFields.diplomaAttained = req.body.diplomaAttained;
        if (req.body.diplomaTitle) resumeFields.diplomaTitle = req.body.diplomaTitle;

        //add to capstone project array
        if (req.body.projectGithubURL) resumeFields.projectGithubURL = req.body.projectGithubURL;
        if (req.body.projectDescription) resumeFields.projectDescription = req.body.projectDescription;
        if (req.body.projectPrimaryLanguage) resumeFields.projectPrimaryLanguage = req.body.projectPrimaryLanguage;

        //add to programmingLanguages array
        if (req.body.language) resumeFields.language = req.body.language;

        //add to framework array
        if (req.body.framework) resumeFields.framework = req.body.framework;

        //add to tech skills array
        if (req.body.skill) resumeFields.skill = req.body.skill;

        if (req.body.jobExperienceTime) resumeFields.jobExperienceTime = req.body.jobExperienceTime;

        //add to work experience array
        if (req.body.companyName) resumeFields.companyName = req.body.companyName;
        if (req.body.startDate) resumeFields.startDate = req.body.startDate;
        if (req.body.endDate) resumeFields.endDate = req.body.endDate;
        if (req.body.jobTitle) resumeFields.jobTitle = req.body.jobTitle;
        if (req.body.jobDescription) resumeFields.jobDescription = req.body.jobDescription;

        //find resume by user id
        Resume.findOne({
            user: req.user.id
        }).then(resume => {
            if (resume) {
                // Update resume if it already exists
                Resume.findOneAndUpdate({
                    user: req.user.id
                }, {
                    $set: resumeFields
                }, {
                    new: true
                }).then(resume => res.json(resume));
            } else {
                // Create resume
                new Resume(resumeFields).save().then(resume => res.json(resume));
            };
        });
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