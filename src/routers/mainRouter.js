const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")

router.get("/", mainController.index)
router.get("/register", mainController.register)
router.get("/carrito", mainController.carrito )
router.get("/login", mainController.login)
router.get("/product-detail",mainController.details)

module.exports = router