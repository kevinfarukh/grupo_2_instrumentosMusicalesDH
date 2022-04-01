const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userController = require("../controllers/usersController");

router.get("/", userController.index)

module.exports = router

