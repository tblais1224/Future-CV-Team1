<<<<<<< HEAD
const validador = require("validador")
const isEmpty = require("./is-empty");

module.exports = function validateRegistrationInput(data) {
    let errors = {};
}

data.name = isEmpty(data.name) ? "" : data.name
data.email = isEmpty(data.email) ? "" : data.email
data password = isEmpty(data.password) ? "" : data.password
data.password2 = isEmpty(data.password2) ? "" : data.password2
data.type = isEmpty(data.type) ? "" : data.type

if (!validador.isLength(data.name, {
        min: 3,
        max: 25
    })) {
    errors.name = "your name must be between 3 and 5 characters."
}
if (validador.isEmpty(data.name)) {
    errors.name = "Name field is required"
}
if (validador.isEmpty(data.Email)) {
    errors.name = "Email field is invalid"
}
if (validador.isEmail(data.Email)) {
    errors.name = "Email is invalid"
}
if (validador.isEmpty(data.Password)) {
    errors.name = "Password field is required"

}
if (!validador.isLength(data.Password, {
    min: 6,
    max: 25
})) {
errors.password = "your password must be between 6 and 25 characters."
}
if (validador.isEmpty(data.Password2)) {
    errors.name = "Passwords must match!";
}
if (validador.equals(data.Password, data.password2)) {
    errors.password2 = "Passwords must match!";
}

if (validador.isEmpty(data.Type)) {
    errors.name = "Type of user field is required"
}

return {
    errors,
    isValid: isEmpty(errors)
}
=======
const validator = require("validator")
const isEmpty = require("./is-empty")

module.exports = function validateRegisterInput(data) {
    let errors = {}
    //if isEmpty(data.name) returns true, return empty string "", else return the data.name
    //this is done because validator requires a string, if not a string it will error
    data.name = isEmpty(data.name) ? "" : data.name
    data.email = isEmpty(data.email) ? "" : data.email
    data.password = isEmpty(data.password) ? "" : data.password
    data.password2 = isEmpty(data.password2) ? "" : data.password2
    data.type = isEmpty(data.type) ? "" : data.type


    //below are the error handling that will be displayed to the user
    if (!validator.isLength(data.name, {
            min: 3,
            max: 25
        })) {
        errors.name = "Your name must be between 3 and 25 characters."
    }
    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required."
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid."
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required."
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required."
    }
    if (!validator.isLength(data.password, {
            min: 6,
            max: 25
        })) {
        errors.name = "Your password must be between 6 and 25 characters."
    }
    if (validator.isEmpty(data.password2)) {
        errors.password2 = "Password confirmation field is required."
    }
    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match!";
      }
    if (validator.isEmpty(data.type)) {
        errors.type = "Type of user field is required."
    }

    return {
        //errors object
        errors,
        //if no errors returns true
        isValid: isEmpty(errors)
    }
>>>>>>> test
}