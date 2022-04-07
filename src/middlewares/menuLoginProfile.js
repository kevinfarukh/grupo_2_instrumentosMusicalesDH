const path = require("path");
const fs = require("fs");
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function menuLoginProfile (req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = users.find(user => user.email === emailInCookie);
    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

  next();
}

module.exports = menuLoginProfile