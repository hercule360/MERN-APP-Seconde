
// Require express 
const express = require("express");
const { test, addProduct, getProducts, getProductsById, deleteProducts, updateProducts, getProductByCategory, getProductsByUserId } = require("../controllers/product");

// Require router from express
const router = express.Router()

// Create route 

// Add product route
router.post("/add_product", addProduct)

// Get all product 
router.get("/all_products", getProducts)

// Get product by id
router.get("/get_product/:_id", getProductsById)

// Get product by User id
router.get('/products_by/:_id', getProductsByUserId);

// Get product by category
router.get("/get_products/:category", getProductByCategory);

// Delete product 
router.delete("/delete_product/:_id", deleteProducts)

// Update product
router.put("/update_product/:_id", updateProducts)

// Export routes 
module.exports = router ;