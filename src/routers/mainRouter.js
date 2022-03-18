const express = require("express")
const router = express.Router()

const mainController = require("../controllers/mainController")


router.get("/", mainController.index);
router.get("/create",mainController.cargaGet);
router.get("/product-detail/:id",mainController.details);


router.get("/register", mainController.register);

router.get("/carrito", mainController.carrito );

router.get("/login", mainController.login);



router.get("/create",mainController.cargaGet);


router.get("/add-product-detail",mainController.anotherProductDetail);
router.post("/product-detail",mainController.addDetails);

router.get("/product-detail/:id/edit", mainController.edit)
router.put("/product-detail/:id", mainController.update)

router.delete("/product-detail/:id",mainController.destroy)



module.exports = router;