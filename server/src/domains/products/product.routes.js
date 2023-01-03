const express = require("express")
const { createProduct } = require("./product.controller")

// Controllers

// Middlewares
const { checkToken } = require("../../middlewares/checkToken")
const { onlyAdmin } = require("../../middlewares/onlyAdmin")
const { uploadFile, multerLimitSizeErrorHandler } = require("../../utils/uploadFile")



const productRouter = express.Router()


//Endpoints


// createProduct(ONLYADMIN)

productRouter.post("/",
  checkToken,
  onlyAdmin,
  uploadFile.array("productImg",4),
  createProduct
)

productRouter.post("/test", uploadFile.array("productImg") ,multerLimitSizeErrorHandler,(req, res) => {
  res.send({a:1})
  
})


//get all products

//Get product by Id

// Update product


// delete product

module.exports = { productRouter }