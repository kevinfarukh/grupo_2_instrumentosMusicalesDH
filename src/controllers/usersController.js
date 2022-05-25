const fs = require("fs")
const path = require("path")
const bcrypt = require("bcryptjs")
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Models

const User = db.User;

const userController = {
    index:(req, res) =>{
        res.render("users/user", {
            user: req.session.userLogged
        })
    },
    create:(req,res)=>{
        res.render("users/formularioCrearUsuario")
    },
    createPost:(req,res)=>{
        //info
        let errorsValidator = validationResult(req);
        let oldData = req.body;
        if(errorsValidator.errors.length > 0){
            res.render("users/formularioCrearUsuario", {
                errors: errorsValidator.mapped(),
                oldData: oldData
            });
            console.log(errorsValidator.mapped())
        } else {
            User.create({
                name: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                img: req.file ? req.file.filename : 'default.jpg'
            })
            .then(user=>{
                res.redirect('/')
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    login: (req, res) => {
        res.render("login")
        
    },
    loginProcess: (req, res) => {
        const results = validationResult(req);
        if (results.errors.length > 0) {
            res.render("login", {
                errors: results.mapped()
            });
        }else {
            let userToLog = users.find(email => email.email === req.body.email);
            if (userToLog) {
                let samePassword = bcrypt.compareSync(req.body.password, userToLog.password);
                if (samePassword) {
                    //delete userToLog.password; 
                    req.session.userLogged = userToLog;
                    
                    if(req.body.recordarme){
                        res.cookie("userEmail", req.body.email, {maxAge: 1000 * 120})
                    }
                    
                    res.redirect("/user");
                } else {
                    res.render("login", {
                        errors: {
                            password: {
                                msg: "Contraseña incorrecta"
                            }
                        }
                    });
                }
            }else{
                res.render("login", {
                    errors: {
                        email: {
                            msg: "No se encuentra el email"
                        }
                    }
                });
            }
        }
    },
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        res.redirect("/");
    }
}

module.exports = userController