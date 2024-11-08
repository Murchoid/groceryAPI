const express = require('express');
const router = express.Router();
const {getProducts} = require('../models/groceryItemsApi');
const {searchProducts} = require('../models/groceryItemsApi');


router.get('/items',getProducts);
router.post('/search', searchProducts);

module.exports = router;