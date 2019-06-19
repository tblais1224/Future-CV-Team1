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
}