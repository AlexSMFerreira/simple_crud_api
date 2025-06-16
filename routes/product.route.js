const express = require("express");
const router = express.Router();
const {createProduct, updateProduct, getProduct, getProducts, deleteProduct} = require('../controllers/product.controller.js');

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.get('/', getProducts);

router.get('/:id', getProduct);

router.delete('/:id', deleteProduct);

module.exports = router;