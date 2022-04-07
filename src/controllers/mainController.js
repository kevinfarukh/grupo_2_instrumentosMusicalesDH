const fs = require('fs');
const path = require("path")

const {validationResult} = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    index: (req, res) => {
        let resultado = []
       if(req.query.search){
           for(let i = 0; i < products.length; i++){
               if(products[i].productName.toLowerCase().includes(req.query.search.toLowerCase())){
                   resultado.push(products[i])
               }
           }
       }else{
           resultado = products
       }
    res.render("index", {products : resultado})
    },

    register:(req,res)=>{
        res.render("register")
    },
    login:(req,res)=>{
        res.render("login");
    },
    carrito:(req,res)=>{
        res.render("carrito");
    },
    details: (req,res)=>{
        let id = req.params.id
        let product = products.find(i => i.id == id);
        res.render("productDetail",{product, products, id})
    },
    
    cargaGet: (req,res)=>{
        res.render("formularioDeCarga");
    },
    addDetails: (req,res)=>{
    
        //Constante con los errores
        const result = validationResult(req);

        if(result.errors.length > 0)
        {
            res.render("formularioDeCarga",
            {errors: result.mapped(),
            oldData: req.body});
        }
        /*let newProduct = {
            id: Date.now(),
            productName: req.body.productName,
            price: req.body.price,
            description: req.body.description,
            characteristics: req.body.characteristics,
            discount: req.body.discount,
            img: req.file.filename
        }
        products.unshift(newProduct)

        let productsJSON=JSON.stringify(products);

		fs.writeFileSync(productsFilePath, productsJSON);*/
		
		res.redirect('/')
    },
    edit:(req,res)=>{
        let id = req.params.id
        let product = products.find(i => i.id == id);
        res.render("formularioDeEdicion",{product})
    },
    update:(req,res) =>{
        let id = req.params.id;
        let productEdited = products.find(i => i.id == id);
        productEdited.productName = req.body.productName;
        productEdited.price = req.body.price;
        productEdited.description = req.body.description;
        productEdited.characteristics = req.body.characteristics;
        productEdited.discount = req.body.discount;

        let productsJSON=JSON.stringify(products);

		fs.writeFileSync(productsFilePath, productsJSON);
		
		res.redirect('/product-detail/' + id)
    },
    destroy: (req,res)=>{
        let id = req.params.id
        let productoEliminado = products.filter(i => i.id != id);
        let productsJSON=JSON.stringify(productoEliminado);

		fs.writeFileSync(productsFilePath, productsJSON);
		
		res.redirect('/')
    }

}

module.exports = mainController;