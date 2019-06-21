const validator = require("validator")
const isEmpty = require("./is-empty")

module.exports = function validateResumeInput(data) {
    let errors = {}

    data.firstName = isEmpty(data.firstName) ? "" : data.firstName
    data.lastName = isEmpty(data.lastName) ? "" : data.lastName
    data.address = isEmpty(data.address) ? "" : data.address
    data.city = isEmpty(data.city) ? "" : data.city
    data.state = isEmpty(data.state) ? "" : data.state
    data.zipCode = isEmpty(data.zipCode) ? "" : data.zipCode
    data.cellPhone = isEmpty(data.cellPhone) ? "" : data.cellPhone
    data.email = isEmpty(data.email) ? "" : data.email
    data.githubURL = isEmpty(data.githubURL) ? "" : data.githubURL
    data.devSkillsAcquiredVia = isEmpty(data.devSkillsAcquiredVia) ? "" : data.devSkillsAcquiredVia
    data.jobExperienceTime = isEmpty(data.jobExperienceTime) ? "" : data.jobExperienceTime




    if (validator.isEmpty(data.firstName)) {
        errors.firstName = "Name field is required."
    }
    if (validator.isEmpty(data.lastName)) {
        errors.lastName = "Name field is required."
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required."
    }
    if (validator.isEmpty(data.address)) {
        errors.address = "Address field is required."
    }
    if (validator.isEmpty(data.city)) {
        errors.city = "City field is required."
    }
    if (validator.isEmpty(data.state)) {
        errors.state = "State field is required."
    }
    if (validator.isEmpty(data.zipCode)) {
        errors.zipCode = "Zip code field is required."
    }
    if (validator.isEmpty(data.githubURL)) {
        errors.githubURL = "github URL field is required."
    }
    if (validator.isEmpty(data.devSkillsAcquiredVia)) {
        errors.devSkillsAcquiredVia = "Developer skills acquired via field is required."
    }
    if (validator.isEmpty(data.jobExperienceTime)) {
        errors.jobExperienceTime = "Job experience field is required."
    }
    if (!isEmpty(data.githubURL)) {
        if (!validator.isURL(data.githubURL)) {
            errors.githubURL = "Not a valid URL"
        }
    }
    if (!isEmpty(data.personalWebsiteURL)) {
        if (!validator.isURL(data.personalWebsiteURL)) {
            errors.personalWebsiteURL = "Not a valid URL"
        }
    }
    if (!isEmpty(data.twitterURL)) {
        if (!validator.isURL(data.twitterURL)) {
            errors.twitterURL = "Not a valid URL"
        }
    }
    if (!isEmpty(data.linkedInURL)) {
        if (!validator.isURL(data.linkedInURL)) {
            errors.linkedInURL = "Not a valid URL"
        }
    }

    return {
        //errors object
        errors,
        //if no errors returns true
        isValid: isEmpty(errors)
    }
}