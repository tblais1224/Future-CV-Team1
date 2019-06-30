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
    capstoneProjects: [{
        projectGithubURL: {
            type: String,
            required: true
        },
        projectDescription: {
            type: String,
            required: true
        },
        projectPrimaryLanguage: {
            type: String,
            required: true
        }
    }],
    programmingLanguages: [{
        language: {
            type: String,
            required: true
        }
    }],
    frameworks: [{
        framework: {
            type: String,
            required: true
        }
    }],
    techSkills: [{
        skill: {
            type: String,
            required: true
        }
    }],
    jobExperienceTime: {
        type: Number,
        required: true
    },
    workExperiences: [{
        companyName:{
            type: String,
            required: true
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
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Resume = mongoose.model("resume", ResumeSchema)