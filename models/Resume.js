const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ResumeSchema = new Schema({
    //add the users _id
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    cellphone: {
        type: String
    },
    //maybe use the user email?
    email: {
        type: String,
        required: true
    },
    githubURL: {
        type: String,
        required: true
    },
    linkedInURL: {
        type: String
    },
    twitterURL: {
        type: String
    },
    personalWebsiteURL: {
        type: String
    },
    aboutMe: {
        type: String
    },
    devRole: {
        type: String,
        required: true
    },
    devSkillsAcquiredVia: {
        type: String,
        required: true
    },
    education: [{
        schoolName: {
            type: String
        },
        //bachelors, etc...
        diplomaAttained: {
            type: String
        },
        //computer science, etc...
        diplomaTitle: {
            type: String
        }
    }],
    capstoneProjects: [{
        projectGithubURL: {
            type: String
        },
        projectDescription: {
            type: String
        },
        projectPrimaryLanguage: {
            type: String
        }
    }],
    programmingLanguages: [{
        language: {
            type: String
        }
    }],
    frameworks: [{
        framework: {
            type: String
        }
    }],
    techSkills: [{
        skill: {
            type: String
        }
    }],
    jobExperienceTime: {
        type: Number
    },
    workExperiences: [{
        companyName:{
            type: String
        },
        startDate:{
            type: Date
        },
        endDate: {
            type: Date,
            default: Date.now
        },
        //maybe add a current option
        jobTitle: {
            type: String
        },
        jobDescription: {
            type: String
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Resume = mongoose.model("resume", ResumeSchema)