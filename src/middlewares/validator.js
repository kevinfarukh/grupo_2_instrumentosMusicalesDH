const { body } = require("express-validator");

const validation = [
    body("email").notEmpty().withMessage("inserte un email"),
    body("password").notEmpty().withMessage("inserte una contraseña")
];

module.exports = validation;