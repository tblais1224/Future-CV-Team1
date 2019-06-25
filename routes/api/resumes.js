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
        let devRole = req.body.roles.map(val => {
            return {
                role: val
            }
        })
        if (devRole) resumeFields.devRoles = devRole;

        if (req.body.devSkillsAcquiredVia) resumeFields.devSkillsAcquiredVia = req.body.devSkillsAcquiredVia;

        //add to education array in db
        let education = []
        req.body.schoolNames.forEach(element => {
            let newEducation = {}
            let index = req.body.schoolNames.indexOf(element)
            newEducation.schoolName = element
            newEducation.diplomaAttained = req.body.diplomasAttained[index]
            newEducation.diplomaTitle = req.body.diplomaTitles[index]
            education.push(newEducation)
        });
        if (education.length !== 0) resumeFields.education = education;

        //add to capstone project array
        let capstoneProjects = []
        req.body.projectGithubURLs.forEach(element => {
            let newProject = {}
            let index = req.body.projectGithubURLs.indexOf(element)
            newProject.projectGithubURL = element
            newProject.projectDescription = req.body.projectDescriptions[index]
            newProject.projectPrimaryLanguage = req.body.projectPrimaryLanguages[index]
            capstoneProjects.push(newProject)
        });
        if (capstoneProjects.length !== 0) resumeFields.capstoneProjects = capstoneProjects;


        //add to programmingLanguages array
        let programmingLanguages = req.body.programmingLanguages.map(val => {
            return {
                language: val
            }
        })
        if (programmingLanguages) resumeFields.programmingLanguages = programmingLanguages;

        //add to framework array
        let frameworks = req.body.frameworks.map(val => {
            return {
                framework: val
            }
        })
        if (frameworks) resumeFields.frameworks = frameworks;

        //add to tech skills array
        let skills = req.body.techSkills.map(val => {
            return {
                skill: val
            }
        })
        if (skills) resumeFields.techSkills = skills;

        if (req.body.jobExperienceTime) resumeFields.jobExperienceTime = req.body.jobExperienceTime;

        //add to work experience array
        let workExperiences = []
        req.body.jobTitles.forEach(element => {
            let newProject = {}
            let index = req.body.jobTitles.indexOf(element)
            newProject.jobTitle = element
            newProject.companyName = req.body.companyNames[index]
            newProject.startDate = req.body.startDates[index]
            newProject.endDate = req.body.endDates[index]
            newProject.jobDescription = req.body.jobDescriptions[index]
            workExperiences.push(newProject)
        });
        if (workExperiences.length !== 0) resumeFields.workExperiences = workExperiences;

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


// @route   GET /api/resume/all
// @desc   get all resumes
// @access   Public
router.get("/all", (req, res) => {
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

// @route   GET /api/resume/
// @desc   get current users resume if logged in
// @access   Private
router.get(
    "/",
    passport.authenticate("jwt", {
      session: false
    }),
    (req, res) => {
      const errors = {};
      Resume.findOne({
        user: req.user.id
      })
        .then(resume => {
          if (!resume) {
            errors.noResume = "There is no resume for this user!";
            return res.status(404).json(errors);
          }
          res.json(resume);
        })
        .catch(err => res.status(404).json(err));
    }
  );

// @route   GET api/resume/user/:user_id
// @desc   get resume by user_id
// @access   public
router.get("/user/:user_id", (req, res) => {
    const errors = {};
    Resume.findOne({
            user: req.params.user_id
        })
        .then(resume => {
            if (!resume) {
                errors.noResume = "There is not resume for this user.";
                res.status(404).json(errors);
            }
            res.json(resume);
        })
        .catch(err =>
            res.status(404).json({
                resume: "No resume exists for this user."
            })
        );
});

// @route   GET api/resume/filter/language/:language
// @desc   get resume by filter
// @access   public
router.get("/filter/language/:language", (req, res) => {
    const errors = {};
    Resume.find({
            "programmingLanguages.language" : req.params.language
        })
        .then(resumes => {
            if (!resumes) {
                errors.noResume = "There is not a resume for this search filter.";
                res.status(404).json(errors);
            }
            res.json(resumes);
        })
        .catch(err =>
            res.status(404).json({
                resume: "No resume exists for this search filter."
            })
        );
});

// @route   GET api/resume/filter/devrole/:role
// @desc   get resume by filter
// @access   public
router.get("/filter/devrole/:role", (req, res) => {
    const errors = {};
    Resume.find({
            "devRoles.role" : req.params.role
        })
        .then(resumes => {
            if (!resumes) {
                errors.noResume = "There is not a resume for this search filter.";
                res.status(404).json(errors);
            }
            res.json(resumes);
        })
        .catch(err =>
            res.status(404).json({
                resume: "No resume exists for this search filter."
            })
        );
});

// @route   GET api/resume/filter/frameworks/:framework
// @desc   get resume by filter
// @access   public
router.get("/filter/frameworks/:framework", (req, res) => {
    const errors = {};
    Resume.find({
            "frameworks.framework" : req.params.framework
        })
        .then(resumes => {
            if (!resumes) {
                errors.noResume = "There is not a resume for this search filter.";
                res.status(404).json(errors);
            }
            res.json(resumes);
        })
        .catch(err =>
            res.status(404).json({
                resume: "No resume exists for this search filter."
            })
        );
});

// @route   GET api/resume/filter/techskills/:skill
// @desc   get resume by filter
// @access   public
router.get("/filter/techskills/:skill", (req, res) => {
    const errors = {};
    Resume.find({
            "techSkills.skill" : req.params.skill
        })
        .then(resumes => {
            if (!resumes) {
                errors.noResume = "There is not a resume for this search filter.";
                res.status(404).json(errors);
            }
            res.json(resumes);
        })
        .catch(err =>
            res.status(404).json({
                resume: "No resume exists for this search filter."
            })
        );
});


// @route   delete /api/resume
// @desc   delete user and resume
// @access   Private
router.delete(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        Resume.findOneAndRemove({
            user: req.user.id
        }).then(() => {
            User.findOneAndRemove({
                _id: req.user.id
            }).then(() => {
                res.json({
                    success: true
                })
            });
        });
    }
);

module.exports = router;