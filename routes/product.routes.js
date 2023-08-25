// creating Product's custom route

const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/product.controllers")

productRouter.get("/info", productController);

module.exports = productRouter