const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userController = require("../controllers/usersController");

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./public/images/users");
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

//middleware
const upload = multer({ storage })
const validation = require("../middlewares/validator");
const usuarioLogueado = require("../middlewares/usuarioLogueado");
const usuarioNoLogueado = require("../middlewares/usuarioNoLogueado");
const signupValidator = require("../middlewares/signupValidator");
//profile
router.get("/", usuarioNoLogueado,userController.index)

//creación de usuario
router.get("/create",usuarioLogueado, userController.create);
router.post("/create",upload.single("img"), signupValidator,userController.createPost);

//login
router.get("/login", usuarioLogueado, userController.login)
router.post("/login", validation , userController.loginProcess)

//logout
router.get("/logout", userController.logout)

module.exports = router

