const {body} = require("express-validator");

const signupValidator = [
    body('userName').notEmpty().withMessage('El usuario no puede estar vacío'),
    body('email').notEmpty().withMessage('El email no puede estar vacío').isEmail().withMessage('El email no es válido'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacía').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres')
]

module.exports = signupValidator;