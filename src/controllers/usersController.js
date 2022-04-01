const fs = require("fs")
const path = require("path")
const bcrypt = require("bcryptjs")
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    index:(req, res) =>{
        res.send("user")
    },
    create:(req,res)=>{
        res.render("users/formularioCrearUsuario")
    },
    createPost:(req,res)=>{
        //info
        let newUser = {
            id: Date.now(),
            userName: req.body.userName,
            email: req.body.email,
            password: bcrypt.hashSync (req.body.password, 10),
            img: req.file.filename
        };
        users.push(newUser)

        let userJSON=JSON.stringify(users);

		fs.writeFileSync(usersFilePath, userJSON);
		
        //redirigir
        res.redirect("/")
    }
}

module.exports = userController